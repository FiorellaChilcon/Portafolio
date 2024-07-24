import React, { useRef, useEffect, useState } from 'react';

export default function SlideInAnimation(props) {
  const { children, animationType, styleClasses } = props;
  const targetElement = useRef(null);
  const [displayAnimation, setDisplayAnimation] = useState(false);

  const elementInView = (dividend = 1) => {
    const elementTop = targetElement.current.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = () => {
    const elementTop = targetElement.current.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScrollAnimation = () => {
    if (elementInView()) {
      setDisplayAnimation(true);
    } else if (elementOutofView()) {
      setDisplayAnimation(false);
    }
  }

  const setUpListeners = () => {
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);
    window.addEventListener('orientationchange', handleScrollAnimation);
  }


  const removeListeners = () => {
    window.removeEventListener('scroll', handleScrollAnimation);
    window.removeEventListener('resize', handleScrollAnimation);
    window.removeEventListener('orientationchange', handleScrollAnimation);
  }

  useEffect(() => {
    handleScrollAnimation();
    setUpListeners();
    return removeListeners;
  }, []); // eslint-disable-line

  return (
    <div
      ref={targetElement}
      className={`${styleClasses} scroll-element ${displayAnimation && 'scrolled'} ${animationType}`}
    >
      {children}
    </div>
  )
}
