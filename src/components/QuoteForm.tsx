import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    product: '',
    quantity: '',
    packaging: '',
    containerType: '',
    destinationPort: '',
    whatsapp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if (product) {
      setFormData((prev) => ({ ...prev, product }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('quote_requests').insert([
        {
          name: formData.name,
          company: formData.company,
          product: formData.product,
          quantity: formData.quantity,
          packaging_type: formData.packaging,
          container_type: formData.containerType,
          destination_port: formData.destinationPort,
          whatsapp_contact: formData.whatsapp,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        product: '',
        quantity: '',
        packaging: '',
        containerType: '',
        destinationPort: '',
        whatsapp: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="quote-form" className="py-24 px-4 bg-[#F5EFE7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#0F1113] mb-4">Request a Quote</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C8A55A] to-[#D97742] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A2F24]">
            Get a customized quote for your export requirements
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
                placeholder="ABC Trading Co."
              />
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Product Required *</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
                placeholder="Black Pepper, Coffee, etc."
              />
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Required Quantity *</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
                placeholder="e.g., 5 tons, 1 container"
              />
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Packaging Type</label>
              <select
                name="packaging"
                value={formData.packaging}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
              >
                <option value="">Select packaging</option>
                <option value="Jute Bags">Jute Bags</option>
                <option value="PP Bags">PP Bags</option>
                <option value="Paper Bags">Paper Bags</option>
                <option value="Vacuum Sealed">Vacuum Sealed</option>
                <option value="Bulk">Bulk</option>
              </select>
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Container Type</label>
              <select
                name="containerType"
                value={formData.containerType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
              >
                <option value="">Select container</option>
                <option value="20ft">20ft Container</option>
                <option value="40ft">40ft Container</option>
                <option value="40ft HC">40ft HC Container</option>
              </select>
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">Destination Port *</label>
              <input
                type="text"
                name="destinationPort"
                value={formData.destinationPort}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
                placeholder="e.g., Dubai, Singapore"
              />
            </div>

            <div>
              <label className="block text-[#0F1113] font-semibold mb-2">WhatsApp Number *</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C8A55A] focus:outline-none transition-colors"
                placeholder="+1234567890"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#C8A55A] to-[#D97742] hover:from-[#D97742] hover:to-[#C8A55A] text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Quote Request
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Quote request submitted successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Failed to submit. Please try again or contact us directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
