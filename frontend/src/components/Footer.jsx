// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#222] text-white max-padd-container py-12 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* logo and description */}
        <div className="flex flex-col items-center md:items-start">
          <Link to={"/"} className="bold-24 mb-4">
            <h3>
              Food<span className="text-secondary">Stall</span>
            </h3>
          </Link>
          <p className="text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos quidem qui ad modi nostrum ab, officiis delectus alias
            dicta facilis veritatis.
          </p>
        </div>
        {/* Quick links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-2- mb-4">Quick Links</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Menu
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Foods
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Ecommerce links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-2- mb-4">Ecommerce Links</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-secondary">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-2- mb-4">Contact Us</h4>
          <p>
            Email:
            <a
              href="malito:support@foodstall.com"
              className="hover:text-secondary"
            >
              support@foodstall.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+94234567890" className="hover:text-secondary">
              +94234567890
            </a>
          </p>
          <p>Address: 432 Amaar Street, Colombo 08, Sri Lanka</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} FoodStall | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
