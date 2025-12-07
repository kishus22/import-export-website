import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const email = "daynit.enterprises@gmail.com";
  const callNumber = "8618117524";      // Call number
  const waNumber = "918884778585";      // 91 + 8884778585

  const waLink =
    "https://wa.me/" +
    waNumber +
    "?text=" +
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
              <a
                href={`tel:+91${callNumber}`}
                className="text-gray-400 hover:text-[#C8A55A]"
              >
                +91 {callNumber}
              </a>
            </li>

            {/* WHATSAPP – ORIGINAL ICON + LINK */}
            <li className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-[#D97742]"  
                >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
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
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-[#C8A55A]"
              >
                {email}
              </a>
            </li>

            {/* LOCATION */}
          <li className="flex gap-3 items-center">
          <MapPin size={18} className="text-[#D97742]" />
          <a
            href="https://www.google.com/maps/place/Karnataka,+India"
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
