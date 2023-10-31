import { Link } from 'react-router-dom';
import Search from '../../search';
import styles from '../hambur/hambur.module.css';
import { useState } from 'react';
import {VscMenu} from 'react-icons/vsc';
import {IoMdClose} from 'react-icons/io';
import HamInside from './hamInside';

export default function Hambur(){
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [open,setOpen] = useState(false)

    const toggleSearchBox = () => {
        setShowSearchBox(!showSearchBox);
    };
    const toggleOpen = () => {
        setOpen(!open);
    };
    const hamburIcon = <VscMenu  color='#fff' size="40px" className={styles.hamburIcon} onClick={toggleOpen}/>
    const closeIcon = <IoMdClose  color='#fff' size="40px" className={styles.hamburIcon} onClick={toggleOpen}/>
    return (
        <div  className={styles.hambur} >
            <div className={styles.flexHolder}>
                <div className={styles.search}>
                    <i
                         className={`fa-solid ${showSearchBox ? 'fa-xmark' : 'fa-magnifying-glass'}`}
                        onClick={toggleSearchBox}
                    ></i>
                     {showSearchBox === true ?
                        <div className={styles.searchBoxIn} id="box">
                            <Search />
                        </div> 
                        :  
                        <div className={styles.searchBoxOut} id="box">
                            <Search />
                        </div>
                        }
                </div>
                <div>
                    <a href="" >
                        <Link to="/log-in">
                            <div className={styles.user}>
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </Link>
                    </a>
                </div>
                <div>
                    <Link to="/register">
                        <button className={styles.subscribe}>Subscribe</button>
                    </Link>
                </div>
                <div className={styles.hamburMenu}>
                    {open ? closeIcon : hamburIcon}
                    {open && <HamInside/>}
                </div>
            </div>
        </div>
    )
}