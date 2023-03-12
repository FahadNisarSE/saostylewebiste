import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import search from "../assets/search.svg";
import menu from "../assets/menu.svg"

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src={search}
        alt="Search"
        className="object-contain w-[24px] h-[24px]"
      />
      <h2 className="font-extrabold text-[24px] leadinig-[30px] text-white">
        METAVERSUS
      </h2>
      <img src={menu} alt="menu" className="object-contain w-[24px] h-[24px]" />
    </div>
  </motion.nav>
);

export default Navbar;
