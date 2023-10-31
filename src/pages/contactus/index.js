import LayOut from "../../components/layout";
import "./index.css";
import { useEffect } from "react";


export default function ContactUs(){
  useEffect(()=>{
    document.title = "Streamlab/contact us";
  },[]);
    return(
        <>
        <LayOut>
          <div className="banner">
            <img src="/assets/images/main/lf.jfif"/>
            <div className="container">
                <div className="banner-content">
                    <h1 className="big-title"> Contact Us</h1>
                    <i class="fa-solid fa-house-chimney"></i>
                    <span>Home</span>
                    <i class="fa-solid fa-angle-right"></i>
                    <span className="active"> Contact Us</span>
                </div>
            </div>
          </div>
          <div className="contact-container">
            <ul className="triple">
              <li>
                <div className="info-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="contactInfo">
                  <h1 className="big">our location</h1>
                  <p>The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</p>
                </div>
              </li>
              <li>
                <div className="info-icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className="contactInfo">
                  <h1>call us at</h1>
                  <p>
                    +(44)7818161573
                    <br></br>
                    +(44)7818161573
                  </p>
                </div>
              </li>
              <li>
                <div className="info-icon">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <div className="contactInfo">
                  <h1>mail us</h1>
                  <p>
                    info@streamlab.com
                    <br></br>
                    sale@streamlab.com
                  </p>
                </div>
              </li>
            </ul>
            <div className="get-in-touch">
              <div className="message-box">
                <h1>get in touch</h1>
                <form>
                  <ul>
                    <li>
                      <input type="text"  placeholder="Your Name"></input>
                    </li>
                    <li>
                      <input type="text" placeholder="Email"></input>
                    </li>
                    <li>
                      <input type="text" placeholder="Phone"></input>
                    </li>
                    <li>
                      <input type="text" placeholder="Venue"></input>
                    </li>
                  </ul>
                </form>
                <textarea className="message" name="text" placeholder="Your Message" rows="9"></textarea>
                <button className="sendButton">SEND</button>
              </div>
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608995.8645716434!2d-2.3576341280154622!3d53.3989058634117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0dfe455711%3A0x6df4febf58f5d816!2sSalford!5e0!3m2!1sen!2suk!4v1687622585185!5m2!1sen!2suk" style={{ width:"100%", height:"550px", border:0, loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
              </div>
            </div>
          </div>
        </LayOut>
        </>
    )
}