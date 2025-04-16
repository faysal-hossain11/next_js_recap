import Image from 'next/image';
import React from 'react';
import Portfolio from "@/app/assets/images/banner.s.png";

const Banner = () => {
    return (
        <section className="max-w-[1920px] mx-auto px-8 py-16 relative min-h-[600px]">
      {/* Background color shape - blue gradient */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-blue-100 to-blue-50 -z-10 skew-x-[-15deg] origin-top-right rounded-l-[40px] overflow-hidden">
        {/* Man image positioned over the background */}
        <div className="absolute right-0 bottom-0 w-full h-full">
          <Image
            src={Portfolio} // Replace with your actual image path
            alt="Faysal Hossain"
            layout="fill"
            objectFit="contain"
            objectPosition="right bottom"
            className="z-10"
          />
        </div>
      </div>
      
      <div className="max-w-3xl relative z-20">
        <p className="text-xl mb-2">Hello I'm</p>
        <h2 className="text-5xl font-bold mb-4">Faysal Hossain</h2>
        <h3 className="text-2xl text-gray-600 mb-6">Professional Front-end Developer</h3>
        
        <p className="text-lg leading-relaxed mb-12 max-w-[80%]">
          I am Faysal Hossain, a front-end developer. I enjoy creating beautifully designed, 
          intuitive, and functional websites.
        </p>
        
        <div className="border-t border-gray-300 pt-12 max-w-[80%]">
          <h4 className="text-2xl font-semibold mb-8">Contact Me</h4>
          <div className="flex flex-wrap gap-6 text-lg">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-gray-600 transition-colors relative
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 
                  hover:after:w-full after:transition-all after:duration-300 pb-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;