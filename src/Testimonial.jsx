// import { useState } from "react";
// import { Star, ArrowUp, ArrowDown } from "lucide-react";

// export default function Testimonial() {
//   const [activeStep, setActiveStep] = useState(1);

//   const testimonials = [
//     {
//       name: "Maryam Adegoke",
//       rating: 4,
//       text: "Dealt with enquiry and subsequent order efficiently and quickly. So pleased with price and service I ordered a second one."
//     },
//     {
//       name: "John Doe",
//       rating: 5,
//       text: "Amazing customer service, and the product quality exceeded my expectations!"
//     },
//     {
//       name: "Sarah Smith",
//       rating: 3,
//       text: "Good experience overall, though delivery took a little longer than expected."
//     }
//   ];

//   const handleStepClick = (step) => setActiveStep(step);
//   const handlePrevious = () => activeStep > 1 && setActiveStep(activeStep - 1);
//   const handleNext = () => activeStep < testimonials.length && setActiveStep(activeStep + 1);

//   const testimonial = testimonials[activeStep - 1];

//   return (
//     <section className="bg-[#FBFBFB] py-16 px-6 flex items-center">
//       {/* Header */}
//         <div className="text-left mb-12 pl-25">
//           <p className="text-[#3A3A3A] uppercase tracking-wider text-xl font-light mb-2">
//             TESTIMONIALS
//           </p>
//           <h2 className="text-[#172E80] text-3xl md:text-5xl font-medium leading-tight">
//             What Our Customers
//             <br />
//             Say About Us
//           </h2>
//         </div>

//       {/* Card + Step Indicator Container */}
//       <div className="flex items-center justify-center w-full max-w-4xl">
//         {/* Testimonial Card */}
//         <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-2xl">
//           <p className="text-[#3A3A3A] text-lg georama-custom md:text-xl leading-relaxed mb-6">
//             {testimonial.text}
//           </p>

//             {/* Customer Name */}
//               <h3 className="text-[#172E80] text-xl font-[400] mb-4">
//                 {testimonial.name}
//               </h3>

//           {/* Star Rating */}
//               <div className="flex justify-start space-x-1">
//                 {[...Array(5)].map((_, starIndex) => (
//                   <Star
//                     key={starIndex}
//                     className={`w-4 h-4 ${
//                       starIndex < testimonial.rating
//                         ? "fill-yellow-400 text-yellow-400"
//                         : "text-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>
//         </div>

//         {/* Step Indicator on Right */}
//         <div className="flex flex-col items-center space-y-6 ml-6">
//           {/* Up button */}
//           <button
//             onClick={handlePrevious}
//             disabled={activeStep === 1}
//             className={`w-8 h-8 text-[#172E80] flex items-center justify-center transition-all duration-200 ${
//               activeStep === 1
//             }`}
//           >
//             <ArrowUp size={24} />
//           </button>

//           {/* Step circles */}
//           <div className="flex flex-col space-y-4">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleStepClick(index + 1)}
//                 className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-200 ${
//                   activeStep === index + 1
//                     ? "bg-[#172E80] text-white shadow-md"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>

//           {/* Down button */}
//           <button
//             onClick={handleNext}
//             disabled={activeStep === testimonials.length}
//             className={`w-8 h-8 text-[#172E80] flex items-center justify-center transition-all duration-200 ${
//               activeStep === testimonials.length
//             }`}
//           >
//             <ArrowDown size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Star, ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";

export default function Testimonial() {
  const [activeStep, setActiveStep] = useState(1);

  const testimonials = [
    {
      name: "Maryam Adegoke",
      rating: 4,
      text: "Dealt with enquiry and subsequent order efficiently and quickly. So pleased with price and service I ordered a second one.",
    },
    {
      name: "John Doe",
      rating: 5,
      text: "Amazing customer service, and the product quality exceeded my expectations!",
    },
    {
      name: "Sarah Smith",
      rating: 3,
      text: "Good experience overall, though delivery took a little longer than expected.",
    },
  ];

  const handleStepClick = (step) => setActiveStep(step);
  const handlePrevious = () => activeStep > 1 && setActiveStep(activeStep - 1);
  const handleNext = () =>
    activeStep < testimonials.length && setActiveStep(activeStep + 1);

  return (
    <section className="bg-[#FBFBFB] py-16 px-6 flex flex-col items-center">
      {/* Wrapper for desktop side-by-side layout */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:items-start lg:space-x-9">
        {/* Header */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-[#3A3A3A] uppercase tracking-wider text-xl font-light mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-[#172E80] text-4xl md:text-5xl font-medium leading-tight">
            {/* Mobile version */}
            <span className="block lg:hidden">
              What Our
              <br />
              Customers Say
              <br />
              About Us
            </span>

            {/* Desktop version */}
            <span className="hidden lg:inline-block">
              What Our Customers
              <br />
              Say About Us
            </span>
          </h2>
        </div>

        {/* Desktop Layout - Card + Controls */}
        <div className="hidden lg:flex items-center justify-center w-full lg:w-2/3 max-w-4xl">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-2xl">
            <p className="text-[#3A3A3A] text-lg font-light md:text-xl leading-relaxed mb-6">
              {testimonials[activeStep - 1].text}
            </p>
            <h3 className="text-[#172E80] text-xl font-[400] mb-4">
              {testimonials[activeStep - 1].name}
            </h3>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={`w-4 h-4 ${
                    starIndex < testimonials[activeStep - 1].rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Indicator - Vertical */}
          <div className="flex flex-col items-center space-y-6 ml-6">
            {/* Up button */}
            <button
              onClick={handlePrevious}
              disabled={activeStep === 1}
              className={`w-8 h-8 text-[#172E80] flex items-center justify-center ${
                activeStep === 1 && "opacity-40 cursor-not-allowed"
              }`}
            >
              <ArrowUp size={24} />
            </button>

            {/* Steps */}
            <div className="flex flex-col space-y-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg ${
                    activeStep === index + 1
                      ? "bg-[#172E80] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Down button */}
            <button
              onClick={handleNext}
              disabled={activeStep === testimonials.length}
              className={`w-8 h-8 text-[#172E80] flex items-center justify-center ${
                activeStep === testimonials.length &&
                "opacity-40 cursor-not-allowed"
              }`}
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Horizontal Slider */}
      <div className="lg:hidden w-full max-w-md relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="min-w-full px-4">
                <div className="bg-white rounded-3xl p-6 shadow">
                  <p className="text-[#3A3A3A] text-base leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <h3 className="text-[#172E80] text-lg font-[400] mb-3">
                    {item.name}
                  </h3>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-4 h-4 ${
                          starIndex < item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows and Dots */}
        <div className="flex items-center justify-center space-x-3 mt-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={activeStep === 1}
            className={`w-10 h-10 flex items-center justify-center text-[#172E80] ${
              activeStep === 1 && "opacity-40 cursor-not-allowed"
            }`}
          >
            <ArrowLeft size={24} />
          </button>

          {/* Step Dots */}
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index + 1)}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  activeStep === index + 1
                    ? "bg-[#172E80] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={activeStep === testimonials.length}
            className={`w-10 h-10 flex items-center justify-center text-[#172E80] ${
              activeStep === testimonials.length &&
              "opacity-40 cursor-not-allowed"
            }`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
