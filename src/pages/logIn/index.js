import { Link } from "react-router-dom";
import styles from "./logIn.module.css";
import { useEffect } from "react";

export default function LogIn(){
    useEffect(()=>{
        document.title = "Streamlab/Sign In";
      },[]);
    return (
        <>
            <div className={styles.logIn}>
                <div className={styles.container}>
                    <div className={styles.square}>
                        <h4>SIGN IN</h4>
                        <form action="#">
                            <lable for="user-name"  >Email Address</lable>
                            <br></br>
                            <input type="email" id="user-name" className={styles.color} placeholder=""></input>
                            <br></br>
                            <lable for="password">Password</lable>
                            <br></br>
                            <input type="text" id="password" className={styles.color} placeholder=""></input>
                            <br></br>
                            <input type="checkbox" id="remember"></input>
                            <labal for="remember" className={styles.rememberSpace}>Remember Me</labal>
                            <br></br>
                            <input type="submit" value="LOG IN" className={styles.submit}></input>
                            <br></br>
                            <div className={styles.link}>
                                <p className={styles.paddingRight}><Link to="/register" >Register</Link></p>
                                <span>|</span>
                                <p className={styles.paddingLeft}><Link to="/recover-password" >Lost your password?</Link></p>
                                <Link to="/"><i class="fa-solid fa-house"></i></Link>
                            </div>
                        </form>
                </div>
                </div>
            </div>
        </>
    )
}