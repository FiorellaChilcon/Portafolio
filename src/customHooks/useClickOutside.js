import { useEffect } from 'react';

export const useClickOutside = ({ refs, handler }) => {
  useEffect(() => {
    const listener = (event) => {
      const isOutside = refs.every(ref => !ref.current || !ref.current.contains(event.target));
      if (isOutside) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [refs, handler]);
};
