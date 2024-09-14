import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",  // Ensure this value aligns with your intended design
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"  // Corrected typo here
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"  // Ensure styles are correct for intended layout
          />
        );
      })}
    </>
  );
};

export default Stairs;
