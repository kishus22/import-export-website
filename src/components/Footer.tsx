import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const email = "daynit.enterprises@gmail.com";
  const phone = "918618117524";

  const waLink =
    "https://wa.me/918618117524?text=" +
    encodeURIComponent("Hello DAYNIT, I am interested in your export products");

  return (
    <footer className="bg-[#0F1113] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="text-3xl font-bold text-[#C8A55A]">DAYNIT</h3>
          <p className="text-gray-400 mt-3">
            Your trusted partner for premium exports from India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-bold text-[#C8A55A] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a className="text-gray-400 hover:text-[#C8A55A]" href="#">About Us</a></li>
            <li><a className="text-gray-400 hover:text-[#C8A55A]" href="#">Products</a></li>
            <li><a className="text-gray-400 hover:text-[#C8A55A]" href="#quote-form">Get Quote</a></li>
            <li><a className="text-gray-400 hover:text-[#C8A55A]" href="#">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xl font-bold text-[#C8A55A] mb-4">Contact Us</h4>
          <ul className="space-y-4">

            {/* PHONE */}
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-[#D97742]" />
              <a href="tel:+918618117524" className="text-gray-400 hover:text-[#C8A55A]">
                +91 {phone}
              </a>
            </li>

            {/* WHATSAPP */}
            <li className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="#D97742"
              >
                <path d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.88.96 5.547 2.573 7.693L4 29.333l5.813-1.2c2.147 1.12 4.587 1.733 7.187 1.733 7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667zm6.88 18.987c-.293.827-1.707 1.6-2.373 1.707-.64.107-1.453.16-4.853-1.6-4.093-2.027-6.72-6.013-6.92-6.293-.2-.28-1.64-2.187-1.64-4.173 0-1.987 1.027-2.96 1.387-3.373.36-.413.787-.52 1.053-.52h.747c.24 0 .56-.093.88.413.32.507 1.133 1.88 1.24 2.013.107.133.173.293.067.493-.093.2-.147.333-.28.52-.147.187-.307.413-.44.56-.147.173-.307.373-.133.707.173.333.813 1.333 1.773 2.16 1.2 1.027 2.213 1.36 2.547 1.507.333.147.533.12.747-.093.213-.213.88-.987 1.107-1.32.227-.333.467-.28.787-.173.32.107 2.027.987 2.373 1.173.347.187.587.28.68.427.093.147.093.827-.2 1.653z" />
              </svg>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C8A55A]"
              >
                WhatsApp Available
              </a>
            </li>

            {/* EMAIL */}
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-[#D97742]" />
              <a href={`mailto:${email}`} className="text-gray-400 hover:text-[#C8A55A]">
                {email}
              </a>
            </li>

            {/* LOCATION */}
            <li className="flex gap-3 items-center">
              <MapPin size={18} className="text-[#D97742]" />
              <a
                href="https://www.google.com/maps/place/Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C8A55A]"
              >
                Karnataka, India
              </a>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  );
}
