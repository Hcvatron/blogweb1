import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { FaYoutube, FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";
import { useLocalContext } from "../../context/LocalContext";


const Footer = () => {


  const navigate = useNavigate();
  const {webinfo } = useLocalContext();

  const handleNavigation  = (route) =>{
     navigate(route);
  }



 
  return (
    <footer className="footer">
      {/* 🔹 Get Started Section */}
      <div className="footer-start">
        <h2>Secure Your Digital World</h2>
        <p>
          Protect your devices with premium security software, genuine Windows licenses, 
          and top-quality printers. Get started today with our reliable solutions for individuals and businesses.
        </p>
        <button className="btn-primary" onClick={() => navigate("/categories/antivirus")}>Shop Now</button>
      </div>

      {/* 🔹 Company Logos */}
      <div className="company-logos">
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1738937195/HP-Logo_jkkkni.png" alt="HP" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1738937079/Canon-Logo_ucilpk.png" alt="Canon" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1738937126/Epson-Logo_hjzall.png" alt="Epson" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1740500792/Netgear-Logo.wine_wiehvt.png" alt="Netgear" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1740500857/TP-Link-Logo.wine_fdplj8.png" alt="TP-Link" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1737531060/McAfee-Logo_ueh5ul.png" alt="McAfee" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1737837019/Norton_20360-Horizontal-Dark_zhxce8.png" alt="Norton" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1737748683/AVG_LOGO_White_RGB_gx1w6k.png" alt="AVG" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1737473730/images-removebg-preview_ah0jwg.png" alt="Bitdefender" />
        <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1738567995/Trend_Micro_Logo_2023_adnhlu.png" alt="Bullguard" />
      </div>

      {/* 🔹 Footer Links Section */}
      <div className="footer-container">
        {/* HCVATRON Section */}
        <div className="footer-section hcvatron">
          <h3>HCVATRON</h3>
          <p>
            Secure your digital life with HcVatron, providing trusted antivirus and cybersecurity solutions for individuals and businesses worldwide.
          </p>
          <p>Stay safe, stay protected.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href onClick={()=>handleNavigation("/categories/antivirus")}>Antivirus</a></li>
            <li><a href onClick={()=>handleNavigation("/categories/router")}>Router</a></li>
            <li><a href onClick={()=>handleNavigation("/categories/printer")}>Printer</a></li>
            <li><a href onClick={()=>handleNavigation("/categories/windows")}>Windows</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href onClick={()=>handleNavigation("/about")}>About</a></li>
            <li><a href onClick={()=>handleNavigation("/contact")}>Contact</a></li>
            <li><a href onClick={()=>handleNavigation("/about")}>Our Journey</a></li>
            <li><a href onClick={()=>handleNavigation("/about")}>Our Growth Chart</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href onClick={()=>handleNavigation("/termsandconditions")}>Terms & Conditions</a></li>
            <li><a href onClick={()=>handleNavigation("/privacypolicy")}>Privacy Policy</a></li>
            <li><a href onClick={()=>handleNavigation("/shipping-policy")}>Shipping Policy</a></li>
          </ul>
          </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><strong>Email:</strong> info@hcvatron.com</p>
          <p><strong>Phone:</strong> {webinfo.phone} </p>
          <p><strong>Address:</strong> 105 Jagriti Bhawan, near Adarsh Nagar, Bariatu, Ranchi - 834009 Jharkhand</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        {/* Left: Copyright */}
        <p className="footer-left">&copy; {new Date().getFullYear()} {webinfo.name}. All Rights Reserved.</p>
        
        {/* Center: Logo */}
        <div className="footer-logo">
          {/* <img src="/logo.png" alt="HCVATRON Logo" /> */}
          <h3>{webinfo.name}.com</h3>
        </div>
        
        {/* Right: Social Media Icons */}
        <div className="footer-social">
  <a href="https://www.youtube.com/@Hc_Vatron" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  <a href="https://x.com/Hc_Vatron" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
  <a href="https://www.facebook.com/hcvatron" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://www.linkedin.com/company/hcvatron" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
  <a href="https://www.instagram.com/hc_vatron/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
</div>
      </div>
    </footer>
  );
};

export default Footer;
