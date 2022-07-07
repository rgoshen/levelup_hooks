import { useLayoutEffect } from 'react';

// https://usehooks.com/page/2
export default function useBodyLockScroll() {
  useLayoutEffect(() => {
    // Get original value of body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}
