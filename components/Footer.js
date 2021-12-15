import React from "react";

export default function Footer() {
  return (
    <nav id="footer" className="bg-gray-800">



      <div
        className="pt-4 md:flex md:items-center md:justify-center border-t-2 border-blue-300  outline-none focus:bg-gray-300"
      >
        <ul className="">
          <li
            className="text-sm leading-7 md:mx-2 md:inline"
            id="footer-navi-2"
          >
            <a className="text-white underline text-small" href="/disclaimer">
              Disclaimer
            </a>
          </li>
          <li
            className="text-sm leading-7 md:mx-2 md:inline"
            id="footer-navi-2"
          >
            <a className="text-white underline text-small" href="/cookie">
              Cookie policy
            </a>
          </li>
          <li
            className="text-sm leading-7 md:mx-2 md:inline"
            id="footer-navi-2"
          >
            <a className="text-white underline text-small" href="/privacy">
              Privacy
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
}
