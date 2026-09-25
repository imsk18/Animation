import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./styles/Home.css"


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    y: 80,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Home() {
  const [show, setShow] = useState(true);

  return (
    <main className="page">

      {/* HERO */}
      <motion.section
        className="hero"
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        {/* NAVBAR */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <h2>MY<span>DEV</span></h2>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Contact
          </motion.button>
        </motion.nav>


        {/* HERO CONTENT */}
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.p
            className="tag"
            variants={item}
          >
            FULL STACK DEVELOPER
          </motion.p>


          <motion.h1 variants={item}>
            Build.
            <br />
            <span>Animate.</span>
            <br />
            Create.
          </motion.h1>


          <motion.p
            className="description"
            variants={item}
          >
            I build modern and interactive web
            experiences using React, Node.js
            and powerful animation.
          </motion.p>


          <motion.div
            className="buttons"
            variants={item}
          >

            <motion.button
              className="primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              Explore Projects
            </motion.button>


            <motion.button
              className="secondary"
              whileHover={{
                x: 8,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setShow(!show)}
            >
              Toggle
            </motion.button>

          </motion.div>

        </motion.div>


        {/* FLOATING CIRCLE */}
        <motion.div
          className="circle"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </motion.section>


      {/* SCROLL SECTION */}
      <motion.section
        className="about"
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
        }}
      >

        <h2>What I Do</h2>

        <div className="cards">

          <motion.div
            className="card"
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <h3>Frontend</h3>
            <p>React, JavaScript, Tailwind and modern UI.</p>
          </motion.div>


          <motion.div
            className="card"
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB and APIs.</p>
          </motion.div>


          <motion.div
            className="card"
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <h3>Animation</h3>
            <p>Motion, GSAP and interactive experiences.</p>
          </motion.div>

        </div>

      </motion.section>


      {/* AnimatePresence */}
      <AnimatePresence>

        {show && (
          <motion.div
            className="popup"
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 50,
            }}
            transition={{
              duration: 0.4,
            }}
            layout
          >
            <h3>Motion is powerful 🚀</h3>

            <button onClick={() => setShow(false)}>
              Close
            </button>
          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}

export default Home;