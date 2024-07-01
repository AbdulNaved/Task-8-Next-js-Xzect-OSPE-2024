import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-200">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <img
              src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/logo.png"
              alt="Logo"
              className="w-24 md:w-32 lg:w-40"
            />
          </a>
        </Link>
        <div className="md:hidden">
          <button id="mobile-menu-button" className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div>
        <ul
          id="mobile-menu"
          className="hidden md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4  "
        >
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-black hover:text-gray-300">HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/pages" legacyBehavior>
              <a className="text-black hover:text-gray-300">Pages</a>
            </Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior>
              <a className="text-black hover:text-gray-300">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/project" legacyBehavior>
              <a className="text-black hover:text-gray-300">Project</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              <a className="text-black hover:text-gray-300">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:text-gray-300">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="#" legacyBehavior>
          <a className="text-white hover:text-gray-300">
            <i className="fas fa-search"></i>
          </a>
        </Link>
        <Link href="#" legacyBehavior>
          <a className="text-white hover:text-gray-300">
            <i className="fas fa-user"></i>
          </a>
        </Link>
      </div>
      <Link href="/get-a-quote" legacyBehavior>
        <a className="py-2 px-4 bg-green-900 text-white rounded-xl hover:bg-green-700 text-center">
          GET A QUOTE
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
