import styled from 'styled-components';

export const CenterWrapperStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? '0' : '0 2.5rem')};
  margin: 0 auto;
  max-width: 130rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 2.2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1.8rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding: 0 1.5rem;
  }
`;

export const OverlayStyled = styled.div`
  position: absolute;
  width: 50%;
  height: 10rem;
  ${({ $isLeft }) => ($isLeft ? 'left: 0' : 'right: 0')};
  bottom: -5%;
  background-color: ${props => props.theme.colors.text.main};
  z-index: -25;
`;

export const motionDefaultAnimateProps = {
  initial: { opacity: 0, y: 200 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
};
