import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onFinish }) {

  const greeting = useMemo(() => [
    "Hello", "Hi", "नमस्ते", "नमस्कार", "Ram Ram",
    "Satnam", "Salam", "And", "Welcome", "To", "My", "Digital Space!"
  ], []);

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greeting.length - 1) {
      const id = setInterval(() => {
        setIndex(i => i + 1);
      }, 300);

      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [index, greeting.length]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.05,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.12 }}
          >
            {greeting[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
