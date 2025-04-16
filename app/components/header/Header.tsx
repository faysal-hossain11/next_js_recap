import React from "react";

const Header = () => {
  return (
    // <header className="flex justify-between items-center px-10 py-6 bg-white">
    //   <h1 className="text-2xl font-bold text-teal-600">Faysal.</h1>
    //   <nav className="space-x-6 text-sm font-semibold text-gray-800">
    //     <a href="#home" className="hover:text-teal-500">
    //       Home
    //     </a>
    //     <a href="#about" className="hover:text-teal-500">
    //       About
    //     </a>
    //     <a href="#services" className="hover:text-teal-500">
    //       Services
    //     </a>
    //     <a href="#portfolio" className="hover:text-teal-500">
    //       Portfolio
    //     </a>
    //     <a href="#contact" className="hover:text-teal-500">
    //       Contact
    //     </a>
    //   </nav>
    // </header>
    <header className="max-w-[1920px] mx-auto px-8 py-6 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-4xl font-bold text-gray-900"># Faysal</h1>
      <nav>
        <ul className="flex space-x-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className="text-lg relative pb-2 hover:text-gray-600 transition-colors
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 
                  hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
