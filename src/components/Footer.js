import React from "react";

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-28 h-auto w-full flex items-center justify-center flex-col">
      <div className="flex w-1/2 items-center justify-center gap-x-6 mb-4">
        
      </div>
      <div className="flex w-1/2 my-6 text-textMain font-bold text-base items-center justify-around mb-4">
      <div className="footer">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Blog</p>
      </div></div>
    
        <p className="text-textMinor"> © {currentYear} <span>dnd Gallery App</span> by <span>PatoWhizzy</span> </p>

    </footer>
  );
}

export default Footer;
