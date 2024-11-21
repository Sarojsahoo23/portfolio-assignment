import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-6 ">
     
        <h1 className="font-bold text-2xl tracking-wide ml-24 font-serif ">Persist Venture</h1>
        <nav>
          <ul className="flex space-x-16 text-base uppercase font-medium  mx-36 ">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About us </li>
            <li className="hover:underline">Blog</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
