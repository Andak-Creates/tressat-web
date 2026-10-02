'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
            <Image
              src="/tressatLogo.png"
              alt="TressAt"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">TressAt</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
          <Link href="/#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="/#crafts" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#for-pros" className="hover:text-white transition-colors">For Artisans</Link>
          <Link href="/support" className="hover:text-white transition-colors">Support</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#download"
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-tight transition-all"
          >
            Get the App
          </a>
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-b border-white/10 px-8 py-6 space-y-4 text-sm font-medium">
          <Link href="/#experience" onClick={() => setOpen(false)} className="block py-1 text-neutral-200">Experience</Link>
          <Link href="/#crafts" onClick={() => setOpen(false)} className="block py-1 text-neutral-200">Services</Link>
          <Link href="/#for-pros" onClick={() => setOpen(false)} className="block py-1 text-neutral-200">For Artisans</Link>
          <Link href="/support" onClick={() => setOpen(false)} className="block py-1 text-neutral-200">Support</Link>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs text-neutral-400">
            <Link href="/privacy" onClick={() => setOpen(false)}>Privacy Policy</Link>
            <Link href="/terms" onClick={() => setOpen(false)}>Terms of Service</Link>
            <Link href="/delete-account" onClick={() => setOpen(false)} className="text-rose-400">Delete Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
