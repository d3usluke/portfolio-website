import { keyframes } from 'styled-components';

export const Load = keyframes`
    0% {
        transform: translateX(0) scale(1);
    }
    50% {
        transform: translateX(-60%) scale(1.6);
    }
    100% {
        transform: translateX(0) scale(1);
    }
`;

export const Bounce = keyframes`
  0% {
      top: 0;
      -webkit-animation-timing-function: ease-in;
    }
    40% {
    }
    50% {
      top: 1rem;
      height: 1rem;
      -webkit-animation-timing-function: ease-out;
    }
    55% {
      top: 1.2rem;
      height: 1rem;
      -webkit-animation-timing-function: ease-in;
    }
    65% {
      top: 1rem;
      height: 0.9rem;
      -webkit-animation-timing-function: ease-out;
    }
    95% {
      top: 0;
      -webkit-animation-timing-function: ease-in;
    }
    100% {
      top: 0;
      -webkit-animation-timing-function: ease-in;
    }
`;

export const ShineSlide = keyframes`
   0% {
      left: -80rem;
    }
    10% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      left: 130rem;
    }
`;

export const StrokeAnimate = keyframes`
    40% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0%;
      opacity: 1;
    }
`;

export const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const FadeIn = keyframes`
  from {
    transform: scale(.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Rotate = keyframes`
  from {
      transform: rotate(360deg);
    }  
    to {
      transform: rotate(0);
    }
`;

export const Shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
