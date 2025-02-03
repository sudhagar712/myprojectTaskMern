import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo or Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">MyBrand</h3>
            <p className="text-gray-400">
              © 2025 MyBrand. All rights reserved.
            </p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-6 md:space-y-0 text-gray-300">
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
            <a href="#" className="hover:text-blue-400">
              Services
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={24}
                className="text-gray-300 hover:text-gray-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="text-gray-300 hover:text-gray-500"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={24}
                className="text-gray-300 hover:text-gray-500"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
