import React from "react";
import {
  FaAmazon,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              Configuration
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <FaAmazon />
          </a>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <form
            className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
            onSubmit={(e: any) => e.preventDefault()}
          >
            <input
              type="text"
              id='"form-subscribe-Subscribe'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Email"
            />
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          All CopyRight Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
