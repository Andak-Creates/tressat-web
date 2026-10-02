import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  ArrowLeft,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy - TressAt",
  description:
    "Learn how TressAt collects, utilizes, protects, and handles your personal data across iOS and Android apps.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 30, 2026";

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-300 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">
          Last Updated:{" "}
          <span className="text-slate-200 font-medium">{lastUpdated}</span> •
          Effective Immediately
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-10 text-sm leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            1. Introduction & Overview
          </h2>
          <p>
            Welcome to <strong>TressAt</strong> ("we", "us", "our", or the
            "Platform"), operated by <strong>Vwindi Technologies</strong>. We
            are committed to safeguarding your privacy and protecting the
            personal information you share with us.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your data when you use the TressAt mobile applications
            (iOS and Android) and website (
            <a href="https://tressat.com" className="text-indigo-400 underline">
              tressat.com
            </a>
            ). By creating an account or accessing the Platform, you consent to
            the data practices described herein.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white">
            2. Information We Collect
          </h2>
          <p>
            To provide booking, distance calculations, in-app communication, and
            payment services, we collect:
          </p>
          <div className="space-y-3 pl-4 border-l-2 border-indigo-500/40">
            <div>
              <strong className="text-white">
                A. Personal Identification & Profile Data:
              </strong>
              <p className="text-slate-400">
                Full name, email address, phone number, profile photo, and
                account credentials provided during registration as a client or
                beauty professional.
              </p>
            </div>
            <div>
              <strong className="text-white">
                B. Location & Geolocation Data:
              </strong>
              <p className="text-slate-400">
                Precise and approximate GPS location data to calculate distances
                between clients and grooming service providers, render map pins,
                and determine estimated arrival times.
              </p>
            </div>
            <div>
              <strong className="text-white">
                C. Audio & Microphone Data:
              </strong>
              <p className="text-slate-400">
                Voice recordings generated when users opt to record and transmit
                voice notes in the in-app chat to clarify hairstyle requirements
                or booking details.
              </p>
            </div>
            <div>
              <strong className="text-white">
                D. Camera & Photo Library Access:
              </strong>
              <p className="text-slate-400">
                Images uploaded for profile avatars, portfolio work showcases
                (for professionals), or style reference photos sent in
                client-stylist chats.
              </p>
            </div>
            <div>
              <strong className="text-white">
                E. Financial & Transaction Information:
              </strong>
              <p className="text-slate-400">
                Payment receipts, transaction timestamps, and payment statuses.
                All card data and bank transactions are processed directly by
                our PCI-DSS compliant partner <strong>Paystack</strong>. TressAt
                does not store full credit card numbers or CVVs.
              </p>
            </div>
            <div>
              <strong className="text-white">
                F. Device & Telemetry Data:
              </strong>
              <p className="text-slate-400">
                Device model, OS version, push notification tokens, IP address,
                and application crash diagnostics.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>
              Facilitate real-time appointment bookings between clients and
              independent service providers.
            </li>
            <li>
              Calculate accurate proximity and estimated travel distances on the
              map.
            </li>
            <li>
              Enable direct in-app messaging, photo sharing, and voice note
              communications.
            </li>
            <li>
              Process payments and manage automated service provider earnings
              payouts via Paystack.
            </li>
            <li>
              Send essential push notifications regarding booking confirmations,
              cancellations, and chat messages.
            </li>
            <li>
              Prevent fraud, enforce platform rules, and resolve disputes.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            4. Device Permissions Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white text-xs">
                  <th className="p-3 border-b border-white/10">Permission</th>
                  <th className="p-3 border-b border-white/10">Platform</th>
                  <th className="p-3 border-b border-white/10">
                    Why It Is Requested
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-white/5">
                <tr>
                  <td className="p-3 font-mono text-indigo-400">
                    Location (When in Use)
                  </td>
                  <td className="p-3">iOS & Android</td>
                  <td className="p-3">
                    To display nearby stylists and calculate accurate route
                    distances.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-indigo-400">
                    Microphone / Audio
                  </td>
                  <td className="p-3">iOS & Android</td>
                  <td className="p-3">
                    To record and send voice notes in appointment chats.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-indigo-400">Camera</td>
                  <td className="p-3">iOS & Android</td>
                  <td className="p-3">
                    To capture profile photos and send live hair/nail reference
                    pictures.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-indigo-400">
                    Photo Library
                  </td>
                  <td className="p-3">iOS & Android</td>
                  <td className="p-3">
                    To select existing photos for portfolio and chat uploads.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-indigo-400">
                    Push Notifications
                  </td>
                  <td className="p-3">iOS & Android</td>
                  <td className="p-3">
                    To alert you of booking status updates, reminders, and
                    incoming messages.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            5. Data Sharing & Third Parties
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. We share
            data only with verified sub-processors necessary to run the
            Platform:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>
              <strong>Paystack:</strong> Payment gateway handling card
              tokenization, charges, and payouts.
            </li>
            <li>
              <strong>Supabase:</strong> Scalable, encrypted database
              infrastructure and authentication provider.
            </li>
            <li>
              <strong>Expo / Apple / Google Cloud Messaging:</strong> Push
              notification delivery.
            </li>
            <li>
              <strong>Legal & Law Enforcement:</strong> Only when strictly
              required by enforceable subpoena or statutory law.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            6. Account & Data Deletion
          </h2>
          <p>
            You have the right to delete your account and all associated
            personal data at any time. You can trigger deletion directly within
            the mobile app under{" "}
            <strong>Settings &gt; Account &gt; Delete Account</strong> or
            through our public self-service deletion web portal:
          </p>
          <div className="pt-2">
            <Link
              href="/delete-account"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-semibold hover:bg-rose-500/20 transition-all text-xs"
            >
              <span>Visit Public Account Deletion Portal</span>
            </Link>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            7. Security & Retention
          </h2>
          <p>
            We enforce industry-standard TLS encryption in transit and AES-256
            encryption at rest. We retain your personal data only as long as
            necessary to fulfill booking services and statutory legal accounting
            requirements.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            8. Contact Us & Data Protection Officer
          </h2>
          <p>
            For questions or privacy inquiries, contact our Data Protection
            team:
          </p>
          <div className="p-4 rounded-xl glass-card space-y-2 text-xs">
            <div>
              <strong>Company:</strong> Vwindi Technologies (TressAt)
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@tressat.com"
                className="text-indigo-400 underline"
              >
                privacy@tressat.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:support@tressat.com"
                className="text-indigo-400 underline"
              >
                support@tressat.com
              </a>
            </div>
            <div>
              <strong>Address:</strong> Lagos, Nigeria
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
