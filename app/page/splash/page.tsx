'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-white my-5">Data Sampurna</div>
        <div className="w-32 h-1 bg-gray-100 rounded-full">
          <div className="h-full bg-blue-900 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
