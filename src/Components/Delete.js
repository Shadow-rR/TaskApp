import React from "react";
import { useHistory } from "react-router";
export const Delete=({id})=>{
    const history=useHistory()
    const deleteHandler=()=>{
        fetch(`/api/delete/${id}`,{
            method:'POST',
            body:JSON.stringify({id:id}),
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            history.push('/')
        })
    }
    return (
        <button onClick={deleteHandler}>Delete</button>
    )
}