import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="footer bg-white">
        <div className="container mx-auto px-8 py-4">
          <div className="footer-box flex items-center justify-between">
            <p className="">
              &copy; Copyright by <span className="font-bold">Necopedia</span>
            </p>
            <div className="social-media flex items-center gap-2 sm:gap-6">
              <i className="ri-linkedin-box-fill text-2xl transition-all hover:text-slate-600"></i>
              <i className="ri-youtube-fill text-2xl transition-all hover:text-slate-600"></i>
              <i className="ri-facebook-box-fill text-2xl transition-all hover:text-slate-600"></i>
              <i className="ri-instagram-fill text-2xl transition-all hover:text-slate-600"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
