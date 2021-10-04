import { useRef, useEffect } from 'react';

const useFadeIn = (
  direction = 'stop',
  threshold = 0,
  percent = 15,
  delay = 0,
) => {
  const dom = useRef();

  const handleDirection = direction => {
    switch (direction) {
      case 'stop':
        return 'translate3d(0,0,0)';
      case 'up':
        return `translate3d(0, ${percent}%, 0)`;
      case 'down':
        return `translate3d(0, -${percent}%, 0)`;
      case 'right':
        return `translate3d(${percent}%, 0, 0)`;
      case 'left':
        return `translate3d(-${percent}%, 0, 0)`;
      default:
        return;
    }
  };

  const handleScroll = ([entry]) => {
    const { current } = dom;
    if (entry.isIntersecting) {
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';
      current.style.transitionProperty = 'opacity transform';
      current.style.transitionDuration = '1s';
      current.style.transitionTimingFunction = 'ease';
      current.style.transitionDelay = `${delay}s`;
    }
  };

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);
      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useFadeIn;
