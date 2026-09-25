import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

import "./styles/ScrollExperience.css"

function ScrollExperience() {

  // Page scroll progress
  const { scrollYProgress } = useScroll();

  // Smooth progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Text scale
  const scale = useTransform(
    smoothProgress,
    [0, 0.3],
    [1, 2]
  );

  // Text opacity
  const opacity = useTransform(
    smoothProgress,
    [0, 0.25],
    [1, 0]
  );

  // Circle rotation
  const rotate = useTransform(
    smoothProgress,
    [0, 1],
    [0, 720]
  );

  return (
    <main className="scroll-page">

      {/* PROGRESS BAR */}

      <motion.div
        className="progress"
        style={{
          scaleX: smoothProgress,
        }}
      />


      {/* HERO */}

      <section className="hero">

        <motion.h1
          style={{
            scale,
            opacity,
          }}
        >
          CREATE
        </motion.h1>

        <p>
          Scroll down ↓
        </p>

      </section>


      {/* MOVING TEXT */}

      <section className="marquee-section">

        <motion.div
          className="marquee"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          DESIGN • CODE • CREATE • DESIGN • CODE • CREATE •
        </motion.div>

      </section>


      {/* PARALLAX */}

      <section className="parallax">

        <motion.div
          className="parallax-card card-one"
          initial={{
            y: 150,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
          }}
        >
          FRONTEND
        </motion.div>


        <motion.div
          className="parallax-card card-two"
          initial={{
            y: 250,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          BACKEND
        </motion.div>


        <motion.div
          className="parallax-card card-three"
          initial={{
            y: 350,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.4,
          }}
        >
          ANIMATION
        </motion.div>

      </section>


      {/* ROTATING ELEMENT */}

      <section className="rotate-section">

        <motion.div
          className="circle"
          style={{
            rotate,
          }}
        >
          SCROLL • CREATE • REPEAT •
        </motion.div>

      </section>


      {/* REVEAL TEXT */}

      <section className="reveal-section">

        <motion.h2
          initial={{
            y: 150,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          I BUILD
          <br />
          DIGITAL
          <br />
          EXPERIENCES.
        </motion.h2>

      </section>

    </main>
  );
}

export default ScrollExperience;