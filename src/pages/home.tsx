import { motion } from "motion/react";

export function Home() {
  return (
    <>
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="flex flex-1 justify-center text-[14em]"
      >
        🐧
      </motion.div>
    </>
  );
}
