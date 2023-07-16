import { Link } from "react-router-dom";
import styles from "./recoverPassword.module.css";

export default function RecoverPassword(){
    return (
        <>
            <div className={styles.recover}>
                <div className={styles.container}>
                    <div className={styles.square}>
                        <h5>recover password</h5>
                        <h6>
                        Please enter your username or email address.
                        </h6>
                        <h6>
                        You will receive a link to create a new password via email.
                        </h6>
                        <form action="#">
                            <lable for="user-name"  >Email Address</lable>
                            <br></br>
                            <input type="email" id="user-name" className={styles.color}></input>
                            
                            <input type="submit" value="RESET PASSWORD" className={styles.submit}></input>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}