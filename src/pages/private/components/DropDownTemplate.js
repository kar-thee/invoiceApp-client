import React from "react";
import { Link } from "react-router-dom";

const DropDownTemplate = ({ menuName, menuList }) => {
  return (
    <>
      <li className="nav-item dropdown">
        <button
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {menuName}
        </button>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {menuList.map((menuItem) => (
            <li key={menuItem.name}>
              <Link className="dropdown-item" to={menuItem.to}>
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default DropDownTemplate;
