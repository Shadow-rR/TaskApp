import React from "react";
import { Link } from "react-router-dom";
export const Edit=({id})=>{
    return (
        <Link to={`/edit/${id}`}><button >Edit</button></Link>
        
    )
}