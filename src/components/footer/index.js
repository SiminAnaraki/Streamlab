import './index.css';
import Subfooter from './subfooter';
import { exploreFirst, exploreSecond , companyFirst , companySecond} from './subfooter/data';
import { useEffect } from "react";

export default  function Footer(){ 
    useEffect(() => {
        function topPosition() {
          const element = document.getElementById("position");
          if (element) {
            if (document.body.scrollTop >100 || document.documentElement.scrollTop > 100) {
              element.classList.add("yes-top");
            } else {
              element.classList.add("no-top")
              element.classList.remove("yes-top");
            }
          }
        }
        window.addEventListener("scroll", topPosition);
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener("scroll", topPosition);
        };
      }, []);
        return (
            <div className="footer">
                <div className="container">
                    <ul className="footer-holder">
                        <li className="first-column">
                            <img src="/assets/images/logo-1.png"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,magna aliqua</p>
                            <div className="social">
                                <a href="https://en-gb.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/"target="_blank" ><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.skype.com/en/"target="_blank" ><i class="fa-brands fa-skype"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </li>
                        <li className="second-column">
                            <h2>Explore</h2>
                            <div className="two-columns">
                                <ul>
                                    <Subfooter info={exploreFirst}/>
                                </ul>
                                <ul>
                                    <Subfooter info={exploreSecond}/>
                                </ul>
                            </div>
                        </li>
                        <li className="third-column">
                            <h2>Company</h2>
                            <div className="two-columns">
                                <ul>
                                <Subfooter info={companyFirst}/>
                                </ul>
                                <ul>
                                <Subfooter info={companySecond}/>
                                </ul>   
                            </div>
                        </li>
                        <li className="fourth-column">
                            <h2>Downlaod App</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="app">
                                <a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank"><img src="/assets/images/asset-35.png"/></a>
                                <a href="https://www.apple.com/uk/store" target="_blank" ><img src="/assets/images/asset-36.png"/></a>
                            </div>
                        </li>
                    </ul>
                    <div id="position"  >
                    <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
                    </div>
                </div>
                <div className="copyright">
                    <p><a href="#">
                        Copyright 2021 stremlab All Rights Reserved.
                     </a></p>
                </div>
            </div>
        )
}
           