import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback
} from 'react';
import { navigate } from 'gatsby';
import { isBrowser, isHomePage, scrollTo } from 'utils';

export const GlobalContext = createContext({
  overflowHidden: null,
  animate: null,
  showMenu: false,
  transitionPage: false,
  handleToggleMenu: () => {},
  setOverflowHidden: () => {},
  setTransitionPage: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [overflowHidden, setOverflowHidden] = useState(null);
  const [animate, setAnimate] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [transitionPage, setTransitionPage] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setShowMenu(prevState => !prevState);
    setOverflowHidden(!showMenu);
  }, [showMenu]);
  const handleNavigate = useCallback(
    ({ isScrollTop, pathname, url }) =>
      e => {
        e.preventDefault();

        if (transitionPage) return;

        //* scroll top
        if (
          (isBrowser && isScrollTop) ||
          url === '#' ||
          (pathname === '/' && url === '/')
        ) {
          return window.scrollTo(0, 0);
        }

        //* scroll to id from main page
        if (pathname === '/' && url.includes('#')) {
          const id = url.split('#')[1];

          return scrollTo(id);
        }

        setTransitionPage(true);
        setTimeout(() => {
          setTransitionPage(false);

          if (url.includes('#')) {
            const id = url.split('#')[1];
            navigate(`/${url}`);

            return setTimeout(() => {
              scrollTo(id, 'instant');
            }, 300);
          }
          navigate(url, 'instant');

          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 100);
        }, 1800);
      },
    [transitionPage, setTransitionPage]
  );

  const contextValue = useMemo(() => {
    return {
      overflowHidden,
      animate,
      showMenu,
      transitionPage,
      setOverflowHidden,
      handleToggleMenu,
      setTransitionPage,
      handleNavigate
    };
  }, [
    overflowHidden,
    animate,
    showMenu,
    transitionPage,
    setOverflowHidden,
    handleToggleMenu,
    setTransitionPage,
    handleNavigate
  ]);

  useEffect(() => {
    if (window.scrollY === 0 && isHomePage()) {
      setOverflowHidden(true);
      setAnimate(true);
    }

    const timer = setTimeout(() => {
      setOverflowHidden(false);
      setAnimate(false);
    }, 4800);

    return () => {
      setOverflowHidden(false);
      setAnimate(false);
      clearTimeout(timer);
    };
  }, []);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
