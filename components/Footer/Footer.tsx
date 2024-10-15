import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <div>
            <a href="/privacy" className="mr-4 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm text-center">
          Contact us:{" "}
          <a href="mailto:support@yourcompany.com" className="hover:text-white">
            support@yourcompany.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
