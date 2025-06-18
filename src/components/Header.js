// import { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Header = () => {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);

//   const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

//   const navItems = ["Home", "About", "Services", "Gallery", "Team", "Contact"];

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white shadow-md">
//       <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-2">
//           <img
//             src="/assets/logo/Fortune-Advisorz-logo-web (1).png"
//             alt="Fortune Advisorz Logo"
//             width={80}
//             height={80}
//             className="rounded-md"
//           />
//         </a>

//         {/* Hamburger Menu Button */}
//         <button
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           onClick={toggleMobileNav}
//         >
//           <span className="sr-only">Open main menu</span>
//           {mobileNavOpen ? (
//             <AiOutlineClose className="w-6 h-6" />
//           ) : (
//             <AiOutlineMenu className="w-6 h-6" />
//           )}
//         </button>

//         {/* Desktop Navigation Menu */}
//         <nav className="hidden md:flex md:space-x-6 md:items-center">
//           <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-center">
//             {navItems.map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="block px-4 py-2 text-[#444444] hover:text-white hover:bg-blue-600 transition duration-300 md:rounded-md font-roboto"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`md:hidden ${mobileNavOpen ? "block" : "hidden"} bg-white shadow-lg`}
//       >
//         <ul className="flex flex-col items-center py-4 space-y-4">
//           {navItems.map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="block px-4 py-2 text-[#444444] hover:text-white hover:bg-blue-600 transition duration-300 font-roboto"
//                 onClick={() => setMobileNavOpen(false)} // Close on click
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const navItems = ["Home", "About", "Services", "Gallery", "Team", "Contact"];

  return (
    // <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md dark:text-white">
    <header className="fixed top-[40px] w-full z-40 bg-white dark:bg-gray-900 shadow-md dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            // Light theme logo
            src="/assets/logo/Fortune-Advisorz-logo_TM.webp"
            alt="Fortune Advisorz Logo"
            width={80}
            height={80}
            className="rounded-md dark:hidden" // Hide in dark mode
          />
          <img
            // Dark theme logo
            src="/assets/logo/Fortune-Advisorz-logo.png"
            alt="Fortune Advisorz Logo"
            width={80}
            height={80}
            className="rounded-md hidden dark:block" // Show only in dark mode
          />
        </a>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMobileNav}
        >
          <span className="sr-only">Open main menu</span>
          {mobileNavOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex md:space-x-6 md:items-center">
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-[#444444] hover:text-white hover:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-600 transition duration-300 md:rounded-md font-roboto"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${mobileNavOpen ? "block" : "hidden"} bg-white shadow-lg dark:bg-gray-800`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                className="block px-4 py-2 text-[#444444] hover:text-white hover:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-600 transition duration-300 font-roboto"
                onClick={() => setMobileNavOpen(false)} // Close on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </header>
  );
};

export default Header;
