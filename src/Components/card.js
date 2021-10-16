import React from 'react';
import { Link } from 'react-router-dom';
import {useTransition,animated} from 'react-spring';
export const Card=({todolist})=>{
    const transition=useTransition(todolist,
        {
        keys:todolist=>todolist.id,
        from:{
            opacity:0,
            width:'4%',
            marginLeft:-100,
            marginRight:100
        },
        enter:{
            opacity:1,
            width:'100%',
            padding:'5px 0px',
            marginLeft:0,
            marginRight:0
        }
    })
    return transition((styles,item,keys)=>
        item && <animated.div key={keys.id} style={styles}>
                <Link to={`/${item.id}`}>
                     {item.content}
                </Link>
        </animated.div>
    )
    // return (
    //     todolist.map((todo)=>{
    //         return (
    //         <ul key={todo.id}>
    //             <li>
    //                 <Link to={`/${todo.id}`}>
    //                 {todo.content}
    //                 </Link>
                    
    //             </li>
    //         </ul>)
    //     })
}