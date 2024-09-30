import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sideBar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {" "}
          Batool Elgohary
        </motion.span>
        <ul className="social">
          <li>
            <a target="_blank" rel="noreferrer" href="tel:01119907877">
              <img src="/mobile.png" alt={"Mobile"} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:batoolelgohary@gmail.com"
            >
              <img src="/gmail.webp" alt={"gmail"} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/batool-elgohary-15aa0518b"
            >
              <img src="/linkedin.png" alt={"linkedin"} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Batoolaelgohary"
            >
              <img src="/github.png" alt={"github"} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
