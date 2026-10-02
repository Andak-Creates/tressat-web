'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Mic,
  ShieldCheck,
  Star,
  Clock,
  Check
} from 'lucide-react';
import AppBadges from '@/components/AppBadges';

export default function HomePage() {
  return (
    <div className="space-y-32 sm:space-y-40 pb-32">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="pt-16 sm:pt-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-xs font-medium text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>The beauty & grooming mobile app</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]">
              Look your best.<br />
              <span className="text-neutral-400">On your schedule.</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed font-normal">
              No endless WhatsApp back-and-forth. Discover vetted barbers, braiders, nail artists, and stylists near you &mdash; and book your spot in seconds.
            </p>

            <div className="pt-2">
              <AppBadges />
            </div>

            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg text-left">
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">4.9★</div>
                <div className="text-xs text-neutral-400 mt-0.5">Verified ratings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">100%</div>
                <div className="text-xs text-neutral-400 mt-0.5">Paystack escrow</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">0 min</div>
                <div className="text-xs text-neutral-400 mt-0.5">Bench waiting</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <Image
                src="/girl.png"
                alt="TressAt Look"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Boho French Curls</div>
                    <div className="text-xs text-neutral-400">Chioma A. • Lekki Phase 1</div>
                  </div>
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
                    <Star size={13} className="fill-amber-300" />
                    <span>4.98</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE CORE EXPERIENCES */}
      {/* ========================================================================= */}
      <section id="experience" className="px-6 sm:px-8 max-w-7xl mx-auto space-y-24">
        
        {/* Block 1: Proximity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">01 / Proximity</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Know who is open 5 minutes away.
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              Whether you need a fresh Friday taper fade before dinner or a mobile braider to visit your home on Sunday morning &mdash; see real-time distance, availability, and transparent pricing right on the map.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Nearby Artisans</span>
              <span className="text-xs text-emerald-400 font-medium">● Open Slots Today</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Blade Studio</div>
                  <div className="text-xs text-neutral-400">Ikeja GRA • 0.8 km away</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-white">Skin Fade + Beard</div>
                  <div className="text-xs text-neutral-400">₦8,500</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Divine Braids & Locs</div>
                  <div className="text-xs text-neutral-400">Lekki Phase 1 • 1.4 km away</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-white">Knotless Braids</div>
                  <div className="text-xs text-neutral-400">₦22,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Voice Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">02 / Clarity</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Speak your style before you sit in the chair.
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              Explaining hair length and styling shouldn't be stressful. Send reference photos and record quick voice notes directly to your artisan inside the app so there are zero misunderstandings.
            </p>
          </div>

          <div className="lg:col-span-6 lg:order-1 p-8 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-4">
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
                <Mic size={14} className="text-white" />
                <span>Client Voice Note</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900 flex items-center justify-between text-xs">
                <span className="text-neutral-300">“Keep the taper low on the sides and leave texture on top.”</span>
                <span className="text-neutral-400 font-mono text-[11px]">0:14</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950 border border-white/5 flex items-center gap-3 text-xs text-neutral-400">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <span>Artisan confirmed style reference & slot reserved</span>
            </div>
          </div>
        </div>

        {/* Block 3: Escrow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">03 / Protection</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Paystack escrow keeps your money safe.
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              No awkward transfer screenshots or haggling. Your payment is held safely in escrow and only disbursed to the artisan once your appointment is finished to your satisfaction.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-4">
            <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 uppercase tracking-wider font-semibold">Protected Checkout</span>
                <span className="text-emerald-400 font-bold">Escrow Verified</span>
              </div>
              <div className="text-2xl font-bold text-white font-mono">₦25,000</div>
              <div className="text-xs text-neutral-400">Held securely until appointment completion</div>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES */}
      {/* ========================================================================= */}
      <section id="crafts" className="px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Every craft, covered.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Braids & Locs',
              desc: 'Knotless, French curls, passion twists & dreadlock retwist.',
              image: '/girl.png'
            },
            {
              title: 'Barbers & Cuts',
              desc: 'Precision fades, low tapers, beard sculpts & hot towel shave.',
              image: '/tress-splash.png'
            },
            {
              title: 'Wigs & Styling',
              desc: 'HD lace frontal installs, silk press, treatments & color.',
              image: '/background.png'
            },
            {
              title: 'Nails & Lashes',
              desc: 'Gel-X, Russian manicures, acrylics & volume lash sets.',
              image: '/girl.png'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-neutral-800">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOR ARTISANS (UPDATED HEADLINE & BUTTON) */}
      {/* ========================================================================= */}
      <section id="for-pros" className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="p-10 sm:p-16 rounded-[36px] bg-neutral-900 border border-white/10 space-y-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">For Artisans</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Your craft deserves a real schedule.
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Stop losing bookings in messy WhatsApp chats. TressAt gives you an automated calendar, upfront client deposits that eliminate no-shows, and direct settlements straight to your bank account.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-sm font-bold tracking-tight transition-all"
            >
              <span>Download TressAt</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DOWNLOAD CTA */}
      {/* ========================================================================= */}
      <section id="download" className="px-6 sm:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Step out looking your best.
          </h2>
          <p className="text-neutral-400 text-base">
            Download TressAt for iOS & Android today.
          </p>
        </div>

        <div className="flex justify-center">
          <AppBadges />
        </div>
      </section>

    </div>
  );
}
