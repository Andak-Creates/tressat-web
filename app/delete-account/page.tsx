'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function DeleteAccountPage() {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    identifier: '',
    role: 'client',
    reason: 'no_longer_needed',
    confirmed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmed) return;
    const generatedTicket = 'DEL-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 px-6 sm:px-8 max-w-3xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Account Management</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Request Account Deletion</h1>
        <p className="text-sm text-neutral-300 leading-relaxed">
          In accordance with Apple App Store Guideline 5.1.1(v) and Google Play policies, you can submit a request to permanently delete your TressAt account and associated personal data directly from this web page.
        </p>
      </div>

      {/* Form Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 shadow-xl">
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto font-bold">
              <CheckCircle2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Request Submitted</h2>
            <div className="p-2.5 rounded-lg bg-black text-xs font-mono text-neutral-300 inline-block border border-white/10">
              Ticket ID: {ticketId}
            </div>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Your deletion request for <strong className="text-white">{formData.identifier}</strong> has been received. Our verification system will process your request, and your personal data will be completely erased within 30 days.
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">
                Registered Email Address or Phone Number
              </label>
              <input
                type="text"
                required
                placeholder="user@example.com or +234..."
                value={formData.identifier}
                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Account Type</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              >
                <option value="client">Client Account</option>
                <option value="artisan">Artisan Account</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Reason (Optional)</label>
              <select
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              >
                <option value="no_longer_needed">No longer using the service</option>
                <option value="privacy">Privacy preferences</option>
                <option value="other">Other reason</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.confirmed}
                  onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-neutral-700 bg-black text-white focus:ring-0"
                />
                <span className="text-xs text-neutral-400 leading-relaxed">
                  I understand that deleting my account is permanent and cannot be undone. Profile information, chat history, and ratings will be erased.
                </span>
              </label>
            </div>

            {/* Plain Solid Button */}
            <button
              type="submit"
              disabled={!formData.confirmed}
              className="w-full py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-bold tracking-tight transition-colors shadow-sm"
            >
              Submit Deletion Request
            </button>
          </form>
        )}
      </div>

      <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 text-xs text-neutral-400 space-y-2">
        <div className="font-bold text-white">In-App Deletion:</div>
        <p>You can also delete your account directly inside the TressAt mobile app under <strong>Settings &gt; Account Security &gt; Delete Account</strong>.</p>
      </div>
    </div>
  );
}
