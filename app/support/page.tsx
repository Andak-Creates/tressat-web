'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Mail,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'client',
    category: 'booking',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Support</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Help & Support</h1>
        <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">
          Need help with an appointment, payment receipt, or artisan onboarding? Submit a ticket below or email us directly at <a href="mailto:support@tressat.com" className="text-white underline font-medium">support@tressat.com</a>.
        </p>
      </div>

      {/* Contact Form */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 shadow-xl">
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto font-bold">
              <CheckCircle2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Ticket Received</h2>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you for contacting TressAt Support. We have logged your request and our support team will reply to <strong className="text-white">{formData.email}</strong> within 2 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', role: 'client', category: 'booking', subject: '', message: '' });
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300">I am a</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                >
                  <option value="client">Client / Customer</option>
                  <option value="artisan">Artisan / Stylist / Barber</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300">Topic Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                >
                  <option value="booking">Appointment / Booking Issue</option>
                  <option value="payment">Payment & Paystack Refund</option>
                  <option value="account">Account & Login</option>
                  <option value="verification">Artisan Verification</option>
                  <option value="general">General Question</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Subject</label>
              <input
                type="text"
                required
                placeholder="Brief summary of your inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Detailed Message</label>
              <textarea
                required
                rows={4}
                placeholder="Describe your question or issue..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Plain Solid Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-sm font-bold tracking-tight transition-colors shadow-sm"
            >
              Submit Ticket
            </button>
          </form>
        )}
      </div>

      <div className="text-center text-xs text-neutral-400">
        Direct Email: <a href="mailto:support@tressat.com" className="text-white hover:underline">support@tressat.com</a>
      </div>
    </div>
  );
}
