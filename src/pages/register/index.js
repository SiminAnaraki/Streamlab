import { Link } from "react-router-dom";
import  styles from "./register.module.css";
import { useEffect } from "react";

export default function Register(){
    useEffect(()=>{
        document.title = "Streamlab/Register";
      },[]);
    useEffect(() =>{
        let checkedRadio = document.getElementById("premium");
        checkedRadio.checked = true;
    },[])
    return (
        <>
            <div className={styles.register}>
                <div className="container">
                    <div className={styles.square}>
                        <h5>register</h5>
                        <form action="#">
                            <ul>
                                <li>
                                    <lable for="user-name"  >username *</lable>
                                    <br></br>
                                    <input type="email" id="user-name" className={styles.color}></input>
                                    <br></br>
                                </li>
                                <li>
                                    <lable for="password">e-mail *</lable>
                                    <br></br>
                                    <input type="text" id="password" className={styles.color}></input>
                                    <br></br>
                                </li>
                                <li>
                                    <lable for="password">first name</lable>
                                    <br></br>
                                    <input type="text" id="password" className={styles.color}></input>
                                    <br></br>
                                </li>
                                <li>
                                    <lable for="password">last name</lable>
                                    <br></br>
                                    <input type="text" id="password" className={styles.color}></input>
                                    <br></br>
                                </li>
                                <li>
                                    <lable for="password">Password *</lable>
                                    <br></br>
                                    <input type="text" id="password" className={styles.color}></input>
                                    <br></br>
                                </li>
                                <li>
                                    <label for="password">repeat password *</label>
                                    <br></br>
                                    <input type="text" id="password" className={styles.color} ></input>
                                    <br></br>
                                </li>
                            </ul>
                            <div className={styles.price}>
                                <label for="premium" >
                                    <input type="radio" id="premium" name="price" />
                                    <p>Premium - 199$ / 1 Month</p>
                                    </label>
                                <br></br>
                                <label for="standard" >
                                    <input type="radio" id="standard" name="price"  />
                                    <p>Standard - 99$ / 1 Month</p>
                                </label>
                                <br></br>
                                <label for="basic" >
                                    <input type="radio" id="basic" name="price" />
                                    <p>Basic- 29$ / 1 Month</p>
                                    </label>
                                <br></br>
                            </div>
                                <input type="submit" value="REGISTER" className={styles.submit} ></input>
                                <Link to="/"><i class="fa-solid fa-house"></i></Link>
                                <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}