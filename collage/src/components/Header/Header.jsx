import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-gray-900">
      <nav className="border-gray-700 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              MockMaster
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center lg:order-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 ml-1 text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:order-1 lg:w-auto">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                className="block p-2 pl-10 w-64 text-sm text-white bg-gray-800 rounded-lg border border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                placeholder="Search..."
              />
            </div>

            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`
                  }
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/practice"
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`
                  }
                >
                  Practice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/interviewers"
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`
                  }
                >
                  Interviewers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`
                  }
                >
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex lg:items-center lg:order-3 space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 shadow-md"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:hidden lg:order-1`}
          id="mobile-menu"
        >
          <div className="relative mt-3 mb-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block p-2 pl-10 w-full text-sm text-white bg-gray-800 rounded-lg border border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
              placeholder="Search..."
            />
          </div>

          <ul className="flex flex-col mt-4 font-medium border-t border-gray-800">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg ${
                    isActive
                      ? 'bg-gray-800 text-indigo-400'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/practice"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg ${
                    isActive
                      ? 'bg-gray-800 text-indigo-400'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                Practice
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/interviewers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg ${
                    isActive
                      ? 'bg-gray-800 text-indigo-400'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                Interviewers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg ${
                    isActive
                      ? 'bg-gray-800 text-indigo-400'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                Resources
              </NavLink>
            </li>
          </ul>

          <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-800">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-center font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-center font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 shadow-md"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}