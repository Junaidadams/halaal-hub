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

const ListingTileSkeleton = () => {
  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate="animate"
      className="w-full flex flex-col rounded-t-xl rounded-b-xl bg-white shadow-lg m-auto border-mainBlack border"
    >
      {/* Image placeholder */}
      <div className="relative h-40 bg-mainGreen bg-opacity-85  rounded-t-xl" />

      <div className="flex flex-col justify-between p-4 sm:p-6 h-full">
        <div>
          {/* Name placeholder */}
          <div className="h-5 bg-mainGreen bg-opacity-85  rounded w-3/4 mb-2" />
          {/* Price placeholder */}
          <div className="h-4 bg-mainGreen bg-opacity-85  rounded w-1/2 mb-4" />

          {/* Quantity dropdown placeholder */}
          <div className="my-2">
            <div className="h-4 w-1/3 bg-mainGreen bg-opacity-85  rounded mb-1" />
            <div className="h-8 bg-mainGreen bg-opacity-85  rounded w-full" />
          </div>

          {/* Flavour dropdown placeholder */}
          <div className="my-2">
            <div className="h-4 w-1/3 bg-mainGreen bg-opacity-85  rounded mb-1" />
            <div className="h-8 bg-mainGreen bg-opacity-85  rounded w-full mb-2" />
            <div className="h-4 w-1/2 bg-mainGreen bg-opacity-85  rounded mb-1" />
            <div className="h-4 w-3/5 bg-mainGreen bg-opacity-85  rounded" />
          </div>
        </div>

        {/* Button placeholder */}
        <div className="h-10 bg-mainGreen bg-opacity-85  rounded mt-4" />
      </div>
    </motion.div>
  );
};

export default ListingTileSkeleton;
