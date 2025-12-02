import { Phone } from "lucide-react";

export default function FloatingButtons() {
  const waMessage = "Hello DAYNIT, I am interested in your export products";

  const waLink =
    "https://wa.me/918618117524?text=" + encodeURIComponent(waMessage);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999]">

      {/* CALL BUTTON */}
      <button
        onClick={() => (window.location.href = "tel:+918618117524")}
        className="flex items-center gap-2 bg-[#C8A55A] hover:bg-[#D97742] text-[#0F1113] px-5 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300 hover:scale-105"
      >
        <Phone size={22} />
        Call
      </button>

      {/* WHATSAPP BUTTON (MATCHES WEBSITE COLORS) */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 
                   bg-gradient-to-r from-[#C8A55A] to-[#D97742]
                   hover:from-[#D97742] hover:to-[#C8A55A]
                   text-white px-5 py-3 rounded-lg shadow-lg 
                   font-semibold transition-all duration-300 hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="#FFFFFF"
        >
          <path d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.873.96 5.533 2.573 7.68L4 29.333l5.813-1.2A13.29 13.29 0 0016 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667zm6.88 18.987c-.293.827-1.707 1.6-2.373 1.707-.64.107-1.453.16-4.853-1.6-4.093-2.027-6.72-6.013-6.92-6.293-.2-.28-1.64-2.187-1.64-4.173 0-1.987 1.027-2.96 1.387-3.373.36-.413.787-.52 1.053-.52h.747c.24 0 .56-.093.88.413.32.507 1.133 1.88 1.24 2.013.107.133.173.293.067.493-.093.2-.147.333-.28.52-.147.187-.307.413-.44.56-.147.173-.307.373-.133.707.173.333.813 1.333 1.773 2.16 1.2 1.027 2.213 1.36 2.547 1.507.333.147.533.12.747-.093.213-.213.88-.987 1.107-1.32.227-.333.467-.28.787-.173.32.107 2.027.987 2.373 1.173.347.187.587.28.68.427.093.147.093.827-.2 1.653z" />
        </svg>

        WhatsApp
      </a>
    </div>
  );
}
