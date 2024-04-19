import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on crafting structured and appealing websites
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b >Profound</motion.b> Website
          </h1>  
        </div>
        <div className="title">
          <h1>
            <motion.b >For Your</motion.b> Ideas.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer"  variants={variants}>
       
    
        <div className="box">
        <motion.div
          style={{ background: "white", color: "black" }}
        >
          <h2>Database Design and Implement</h2>
          <p>
             Database Design and Implementation service starting from documentation, 
             data models, tables,database schemas and structure. 
          </p>
        </motion.div>
        </div>

        <div className="box">
        
        <motion.div 
          
          style={{ background: "white", color: "black" }}
        >
          <h2>web development </h2>
          <p>
             4+ year experience in this field. I have worked with various clients this gave me more experience in different sector including: factory,education, e-commerce and more. 
          </p>
        </motion.div>
        </div>

<div className="box3">
        <motion.div
           style={{backgroundColor:"transparent",border:"1px solid lightgrey",padding:"37px 20px 0 20px",height:"100%"}}
        >
          <h2>UI Design</h2>
          <p>
          craft visually stunning arts  and user-friendly websites that endures generations.
          </p>
        </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
