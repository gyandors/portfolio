import { useEffect } from "react";
import { motion } from "motion/react";

export default function Loader() {
  useEffect(() => {
    document.body.classList.add("loading");

    return () => document.body.classList.remove("loading");
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div className="size-16 border-x-8 border-x-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 font-semibold text-gray-700">Loading...</p>
      </motion.div>
    </motion.div>
  );
}
