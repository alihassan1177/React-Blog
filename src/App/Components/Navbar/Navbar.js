import React, { PureComponent } from "react";
import { links } from "./data";
import { NavLink } from "react-router-dom";

export default class NavbarComponent extends PureComponent {
  render() {
    return (
      <header className="px-4 bg-orange-400">
        <nav className="flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">React Fetch App</h2>
          <ul className="flex items-center">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink className="nav-link" to={link.path}>
                    {link.link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
