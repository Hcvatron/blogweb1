import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPhone,
  faHeadset,
  faUser,
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useLocalContext } from "../../context/LocalContext";
import { useProduct } from "../../context/ProductContext";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isUserLoggedIn, setIsUserLoggedIn, userLogout } = useUserContext();
  const { cart } = useProduct();
  const { webinfo } = useLocalContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const isLoginPage = location.pathname.includes("/user/login");

  const categories = [
    { id: "02", name: "Antivirus", route: "/antivirus" },
    { id: "03", name: "Windows", route: "/windows" },
    { id: "04", name: "Printer", route: "/printer" },
    { id: "05", name: "Router", route: "/router" },
    { id: "06", name: "Digital", route: "/digital" },
    { id: "07", name: "Blogs", route: "/" },
    { id: "08", name: "shop", route: "/home" },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    userLogout();
    toast.success("Logged Out Successfully!");
    setIsMobileMenuOpen(false);
    navigate('/');
   
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 
  const handleNavigation = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolling ? "header-shadow" : ""}`}>
      {/* Top Section - Contact Info, Logo, and Actions */}
      <div className="header-top">
        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? "" : faBars} size="2x" />
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <span>
            <FontAwesomeIcon
              icon={faHeadset}
              style={{ marginRight: "5px", color: "var(--secondary-color)" }}
            />{" "}
            24/7 Support
          </span>
          <a href={`tel:${webinfo.phonecall}`} className="phone-number">
            {webinfo.phone}
          </a>
        </div>

        {/* Logo */}
        <div className="header-logo" onClick={() => navigate("/")}>
          <h1 className="logo-main">{webinfo.name}</h1>
          {/* <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1746119244/Najis_pfxwjp.png" alt="" /> */}
        </div>

        {/* Cart & Login */}
        <div className="header-actions">
          {isUserLoggedIn ? (
            <div
              className="user-dropdown dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="login-btn">
                <FontAwesomeIcon icon={faUser} />
                <span style={{ marginLeft: "5px" }}>
                  Welcome, {isUserLoggedIn.firstName}
                </span>
              </div>

            
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/user/account")}
                  >
                    Profile
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/user/orders")}
                  >
                    My Orders
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              className="user-dropdown dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="login-btn">
                <FontAwesomeIcon icon={faUser} />
                <span style={{ marginLeft: "5px" }}>Welcome, Guest</span>
              </div>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/user/login")}
                  >
                    Login / Signup
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleNavigation("/contact")}
                  >
                    Help
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section - Navigation */}
   {!isLoginPage &&  <div className="header-nav">
        <nav className="nav-links">
          {categories.map((category) => (
            <p
              key={category.id}
              className="nav-link"
              onClick={() => navigate(category.route)}
            >
              {category.name}
            </p>
          ))}
          <p className="nav-link" onClick={() => navigate("/top-rated")}>
            Top Rated
          </p>
          <p className="nav-link" onClick={() => navigate("/about")}>
            About {webinfo.name}
          </p>
          <p className="nav-link" onClick={() => navigate("/contact")}>
            Contact
          </p>
        </nav>
      </div>
}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-close" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            
            <div className="mobile-user-section">
              {isUserLoggedIn ? (
                <div className="mobile-user-info">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Welcome, {isUserLoggedIn.name}</span>
                </div>
              ) : (
                <div
                  className="mobile-login-btn"
                  onClick={() => handleNavigation("/user/login")}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>Login / Signup</span>
                </div>
              )}
            </div>

            <div className="mobile-nav-links">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="mobile-nav-link"
                  onClick={() => handleNavigation(category.route)}
                >
                  {category.name}
                </div>
              ))}
              <div
                className="mobile-nav-link"
                onClick={() => handleNavigation("/top-rated")}
              >
                Top Rated
              </div>
              <div
                className="mobile-nav-link"
                onClick={() => handleNavigation("/about")}
              >
                About {webinfo.name}
              </div>
              <div
                className="mobile-nav-link"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </div>
            </div>

            {isUserLoggedIn && (
              <div className="mobile-user-actions">
                <div
                  className="mobile-user-action"
                  onClick={() => handleNavigation("/user/account")}
                >
                  My Account
                </div>
                <div
                  className="mobile-user-action"
                  onClick={() => handleNavigation("/user/orders")}
                >
                  My Orders
                </div>
                <div className="mobile-user-action" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;