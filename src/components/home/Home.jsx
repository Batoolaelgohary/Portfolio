import "./home.scss";
import { motion } from "framer-motion";

const textVarients = {
  intial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },

  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slideVarients = {
  initial: {
    x: -100,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <motion.div
          variants={textVarients}
          initial="intial"
          animate="animate"
          className="info"
        >
          <motion.p variants={textVarients}>Batool EL-Gohary</motion.p>
          <motion.h1 variants={textVarients}>Frontend Web Developer</motion.h1>
          <motion.div variants={textVarients} className="buttons">
            <button
              onClick={() => {
                location.href = "#Portfolio";
              }}
            >
              see the latest works
            </button>
            <button>
              <a href="./resume.pdf" download="Batool Elgohary Resume">
                download resume
              </a>
            </button>
          </motion.div>
          <motion.div
            variants={textVarients}
            className="scroll"
            animate="scrollBtn"
            onClick={() => {
              location.href = "#Contact";
            }}
          >
            <img src="/scroll.png" alt="" />
          </motion.div>
        </motion.div>
        <div className="img">
          <img src="/profile.png" alt="my photo" />
        </div>
        <motion.div
          variants={slideVarients}
          animate="animate"
          initial="initial"
          className="sliding-text"
        >
          <p>react.js developer frontend web developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
