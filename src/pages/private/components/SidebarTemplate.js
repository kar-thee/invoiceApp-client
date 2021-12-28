import React from "react";
import { NavLink } from "react-router-dom";

import useStatesFunc from "../../../hooks/useStatesFunc";

const SidebarTemplate = ({ navArray }) => {
  const [{ sidebar }] = useStatesFunc();

  return (
    <>
      <div
        className={sidebar ? "col-4 col-md-3 col-lg-2 border fixed" : "d-none"}
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <nav className="overflow-hidden">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-4">
              {navArray &&
                navArray.map((navElement) => (
                  <li
                    className="nav-item py-2 sidebar-links"
                    key={navElement.href}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active text-success" : "nav-link"
                      }
                      to={navElement.href}
                      key={navElement.id}
                    >
                      {navElement.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarTemplate;
