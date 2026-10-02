import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - TressAt',
  description: 'Terms of Service, End User License Agreement (EULA), and platform guidelines for TressAt.',
};

export default function TermsPage() {
  const lastUpdated = 'September 30, 2026';

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-300 space-y-12">
      {/* Back button */}
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
          <FileText size={14} />
          <span>End User License Agreement & Service Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-sm text-slate-400">
          Last Updated: <span className="text-slate-200 font-medium">{lastUpdated}</span>
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-sm leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and <strong>Vwindi Technologies</strong> ("TressAt", "we", "us"). By downloading, accessing, or using the TressAt mobile application or website, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Nature of the Marketplace Platform</h2>
          <p>
            TressAt operates an online technology marketplace that connects independent beauty professionals, barbers, braiders, stylists, and estheticians ("Service Providers") with clients seeking beauty and grooming services ("Clients").
          </p>
          <p>
            <strong>Important Disclaimer:</strong> TressAt is not an employer, salon operator, or direct provider of beauty services. Independent Service Providers are third-party contractors responsible for their own services, hygiene practices, licensing, and tools.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Account Registration & Security</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>You must be at least 18 years of age (or the age of legal majority in your jurisdiction) to create an account.</li>
            <li>You agree to provide accurate, current, and complete registration details.</li>
            <li>You are solely responsible for maintaining the confidentiality of your account credentials.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Bookings, Payments, & Cancellations</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Upfront Payment & Escrow:</strong> Booking confirmation requires payment processed securely via Paystack. Funds are held in escrow and released upon appointment completion.</li>
            <li><strong>Platform Fee:</strong> TressAt charges a nominal platform convenience fee to support hosting, security, and dispute resolution services.</li>
            <li><strong>Cancellation Window:</strong> Clients may cancel or reschedule their appointment within the provider's stated cancellation window for a full refund. Cancellations made outside this window may be subject to a cancellation fee.</li>
            <li><strong>No-Shows:</strong> If a client fails to arrive without notice, the appointment fee may be forfeited to compensate the service provider for their reserved time slot.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. User Conduct & In-App Communications</h2>
          <p>
            Users agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>Harass, abuse, defame, or threaten other users in chat or voice messages.</li>
            <li>Upload obscene, defamatory, or copyright-infringing photos or recordings.</li>
            <li>Attempt to bypass the platform's payment mechanism to circumvent safety guarantees.</li>
            <li>Use automated bots, scrapers, or reverse-engineer the mobile software.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Apple App Store Specific EULA Clauses</h2>
          <p>If you downloaded TressAt from the Apple App Store, the following terms apply:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>Acknowledgement:</strong> You acknowledge that this agreement is concluded between you and TressAt only, and not with Apple Inc. TressAt, not Apple, is solely responsible for the App and its content.</li>
            <li><strong>Maintenance & Support:</strong> TressAt is solely responsible for providing any maintenance and support services. Apple has no obligation whatsoever to furnish any maintenance.</li>
            <li><strong>Warranty:</strong> In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any); to the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever.</li>
            <li><strong>Third-Party Beneficiary:</strong> Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms, and have the right to enforce these Terms against you as a third-party beneficiary.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TressAt and Vwindi Technologies shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of or inability to use the platform, including interactions between clients and service providers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">8. Contact Information</h2>
          <p>For questions regarding these Terms, contact us at:</p>
          <div className="p-4 rounded-xl glass-card space-y-1 text-xs">
            <div><strong>Email:</strong> <a href="mailto:legal@tressat.com" className="text-indigo-400 underline">legal@tressat.com</a> or <a href="mailto:support@tressat.com" className="text-indigo-400 underline">support@tressat.com</a></div>
            <div><strong>Company:</strong> Vwindi Technologies</div>
          </div>
        </section>
      </div>
    </div>
  );
}
