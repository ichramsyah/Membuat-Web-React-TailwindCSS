import React from 'react';
import { useRef, useEffect } from 'react';

function Card3D({ name, paragraf, img, bgColor }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = card;

      const relativeX = clientX - offsetLeft;
      const relativeY = clientY - offsetTop;

      const centerX = offsetWidth / 2;
      const centerY = offsetHeight / 2;

      let translateX = 0;
      let translateY = 0;
      let translateZ = 0;
      let rotateX = 0;
      let rotateY = 0;
      let shadow = '0 8px 16px rgba(0, 0, 0, 0)';

      if (relativeX < centerX && relativeY < centerY) {
        translateX = -5;
        translateY = -5;
        translateZ = 20;
        rotateX = -3;
        rotateY = -3;
        shadow = '0 12px 24px rgba(0, 0, 0, 0)';
      } else if (relativeX >= centerX && relativeY < centerY) {
        translateX = 5;
        translateY = -5;
        translateZ = 20;
        rotateX = -3;
        rotateY = 3;
        shadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
      } else if (relativeX < centerX && relativeY >= centerY) {
        translateX = -10;
        translateY = 10;
        translateZ = 30;
        rotateX = 6;
        rotateY = -6;
        shadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
      } else {
        translateX = 10;
        translateY = 10;
        translateZ = 30;
        rotateX = 6;
        rotateY = 6;
        shadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
      }

      card.style.transform = `perspective(800px) translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow = shadow;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(800px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)`;
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative rounded-xl z-10 shadow-md transition-transform duration-300 ease-out">
      <div className={`box rounded-xl ${bgColor} p-6`}>
        <img src={img} alt="" className="aspect-3/2 object-cover w-full h-[220px] rounded-xl" />
        <h1 className="text-white text-xl font-bold pt-5">{name}</h1>
        <p className="text-white mb-6 pt-4">{paragraf}</p>
        <a className="transition-all font-medium text-slate-800 bg-white px-6 py-2 rounded-r-full hover:bg-gray-200" href="#">
          See Project
        </a>
      </div>
    </div>
  );
}

export default Card3D;
