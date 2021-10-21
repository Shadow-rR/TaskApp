import React from "react";
import { Link } from "react-router-dom";
import styles from "../css_modules/show.module.css";

export const Edit=({id})=>{
    return (
        <Link to={`/edit/${id}`}><button className={styles.custmBtn}>Edit</button></Link>
        
    )
}