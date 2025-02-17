import React,{useContext} from 'react';

import logo from "../assets/logo.png";
import img1 from "../assets/nielit.jpg";
import img2 from "../assets/apll.jpg";
import img3 from "../assets/pmkvy.jpg";
import img4 from "../assets/esdm.jpg";
import img5 from "../assets/facebook_logo.png";
import img6 from "../assets/twetter_logo.png";

const Header = () => {
 
  return (
    <div className="w-full bg-blue-600 px-[5%] overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between items-center py-2">
        <img src={logo} className="w-[120px] sm:w-[250px] max-w-full" alt="Logo" />

        <div className="flex gap-4 flex-wrap">
          {/* Certificate Logos */}
          <div className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <img src={img1} className="w-[40px] sm:w-[60px]" alt="Certification 1" />
              <img src={img2} className="w-[40px] sm:w-[60px]" alt="Certification 2" />
            </div>
            <div className="flex gap-2">
              <img src={img3} className="w-[40px] sm:w-[60px]" alt="Certification 3" />
              <img src={img4} className="w-[40px] sm:w-[60px]" alt="Certification 4" />
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="social-links flex items-center flex-col">
            <div className="flex justify-center gap-2 mb-2">
              <img src={img5} className="w-[25px] sm:w-[40px]" alt="Facebook" />
              <img src={img6} className="w-[25px] sm:w-[40px]" alt="Twitter" />
            </div>
            <div className="text-center">
              <p className="text-white sm:text-[12px] text-[9px]">
                +91-7607872680 <br />
                +91-7754939906
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
