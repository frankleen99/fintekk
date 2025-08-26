// import React from "react";
// import phone from "./assets/Images/startTheJourney.png";

// const Steps = () => {
//   return (
//     <div className="bg-white">
//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Side - Phone Mockup */}
//           <div className="flex justify-start lg:justify-start border-2 border-red-500">
//             <div className="relative">
//               <div className="w-full h-full ml-50 p-2">
//                 <img
//                   src={phone}
//                   alt="App Screenshot"
//                   className="w-1/2 h-4/4"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="space-y-8">
//             {/* Main Heading */}
//             <div className="border-red-500 border-2">
//               <h1 className="text-4xl lg:text-5xl font-medium text-[#172E80] h-[150px] leading-tight">
//                 Start the journey to reach your financial goals today.
//               </h1>
//             </div>

//             {/* Steps with Progress Line */}
//             <div className="relative border-red-500 border-2">
//               {/* Progress Line */}
//               <div className="absolute left-6 mb-3 top-14 bottom-68 w-px bg-[#2E5CFF]"></div>

//                 {/* Progress Line 2-3 */}
//               <div className="absolute left-6 top-54 h-24 w-px bg-[#2E5CFF]"></div>


//               <div className="space-y-12">
//                 {/* Step 01 */}
//                 <div className="flex gap-6 relative">
//                   <div className="flex-shrink-0 relative z-10">
//                     <div className="w-12 h-12  text-[#2E5CFF] font-medium text-xl flex items-center justify-center">
//                       01
//                     </div>
//                   </div>
//                   <div className="flex-1 pt-2">
//                     <h3 className="text-xl font-semibold text-[#172E80] mb-3">
//                       Download the mobile app
//                     </h3>
//                     <p className="text-[#777777] font-extralight text-xl font-stretch-semi-expanded leading-relaxed">
//                       Sign up for an account with your name, email <br /> and phone
//                       number.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Step 02 */}
//                 <div className="flex gap-6 relative">
//                   <div className="flex-shrink-0 relative z-10">
//                     <div className="w-12 h-12 text-[#2E5CFF] font-medium text-lg flex items-center justify-center">
//                       02
//                     </div>
//                   </div>
//                   <div className="flex-1 pt-2">
//                     <h3 className="text-xl font-semibold text-[#172E80] mb-3">
//                       Create a free account
//                     </h3>
//                     <p className="text-[#777777] font-extralight text-xl font-stretch-semi-expanded leading-relaxed">
//                       Sign up for an account with your name,<br /> email and phone
//                       number.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Step 03 */}
//                 <div className="flex gap-6 relative">
//                   <div className="flex-shrink-0 relative z-10">
//                     <div className="w-12 h-12 text-[#2E5CFF] font-medium text-lg flex items-center justify-center">
//                       03
//                     </div>
//                   </div>
//                   <div className="flex-1 pt-2">
//                     <h3 className="text-xl font-semibold text-[#172E80] mb-3">
//                       Add a payment method
//                     </h3>
//                     <p className="text-[#777777] font-extralight font- font-stretch-semi-expanded text-xl leading-relaxed">
//                       Using your debit card, bank account, QR <br /> code, perform your
//                       first transaction.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Download Button */}
//             <div className="pt-9 pb-15 -ml-24">
//               <button className="bg-[#2E5CFF] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200">
//                 Download Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Steps;




//    <div className="flex justify-start lg:justify-start border-2 border-red-500">
//             <div className="relative">
//               <div className="w-full h-full ml-50 p-2">
//                 <img
//                   src={phone}
//                   alt="App Screenshot"
//                   className="w-1/2 h-4/4"
//                 />
//               </div>
//             </div>
//           </div>

import React from "react";
import phone from "./assets/Images/startTheJourney.png";

const Steps = () => {
  return (
    <div className="bg-white">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-full h-full p-2 xl:ml-50 2xl:ml-40 flex justify-center lg:block">
                <img
                  src={phone}
                  alt="App Screenshot"
                  className="w-3/4 sm:w-2/3 lg:w-1/2 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#172E80] lg:h-[150px] leading-tight text-center lg:text-left">
                Start the journey to reach your financial goals today.
              </h1>
            </div>

            {/* Steps with Progress Line */}
            <div className="relative pl-6 lg:pl-0">
              {/* Progress Line */}
              <div className="absolute left-11 lg:left-6 mb-3 top-13 bottom-67 w-px bg-[#2E5CFF]"></div>

                  {/* Progress Line 2-3 */}
               <div className="absolute left-11 lg:left-6 top-49 xl:top-53 xl:h-26 h-22 w-px bg-[#2E5CFF]"></div>


              <div className="space-y-12">
                {/* Step 01 */}
                <div className="flex gap-4 lg:gap-6 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 text-[#2E5CFF] font-medium text-lg lg:text-xl flex items-center justify-center">
                      01
                    </div>
                  </div>
                  <div className="flex-1 pt-2 text-center lg:text-left">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#172E80] mb-3">
                      Download the mobile app
                    </h3>
                    <p className="text-[#777777] font-light text-base lg:text-xl leading-relaxed">
                      Sign up for an account with your <br /> name, email and phone number.
                    </p>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="flex gap-4 lg:gap-6 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 text-[#2E5CFF] font-medium text-lg lg:text-xl flex items-center justify-center">
                      02
                    </div>
                  </div>
                  <div className="flex-1 pt-2 text-center lg:text-left">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#172E80] mb-3">
                      Create a free account
                    </h3>
                    <p className="text-[#777777] font-light text-base lg:text-xl leading-relaxed">
                      Sign up for an account with your <br /> name, email and phone number.
                    </p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="flex gap-4 lg:gap-6 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 text-[#2E5CFF] font-medium text-lg lg:text-xl flex items-center justify-center">
                      03
                    </div>
                  </div>
                  <div className="flex-1 pt-2 text-center lg:text-left">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#172E80] mb-3">
                      Add a payment method
                    </h3>
                    <p className="text-[#777777] font-light text-base lg:text-xl leading-relaxed">
                      Using your debit card, bank <br />account, QR code, perform your first transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-9 pb-15 flex justify-center lg:justify-start lg:-ml-24">
              <button className="bg-[#2E5CFF] hover:bg-blue-700 text-white font-semibold px-6 lg:px-5 py-3 rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200">
                <span className="block lg:hidden">Try fintec now</span>
                <span className="hidden lg:block">Download Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
