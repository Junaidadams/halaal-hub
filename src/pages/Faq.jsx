import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../constants";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <h1 className="text-4xl font-black text-prussianBlue text-center py-6">
          Frequently Asked Questions
        </h1>

        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2 flex-col gap-6 font-poppins">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-paynesGrey tracking-wider">
                  {faq.question}
                </span>
                <span className="text-prussianBlue text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
