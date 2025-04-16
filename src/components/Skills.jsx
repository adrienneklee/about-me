import { motion } from "framer-motion";

function Test() {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ duration: 1 }}
      className="bg-red-500 p-4"
    >
      👋 Hello Motion
    </motion.div>
  );
}

export default Test;