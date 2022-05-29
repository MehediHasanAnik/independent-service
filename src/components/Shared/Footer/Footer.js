import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  const data = new Date();
  let year = data.getFullYear();
  return (
    <div className="main-footer">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <p className="text-center text-white py-4">
              Copyright © {year} Master Life Coach. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
