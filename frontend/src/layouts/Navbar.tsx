import React, { FC } from "react";
import { Link } from "react-router-dom";
import LinkName from "../routers/LinkName";
import links from "../routers/links";
import navLinks from "./utils/navLinks";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Logo</span>
              <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
            </a>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            {navLinks.map((link) => (
              <Link
                className="text-gray-500 hover:text-gray-900"
                to={link.path}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <Link
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
              to={links[LinkName.Login].path}
            >
              {links[LinkName.Login].name}
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
