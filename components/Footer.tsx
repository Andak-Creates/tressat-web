import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black text-neutral-400 text-xs pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                <Image src="/tressatLogo.png" alt="TressAt" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">TressAt</span>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              The mobile marketplace connecting clients with top-rated barbers, braiders, nail artists, and beauty artisans.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-white text-xs font-semibold uppercase tracking-wider block">App</span>
              <ul className="space-y-2.5">
                <li><a href="#download" className="hover:text-white transition-colors">Download iOS</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download Android</a></li>
                <li><Link href="/#for-pros" className="hover:text-white transition-colors">For Artisans</Link></li>
                <li><Link href="/#crafts" className="hover:text-white transition-colors">Services</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white text-xs font-semibold uppercase tracking-wider block">Support</span>
              <ul className="space-y-2.5">
                <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="mailto:support@tressat.com" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><Link href="/delete-account" className="hover:text-white transition-colors">Data Deletion</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white text-xs font-semibold uppercase tracking-wider block">Legal</span>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-400 text-xs">
          <div>© {new Date().getFullYear()} TressAt. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/delete-account" className="hover:text-white transition-colors">Data Deletion</Link>
            <Link href="/support" className="hover:text-white transition-colors">Help</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
