import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>© {year} Ali Abyer</p>
    </div>
  );
}

export default Footer;