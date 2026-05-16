'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-iris-400 via-iris to-iris-700 transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(91,107,255,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
