'use client';

import React from 'react';
import { Apple } from 'lucide-react';

export default function AppBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* App Store */}
      <a
        href="https://apps.apple.com/app/tressat/id6740000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-semibold text-sm shadow-sm active:scale-95"
      >
        <Apple size={18} className="fill-black" />
        <span className="tracking-tight">Download on iOS</span>
      </a>

      {/* Google Play */}
      <a
        href="https://play.google.com/store/apps/details?id=com.vwindi.tressat"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800 transition-all font-semibold text-sm active:scale-95"
      >
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <path fill="#EA4335" d="M3.6 1.45L13.8 12 3.6 22.55C3.3 22.25 3 21.65 3 20.8V3.2C3 2.35 3.3 1.75 3.6 1.45Z" />
          <path fill="#FBBC04" d="M17.4 8.35L13.8 12l3.6 3.65 4.15-2.4c1.15-.65 1.15-1.75 0-2.4L17.4 8.35Z" />
          <path fill="#4285F4" d="M3.6 1.45L17.4 8.35 13.8 12 3.6 1.45Z" />
          <path fill="#34A853" d="M13.8 12L17.4 15.65 3.6 22.55 13.8 12Z" />
        </svg>
        <span className="tracking-tight">Get on Android</span>
      </a>
    </div>
  );
}
