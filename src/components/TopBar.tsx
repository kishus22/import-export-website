import { Phone } from "lucide-react";

export default function TopBar() {
  const phone = "918618117524";

  const waLink =
    "https://wa.me/918618117524?text=" +
    encodeURIComponent("Hello DAYNIT, I am interested in your export products");

  const handleCall = () => {
    window.location.href = "tel:+918618117524";
  };

  return (
    <div className="bg-[#0F1113] text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8A55A" />
                <stop offset="50%" stopColor="#D97742" />
                <stop offset="100%" stopColor="#C8A55A" />
              </linearGradient>
            </defs>
            <path
              d="M60 20 L70 35 Q75 40 80 45 L85 55 Q85 60 80 65 L70 75 Q65 78 60 80 Q55 78 50 75 L40 65 Q35 60 35 55 L40 45 Q45 40 50 35 Z"
              fill="url(#logoGradient)"
            />
            <circle cx="60" cy="60" r="6" fill="#C8A55A" />
            <path d="M60 60 L75 50 L80 55 L70 65 Z" fill="#D97742" opacity="0.7" />
          </svg>

          <div>
            <h1 className="text-2xl font-bold tracking-wider text-[#C8A55A]">
              DAYNIT
            </h1>
            <p className="text-[10px] tracking-widest text-[#C8A55A] opacity-70">
              GLOBAL TRADE
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">

          {/* CALL BUTTON */}
          <button
            onClick={handleCall}
            className="flex items-center gap-2 bg-[#C8A55A] hover:bg-[#D97742] text-[#0F1113] px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </button>

          {/* WHATSAPP BUTTON */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#D97742] hover:bg-[#C8A55A] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {/* FIXED WhatsApp SVG ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.88.96 5.547 2.573 7.693L4 29.333l5.813-1.2c2.147 1.12 4.587 1.733 7.187 1.733 7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667zm6.88 18.987c-.293.827-1.707 1.6-2.373 1.707-.64.107-1.453.16-4.853-1.6-4.093-2.027-6.72-6.013-6.92-6.293-.2-.28-1.64-2.187-1.64-4.173 0-1.987 1.027-2.96 1.387-3.373.36-.413.787-.52 1.053-.52h.747c.24 0 .56-.093.88.413.32.507 1.133 1.88 1.24 2.013.107 .133.173 .293.067 .493-.093 .2-.147 .333-.28 .52-.147 .187-.307 .413-.44 .56-.147 .173-.307 .373-.133 .707.173 .333.813 1.333 1.773 2.16 1.2 1.027 2.213 1.36 2.547 1.507.333 .147.533 .12.747-.093.213-.213.88-.987 1.107-1.32.227-.333.467-.28.787-.173.32 .107 2.027 .987 2.373 1.173.347 .187.587 .28.68 .427.093 .147.093 .827-.2 1.653z" />
            </svg>

            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
