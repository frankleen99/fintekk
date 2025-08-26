import React from "react";
import { ArrowRight } from "lucide-react";
import easyPayment from "./assets/Images/easyPayment.png";
import investments from "./assets/Images/Investments.png";
import fixedSavings from "./assets/Images/fixedSavings.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <div className="bg-[#FBFBFB]">
      {/* Services Section */}
      <section className="py-12 m-5 sm:py-20 px-4 bg-[#FBFBFB]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-2">
            <p className="text-[#3A3A3A] uppercase tracking-wider text-base sm:text-lg mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-4xl sm:text-4xl font-medium text-[#172E80] mb-3">
              What we offer
            </h2>
            <p className="text-[#777777] font-[150] text-[13px] sm:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
              We help individuals become more flexible and responsible with
              their financials and handle payments smooth and easy.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Easy Payment",
                desc: "Stress-free payment for all transactions that you do at any time.",
                img: easyPayment,
                bg: "bg-[#F4F6FF]",
              },
              {
                title: "Investments",
                desc: "Grow your money by investing in pre-vetted investment opportunities.",
                img: investments,
                bg: "bg-[#FEF7F1]",
              },
              {
                title: "Fixed Savings",
                desc: "Build a dedicated savings faster on your terms automatically or manually.",
                img: fixedSavings,
                bg: "bg-[#F4F6FF]",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`${card.bg} rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Card Text */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-[500] text-[#172E80] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#777777] text-sm sm:text-base font-extralight mb-4 sm:mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors text-sm sm:text-base">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Card Image */}
                <div className="flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-[180px] sm:w-[217px] h-[200px] sm:h-[250px] object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
