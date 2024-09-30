import "./sidebar.scss";
import { useState } from "react";
import Links from "./links/Links";
import Togglebutton from "./togglebutton/Togglebutton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const varients = {
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffiness: 200,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffiness: 20,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
