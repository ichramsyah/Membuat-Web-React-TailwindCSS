import React from 'react';
import Card3D from '../components/Card3D';
import HeroImage from '../assets/hero.svg';
import AboutImage from '../assets/about.svg';
import Project1 from '../assets/proyek-1.webp';
import Project2 from '../assets/proyek-2.webp';
import Project3 from '../assets/proyek-3.webp';
import Project4 from '../assets/proyek-4.webp';
import Project5 from '../assets/proyek-5.webp';
import HeaderContent from './HeaderContent';
import ServicesBox from '../components/ServicesBox';

const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl/tight font-medium mb-7">
              Build Website With React and <span className="font-bold underline text-sky-400"> Tailwind</span> CSS
            </h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, esse numquam error animi ratione impedit ipsum rem rerum aliquam ullam!</p>
            <a href="#about" className="bg-sky-400 text-base hover:bg-sky-500 text-white px-6 py-3 rounded-full transition-all">
              Tentang Kami<i className="ri-user-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero" className="md:w-full w-[400px] mt-8  mx-auto md:m-0" />
          </div>
        </div>

        <div id="about" className="about grid md:grid-cols-2 grid-cols-1 md:mt-10 mt-20 items-center gap-10 md:gap-20 pt-26">
          <div className="box order-2 md:order-1 mx-auto md:m-0 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
            <img src={AboutImage} alt="" />
          </div>
          <div className="box order-1 md:order-2 text-center md:text-left">
            <h1 className="lg:text-5xl/tight text-3xl/tight font-medium mb-4">
              Tentang <span className="font-bold underline text-sky-400">Kami</span>
            </h1>
            <p className="text-base/loose  px-10 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non sit autem eaque ipsam facere rerum fugiat labore consequatur debitis maiores praesentium, dolor a, iste aut fuga officia dolore sapiente modi magni corporis
              optio! Velit beatae officiis dolores pariatur inventore.
            </p>
          </div>
        </div>

        <div className="services pt-20">
          <HeaderContent header="Layanan" paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <div className="service-box grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-10 sm:gap-5 gap-4 md:gap-7">
            <ServicesBox
              bgColor="bg-sky-400"
              i="ri-number-1"
              header="Web Developer"
              paragraf="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo quae commodi assumenda quas doloremque eveniet facilis architecto minima illum."
            />
            <ServicesBox
              bgColor="bg-sky-400"
              i="ri-number-2"
              header="UI/UX Design"
              paragraf="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo quae commodi assumenda quas doloremque eveniet facilis architecto minima illum."
            />
            <ServicesBox
              bgColor="bg-slate-800"
              i="ri-number-3"
              header="Graphic Designer"
              paragraf="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo quae commodi assumenda quas doloremque eveniet facilis architecto minima illum."
            />
          </div>
        </div>

        <div className="project pt-20">
          <HeaderContent header="Projects" paragraf="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <div className="project-box grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pt-8">
            <Card3D
              bgColor="bg-slate-800"
              img={Project1}
              name="Nama Proyek 1"
              paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur, molestias odit nesciunt eos explicabo facere! Et harum voluptates fuga!"
            />
            <Card3D bgColor="bg-sky-400" img={Project2} name="Nama Proyek 2" paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur, molestias odit nesciunt eos explicabo facere! Et harum voluptates fuga!" />
            <Card3D bgColor="bg-sky-400" img={Project3} name="Nama Proyek 3" paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur, molestias odit nesciunt eos explicabo facere! Et harum voluptates fuga!" />
            <Card3D bgColor="bg-sky-400" img={Project4} name="Nama Proyek 4" paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur, molestias odit nesciunt eos explicabo facere! Et harum voluptates fuga!" />
            <Card3D
              bgColor="bg-slate-800"
              img={Project5}
              name="Nama Proyek 5"
              paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur, molestias odit nesciunt eos explicabo facere! Et harum voluptates fuga!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
