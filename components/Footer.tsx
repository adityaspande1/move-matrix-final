import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="heading text-white text-6xl font-bold mb-16">
          Ready to <span className="text-purple">Dive</span> in? Start building<br/> today!
        </h1>
        
        <div className="mt-8">
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Get Started"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white/70">
          Copyright © 2025 MoveMatrix
        </p>

        {/* <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
