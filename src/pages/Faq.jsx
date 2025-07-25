import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../constants";
import Wrapper from "../components/util/Wrapper";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const containerVariants = {
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3, // match container animation duration
        duration: 0.2,
      },
    },
  };
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <h1 className="text-4xl font-black text-prussianBlue text-center py-6">
          Frequently Asked Questions
        </h1>

        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2 flex-col gap-6 font-poppins">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white shadow-md p-6 transition-all">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-paynesGrey tracking-wider">
                  {faq.question}
                </span>
                <span className="text-white bg-prussianBlue py-0 px-1 rounded-sm text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={containerVariants}
                    style={{ overflow: "hidden" }} // prevents weird jumpiness
                  >
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={textVariants}
                      className="mt-4 text-gray-700"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Faq;
