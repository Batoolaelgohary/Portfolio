import { motion } from "framer-motion";

const varients = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVarients = {
  closed: {
    y: 50,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
};
const items = ["Home", "Services", "Portfolio", "Contact"];
const Links = () => {
  return (
    <motion.div variants={varients} className="links">
      {items.map((item) => {
        return (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVarients}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
