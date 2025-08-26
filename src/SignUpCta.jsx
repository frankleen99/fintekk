import React, { useState } from "react";

export default function SignUpCta() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    // Handle email submission here
  };

  return (
    <div className="bg-white xl:py-10 2xl:py-10 p-8 flex items-center justify-center">
      <div className="bg-[#2E5CFF] rounded-3xl p-10 text-left md:text-center lg:text-center text-white max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium mb-2">Start growing</h2>
        <h2 className="text-4xl md:text-5xl font-medium mb-8">
          your wealth today
        </h2>

        <div className="space-y-6">
          {/* Container for input and button */}
          <div className="relative w-full max-w-lg mx-auto">
            {/* Input field */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-lg lg:rounded-full xl:rounded-full  text-white placeholder-white placeholder:text-sm placeholder:font-extralight border border-white backdrop-blur-sm focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
            />

            {/* Button (inside input on larger screens) */}
            <button
              onClick={handleSubmit}
              className="hidden sm:flex absolute top-1 bottom-1 right-1 items-center justify-center bg-white text-[#3A3A3A] font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
            >
              Sign up
            </button>
          </div>

          {/* Button (below input only for mobile) */}
          <button
            onClick={handleSubmit}
            className="flex sm:hidden justify-start bg-white text-[#3A3A3A] font-medium px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 w-auto"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
