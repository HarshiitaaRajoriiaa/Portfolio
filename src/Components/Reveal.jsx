import { motion } from "framer-motion";

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div install framer-motion
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;