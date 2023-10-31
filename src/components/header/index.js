import { Link } from 'react-router-dom';
import Search from '../search';
import Genres from '../genres';
import styles from './header.module.css'
import { useEffect } from 'react';
import Hambur from './hambur';

export default function Header(){
    useEffect(() => {
        function myFunction() {
            const element = document.getElementById("forheader");
            if (element) {
              if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                element.classList.add(styles.headerBackDark);
              } else {
                element.classList.remove(styles.headerBackDark);
              }
            }
          }
          // Add the event listener for scroll when the component mounts
          window.addEventListener("scroll", myFunction);
      
          // Clean up the event listener when the component is unmounted
          return () => {
            window.removeEventListener("scroll", myFunction);
          };
    },[])
    const showSearch = () => {
    document.getElementById("box").classList.toggle(`${styles.searchBoxIn}`);
    document.getElementById("magnifier").classList.toggle("fa-xmark");
    }
    const showGenres = () => {
    document.getElementById("genresList").classList.add(`${styles.genresIn}`)
    }
    const dontShowGenres = () => {
    document.getElementById("genresList").classList.remove(`${styles.genresIn}`)
    }
    const showGenresTV = () => {
    document.getElementById("genresListTV").classList.add(`${styles.genresInTV}`)
    }
    const dontShowGenresTV = () => {
    document.getElementById("genresListTV").classList.remove(`${styles.genresInTV}`)
    }

    return (
        <div  className={styles.header} id="forheader" >
            <div className="container">
                <div className={styles.headerHolder}>
                    <div className={styles.logo}>
                        <img src="/assets/images/logo-1.png"/>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.flexHolder}>
                            <li className={styles.red}>
                                <div className={styles.angle}>
                                    <Link to="/" >
                                        <p className={styles.home}>Home</p>
                                    </Link>
                                </div>
                            </li>
                            <li className={styles.haveGenres} >
                                <div className={`${styles.angle} ${styles.red}`}  >
                                    <Link to ="/Movies"><p onMouseOver={showGenres} onMouseLeave={dontShowGenres}>Movies</p></Link>
                                    <i class="fa-solid fa-angle-down" onMouseOver={showGenres} onMouseLeave={dontShowGenres}></i>
                                </div>
                                <div className={styles.genresOut} id = "genresList" onMouseOver={showGenres} onMouseLeave={dontShowGenres} > 
                                    <Genres/>
                                </div>
                            </li>
                            <li className={styles.haveGenres} >
                                <div className={`${styles.angle} ${styles.red}`}  >
                                    <Link to ="/TV-Show"><p onMouseOver={showGenresTV} onMouseLeave={dontShowGenresTV}>TV Shows</p></Link>
                                    <i class="fa-solid fa-angle-down" onMouseOver={showGenresTV} onMouseLeave={dontShowGenresTV}></i>
                                </div>
                                <div className={styles.genresOutTV} id = "genresListTV" onMouseOver={showGenresTV} onMouseLeave={dontShowGenresTV} > 
                                    <Genres/>
                                </div>
                            </li>
                            <li className={styles.red}>
                                <Link to="/contact">
                                    <p>contact us</p>
                                </Link>
                            </li>
                            <li className={styles.search}>
                                <i class="fa-solid fa-magnifying-glass" onClick={showSearch} id="magnifier"></i>
                                <div className={styles.searchBoxOut} id="box">
                                    <Search/>
                                </div>
                            </li>
                            <li>
                                <a href="" >
                                    <Link to="/log-in">
                                        <div className={styles.user}>
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                    </Link>
                                </a>
                            </li>
                            <li>
                                <Link to="/register">
                                    <button className={styles.subscribe}>Subscribe</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.hambur} >
                        <Hambur/>
                      
                    </div>
                </div>
            </div>
       </div>
    )
}