import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        
        {/* <div className="social">
        <h3 style={{color:"black"}}>Contact</h3>
        </div>
         */}
      </div>
    </div>
  );
};

export default Navbar;
