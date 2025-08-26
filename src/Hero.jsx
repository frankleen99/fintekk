import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import googlePlayIcon from "./assets/Icons/googlePlayIcon.png";
import heroImage from "./assets/Images/heroImage.png";
import nbcImage from "./assets/Icons/nbcLogo.png";
import forbesImage from "./assets/Icons/ForbesLogo.png";
import stripeImage from "./assets/Icons/stripeLogo.png";
import quartzImage from "./assets/Icons/QuartzLogo.png";
import bloombergImage from "./assets/Icons/bloombergLogo.png";

const Hero = () => {
  const logos = [
    { src: bloombergImage, alt: "Bloomberg", className: "h-6" },
    { src: nbcImage, alt: "NBC", className: "h-5" },
    { src: forbesImage, alt: "Forbes", className: "h-8" },
    { src: stripeImage, alt: "Stripe", className: "h-8" },
    { src: quartzImage, alt: "Quartz", className: "h-4" },
  ];

  const [counts, setCounts] = useState({
    activeUsers: 0,
  });

  const targetValues = {
    activeUsers: 10000,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // Number of animation steps
    const stepDuration = duration / steps;

    const intervals = [];

    // Animate each counter
    Object.keys(targetValues).forEach((key) => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(Math.ceil(increment * step), target);

        setCounts((prev) => ({
          ...prev,
          [key]: current,
        }));

        if (current >= target) {
          clearInterval(interval);
        }
      }, stepDuration);

      intervals.push(interval);
    });

    // Cleanup intervals on component unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="bg-white product-sans font-light">
      {/* Load Product Sans font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@300;400;500;600;700&display=swap');
        .product-sans { font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; }
      `}</style>

      <div className="container mx-auto mt-15 px-6 lg:px-10 py-1">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Content */}
          {/* Left Content */}
          <div className="space-y-5 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl xl:text-6xl font-medium text-blue-900 leading-snug">
              Pay, Invest, Save
              <br />
              your Cash with a<br />
              single bank
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] lg:text-xl text-[#777] tracking-wider georama-custom">
              {/* Mobile version - single line */}
              <span className="block lg:hidden">
                Fintekk is the bank that does it all. Manage everything directly
                and easy with fintekk.
              </span>

              {/* Desktop version - two lines */}
              <span className="hidden lg:block">
                Fintekk is the bank that does it all. Manage <br />
                everything directly and easy with fintekk.
              </span>
            </p>

            {/* CTA Button */}
            <div className="pt-1 flex justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-normal text-md hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200">
                Sign Up for Free
              </button>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-normal xl:justify-normal 2xl:justify-normal">
              {/* Google Play Button */}
              <button
                className="flex items-center justify-center sm:justify-start space-x-2 bg-white border border-[#3A3A3A80] 
    w-[170px] ml-23 sm:ml-0 lg:ml-0  sm:w-[150px] px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200"
              >
                <img
                  src={googlePlayIcon}
                  alt="Get it on Google Play"
                  className="h-4"
                />
                <div className="text-left">
                  <div className="text-[14px] text-gray-500 leading-tight">
                    Get on Android
                  </div>
                </div>
              </button>

              {/* App Store Button */}
              <button
                className="flex items-center justify-center sm:justify-center space-x-2 bg-white border border-[#3A3A3A80] 
    w-[170px] ml-23 sm:ml-0 lg:ml-0 sm:w-[150px] px-4 py-3 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[14px] text-gray-500 leading-tight">
                    Get on iPhone
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Woman Image */}
              <div className="w-[320px] sm:w-[400px] md:w-[500px] lg:w-[650px]">
                <img
                  src={heroImage}
                  alt="Hero Illustration"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos - Moved outside the container */}
      <div className="bg-[#FBFBFB] py-7 w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-16 sm:gap-20 md:gap-24 lg:gap-44 xl:gap-48"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // adjust speed here (lower = faster)
            ease: "linear",
          }}
        >
          {/* Duplicate logos so scrolling looks infinite */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={logo.src} alt={logo.alt} className={logo.className} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Numbers section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#172E80] mb-4 leading-snug">
            {/* Mobile text - unchanged */}
            <span className="block lg:hidden">
              More than{" "}
              <span className="text-blue-600">
                {counts.activeUsers.toLocaleString()}
              </span>{" "}
              active users trust Fintekk
            </span>

            {/* Desktop text - forced two lines */}
            <span className="hidden lg:block">
              More than{" "}
              <span className="text-blue-600">
                {counts.activeUsers.toLocaleString()}
              </span>{" "}
              active users <br />
              trust Fintekk
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Hero;
