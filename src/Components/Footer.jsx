import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-300">
              <li>
                <Link to="/" className="hover:text-gray-100 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-100 transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-100 transition duration-300">Get in Touch</Link>
              </li>
              <li>
                <Link to="/RefundPolicy" className="hover:text-gray-100 transition duration-300">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Customer Trust and Growth Highlights */}
          <div>
            <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
            <p className="text-gray-300">
              With over 10,000 satisfied clients, our commitment is reflected in more than 500 daily orders. Enjoy our consistent 100% satisfaction rate, dedicated to exceptional service and long-lasting relationships.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-4">Reach Out</h4>
            <p className="text-gray-300">Company: OttMartIndia</p>
            <p className="text-gray-300">Location: Pratapnagar, Jaipur, Rajasthan</p>
            <p className="text-gray-300 cursor-pointer hover:text-gray-100 transition duration-300">Phone: +91 8875867661</p>
            <p className="text-gray-300 cursor-pointer hover:text-gray-100 transition duration-300">Email: ottmartindia@gmail.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8">
          <a 
            href="https://wa.me/8875867661?text=Hello, I’m interested in your services. Could you provide me with more information?" 
            className="mr-4 text-gray-300 hover:text-gray-100 transition duration-300"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          
          <a 
            href="https://www.instagram.com/ottmart_india/" 
            className="mr-4 text-gray-300 hover:text-gray-100 transition duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        © 2024 by OttMartIndia . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
