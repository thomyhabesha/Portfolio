import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Startup Accelerator",
    img: "/kefeta.png",
    desc: "This is a startup accelerator website i did for a company called Kefeta Startup accelerator. it includes both user side and admin side interface in which we can track users behavior.",
  },
  {
    id: 2,
    title: "Fire Extingusher Tracking System",
    img: "/fire.png",
    desc: "A company called Betelhem fire and safety needed a system to track their extingusher. this website tracks: extingusher refill date, upcoming refills, companies information and reports to manager.",
  },
  {
    id: 3,
    title: "Online Tutor",
    img: "/Group 4.png",
    desc: "A website for tutoring service. since its online, any teacher or students around the world can teach or learn. In progress ",
  },
  {
    id: 4,
    title: "Watch Store",
    img: "/watch.jpg",
    desc: "This is my personal project. Online watch store in which customers can add to cart, add quantity and buy.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
           {item.id===3? <button > In production</button>: item.id===2?<button style={{display:"none"}}> In production</button> :<button> <a href={item.id===1? "https://kefetastartups.com/":item.id===2?"https://github.com/thomyhabesha/betelhemfire":item.id===4?"https://thomyhabesha.github.io/Tomswatch/":""} target="_blank" rel="noopener noreferrer" >  See website</a></button>}
          </motion.div>
        </div>
      </div>
          
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Previous Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
