import { Link } from "react-router-dom";
import styles from "../hambur.module.css";
import {motion} from 'framer-motion';

export default function HamInside() {
    const animateFrom = {opacity:0,y:-40}
    const animateTo = {opacity:1,y:0}
    return(
        <>
            <ul>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.05}}>
                    <Link to="/" >
                        <div className={styles.red}>
                            <p className={styles.home}>Home</p>
                            <i class="fa-solid fa-house"></i>
                        </div>
                    </Link>
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.10}}>
                    <Link to ="/Movies">
                        <div className={styles.red}  >
                            <p>Movies</p>
                            <i class="fa-solid fa-film"></i>
                        </div>
                    </Link>
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.20}}>
                    <Link to ="/TV-Show">
                        <div className={styles.red} >
                            <p>TV Shows</p>
                            <i class="fa-solid fa-tv"></i>
                        </div>
                    </Link>
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.30}}>
                    <Link to="/contact">
                        <div className={styles.red}>
                            <p>contact us</p>
                            <i class="fa-solid fa-phone"></i>
                        </div>
                    </Link>
                </motion.li>
            </ul>
        </>
    )
}