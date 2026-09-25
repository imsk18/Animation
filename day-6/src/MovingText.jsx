import { motion } from "motion/react";
import "./styles/movingText.css"

const text = "CREATE • BUILD • ANIMATE • ";

const container = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 12,
        ease: "linear",
      },
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 90,
  },

  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function MovingText() {
  return (
    <section className="moving-section">

      {/* Moving background text */}
      <motion.div
        className="marquee"
        variants={container}
        animate="animate"
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>


      {/* Main text */}
      <motion.div
        className="main-text"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {"I CREATE DIGITAL EXPERIENCES".split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className={char === " " ? "space" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

    </section>
  );
}

export default MovingText;