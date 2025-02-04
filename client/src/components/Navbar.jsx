import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-2 shadow-md fixed top-0  w-full z-50">
      <div className="container md:px-8 mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-700">
          MyBrand
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-700 font-medium">
          <li>
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
             All Products
            </a>
          </li>
         
         
        </ul>

        {/* Cart & Sign In Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="relative">
            <ShoppingCart size={24} className="text-blue-700" />
           
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100 transition-all ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-blue-700">
          <li>
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Products
            </a>
          </li>
         
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full text-center">
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
