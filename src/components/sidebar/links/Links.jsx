import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Services", "Portfolio"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
          
        </motion.a>
      ))}
      <div className="social">
          <a href="https://www.facebook.com/profile.php?id=61551862755022&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-tafese-344336250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src="/linkden.png" alt="" />
          </a>
          <a href="https://t.me/samoteyasnet" target="_blank" rel="noopener noreferrer">
           <FaTelegram  className="telegramicon" style={{color:"rgb(0, 135, 115)"}}/>
          </a>
        
        </div>
    </motion.div>
  );
};

export default Links;
