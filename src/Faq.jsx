import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import faqIllustration from "./assets/Images/faqImage.png";

const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqs = [
    {
      question: "Is Fintek's security guaranteed?",
      answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  minim mollit non deserunt ullamco est sit aliqua dolor do amet sint"
    },
    {
      question: "How to activate Fintek account",
      answer: "Follow our simple account activation process by verifying your email and completing the required security steps."
    },
    {
      question: "What should I do if I forget my pin",
      answer: "You can easily reset your PIN through our secure recovery process available in the app settings."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <div className="bg-[#FBFBFB]">
      <div className="mx-auto">
        {/* FAQ Section */}
        <div className="bg-white overflow-hidden">
          {/* Use flex-col-reverse for mobile, flex-row for lg */}
          <div className="flex flex-col-reverse lg:flex-row">
            
            {/* Left Side - FAQ Content */}
            <div className="lg:w-1/2 p-6 pb-18 lg:p-12 xl:ml-10 bg-[#2E5CFF]">
              <h2 className="text-4xl lg:text-5xl font-medium text-white mt-8">FAQs</h2>
              <div className="space-y-4 mt-8">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg border border-white overflow-hidden transition-all duration-300 hover:bg-white/15"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 rounded-lg py-4 text-left flex justify-between items-center text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="font-light text-md md:text-lg lg:text-lg xl:text-lg">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-white/70" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/70" />
                      )}
                    </button>

                    {expandedFaq === index && (
                      <div className="px-6 pb-4 font-extralight text-[#172E80] rounded-lg bg-amber-50 animate-in slide-in-from-top-2 duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Character Illustration */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
              <img
                src={faqIllustration}
                alt="FAQ Illustration"
                className="w-full h-auto max-w-md lg:max-w-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
