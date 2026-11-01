import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';

interface BookingFormProps {
  selectedServiceId?: string;
  onServiceChange?: (serviceId: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedServiceId,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedServiceId || SITE_CONFIG.services[0].id,
    vehicleInfo: '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected service if changed from outside (e.g. user clicked Enquire on service card)
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.vehicleInfo.trim()) {
      errs.vehicleInfo = 'Please enter your vehicle make, model and year.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceId: SITE_CONFIG.services[0].id,
      vehicleInfo: '',
      preferredDate: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    const chosenService = SITE_CONFIG.services.find((s) => s.id === formData.serviceId);

    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0C1426] border border-[#1E90FF]/50 text-center animate-in fade-in zoom-in-95 duration-300 shadow-[0_15px_40px_rgba(30,144,255,0.2)]">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#1E90FF]/20 border border-[#36D6FF] flex items-center justify-center text-[#36D6FF] shadow-[0_0_20px_rgba(54,214,255,0.4)]">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-currentColor stroke-width-2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#36D6FF]">
          Enquiry Received
        </span>
        <h3 className="text-2xl font-heading font-bold text-white mt-1 mb-3">
          Thank You, {formData.name}!
        </h3>

        <p className="text-sm text-[#A9B7CC] max-w-md mx-auto leading-relaxed mb-6">
          We have received your detailing request for your{' '}
          <strong className="text-white">{formData.vehicleInfo}</strong> (
          <span className="text-[#36D6FF]">{chosenService?.title}</span>). We will contact you at{' '}
          <strong className="text-white">{formData.phone}</strong> promptly to confirm your booking and quote.
        </p>

        <div className="p-4 rounded-xl bg-[#060B16] border border-[#1B2A4A] max-w-sm mx-auto text-left text-xs text-[#A9B7CC] space-y-1.5 mb-6">
          <div className="flex justify-between">
            <span>Service:</span>
            <span className="text-white font-medium">{chosenService?.title}</span>
          </div>
          <div className="flex justify-between">
            <span>Preferred Date:</span>
            <span className="text-white font-medium">{formData.preferredDate || 'Flexible'}</span>
          </div>
          <div className="flex justify-between">
            <span>Location:</span>
            <span className="text-[#36D6FF] font-medium">Dunedin, NZ</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(30,144,255,0.4)] transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-width-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call 028 460 3128 Directly
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#060B16] hover:bg-[#121C34] text-[#A9B7CC] hover:text-white border border-[#1B2A4A] text-xs font-semibold transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1426] border border-[#1B2A4A] shadow-xl">
      <div className="mb-6">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#36D6FF]">
          Fast Online Booking
        </span>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
          Request a Free Quote
        </h3>
        <p className="text-xs sm:text-sm text-[#A9B7CC] mt-1.5 leading-relaxed">
          Tell us about your vehicle and preferred service. We will review your details and get back to you with a clear, upfront quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
              Full Name <span className="text-[#E5262B]">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="e.g. John Smith"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors ${
                errors.name ? 'border-[#E5262B]' : 'border-[#1B2A4A]'
              }`}
            />
            {errors.name && <p className="text-[11px] text-[#E5262B] mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
              Phone Number <span className="text-[#E5262B]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              placeholder="e.g. 021 123 4567"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors ${
                errors.phone ? 'border-[#E5262B]' : 'border-[#1B2A4A]'
              }`}
            />
            {errors.phone && <p className="text-[11px] text-[#E5262B] mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Email & Vehicle Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="e.g. john@example.co.nz"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors ${
                errors.email ? 'border-[#E5262B]' : 'border-[#1B2A4A]'
              }`}
            />
            {errors.email && <p className="text-[11px] text-[#E5262B] mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="vehicleInfo" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
              Vehicle Make, Model & Year <span className="text-[#E5262B]">*</span>
            </label>
            <input
              type="text"
              id="vehicleInfo"
              value={formData.vehicleInfo}
              onChange={(e) => {
                setFormData({ ...formData, vehicleInfo: e.target.value });
                if (errors.vehicleInfo) setErrors({ ...errors, vehicleInfo: '' });
              }}
              placeholder="e.g. 2021 Toyota RAV4 (Black)"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors ${
                errors.vehicleInfo ? 'border-[#E5262B]' : 'border-[#1B2A4A]'
              }`}
            />
            {errors.vehicleInfo && (
              <p className="text-[11px] text-[#E5262B] mt-1">{errors.vehicleInfo}</p>
            )}
          </div>
        </div>

        {/* Service Type Dropdown & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceId" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
              Detailing Service Needed
            </label>
            <select
              id="serviceId"
              value={formData.serviceId}
              onChange={(e) => {
                setFormData({ ...formData, serviceId: e.target.value });
                if (onServiceChange) onServiceChange(e.target.value);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border border-[#1B2A4A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors"
            >
              {SITE_CONFIG.services.map((svc) => (
                <option key={svc.id} value={svc.id} className="bg-[#0C1426] text-white">
                  {svc.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
              Preferred Date (Optional)
            </label>
            <input
              type="date"
              id="preferredDate"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border border-[#1B2A4A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Additional Message / Special Requests */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#A9B7CC] mb-1.5">
            Specific Requests or Questions (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Dog hair in boot, milk spill on passenger seat, heavy swirl marks on hood..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B16] border border-[#1B2A4A] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-heading font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(30,144,255,0.4)] hover:shadow-[0_0_35px_rgba(30,144,255,0.6)] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>Get a Free Quote</span>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-[#A9B7CC] mt-2">
          No payment required upfront · We provide clear quotes before any work begins
        </p>
      </form>
    </div>
  );
};
