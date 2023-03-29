import { motion, Variants } from "framer-motion";

interface Props {
  letters: string[];
  absolute?: string;
}

export const WavyText = ({ letters, absolute }: Props) => {
  const container: Variants = {
    hidden: {
      opacity: 0.75,
    },
    visible: (i: number = 1) => ({
      opacity: 0.75,
      transition: { staggerChildren: 0.05, delayChildren: i * 2 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 0.75,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.p
      className={`tracking-[1.5rem] font-thin text-grey flex overflow-hidden justify-center mt-6 mb-4 ${absolute}`}
      variants={container}
      animate="visible"
      initial="hidden"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
