import { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? 'bg-white py-6 shadow' : 'py-4';

  let menuActive = show ? 'left-0' : '-left-full';

  return (
    <div className={`navbar z-50 w-full fixed ${scrollActive} transition-all`}>
      <div className="container mx-auto px-4 ">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl font-bold">
              <a href="#">Necopedia</a>
            </h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:bg-transparent md:shadow-none md:text-black md:p-0 md:-py-0 gap-8 md:transition-none ${menuActive} fixed top-1/2 -translate-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex gap-2 items-center">
              <i className="ri-home-2-line md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-information-line md:hidden block"></i>
              <a href="#about" className="font-medium opacity-75">
                About
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-customer-service-line md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Services
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-article-line md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Project
              </a>
            </li>
          </ul>
          <div className="social flex item-center gap-2">
            <a href="#" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-600 transition-all">
              Social Media
            </a>
            <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
