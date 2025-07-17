import { motion } from "framer-motion";

const pulseVariants = {
  initial: { opacity: 0.8 },
  animate: {
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const MapViewSkeleton = () => {
  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate="animate"
      className="w-full h-full rounded-t-xl rounded-b-xl bg-gray-200 shadow-lg m-auto border-mainBlack border"
    ></motion.div>
  );
};

export default MapViewSkeleton;
