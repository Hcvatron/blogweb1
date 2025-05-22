import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faImage,
  faReorder,
  faPeopleGroup,
  faPhotoFilm,
  faSort,
  faCar,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: faHome },
    { name: "Blogs", path: "/admin/blog", icon: faFileAlt },
    { name: "Users", path: "/admin/manage-users", icon: faPeopleGroup },
     { name: "Messages", path: "/admin/manage-contacts", icon: faContactBook },
    // { name: "SEO", path: "/admin/seo", icon: faSort },
    // { name: "Media", path: "/admin/media", icon: faImage },
    // { name: "Orders", path: "/admin/orders", icon: faReorder },
    // { name: "Banner", path: "/admin/manage-banner", icon: faPhotoFilm },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>Admin</h2>
      </div>
      <ul className="admin-nav-list">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`admin-nav-item ${location.pathname === item.path ? "active" : ""}`}
          >
            <button onClick={() => navigate(item.path)} className="admin-nav-link">
              <FontAwesomeIcon icon={item.icon} className="admin-nav-icon" />
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Nav;
