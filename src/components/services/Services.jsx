import "./services.scss";
import { motion } from "framer-motion";
const Services = () => {
  const varients = {
    initial: {
      x: "-100%",
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
  };
  return (
    <motion.div className="services" initial="initial" whileInView={"animate"}>
      <motion.div className="text" variants={varients}>
        <p>
          I focus on helping your brand growing <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title" variants={varients}>
        <div>
          <img src="people.webp" alt="" />
          <p>
            <span>unique </span> ideas
          </p>
        </div>
        <div>
          <p>
            <span>for your </span>business.
          </p>
          <button>what we do?</button>
        </div>
      </motion.div>
      <motion.div className="list" variants={varients}>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae odit sed magnam sunt cum, tenetur exercitationem placeat
            distinctio aut excepturi et quia mollitia possimus quo obcaecati?
            Quidem sed molestiae quia?
          </p>
          <button>go</button>
        </motion.div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae odit sed magnam sunt cum, tenetur exercitationem placeat
            distinctio aut excepturi et quia mollitia possimus quo obcaecati?
            Quidem sed molestiae quia?
          </p>
          <button>go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae odit sed magnam sunt cum, tenetur exercitationem placeat
            distinctio aut excepturi et quia mollitia possimus quo obcaecati?
            Quidem sed molestiae quia?
          </p>
          <button>go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae odit sed magnam sunt cum, tenetur exercitationem placeat
            distinctio aut excepturi et quia mollitia possimus quo obcaecati?
            Quidem sed molestiae quia?
          </p>
          <button>go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
