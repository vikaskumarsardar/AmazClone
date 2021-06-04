import React from 'react'
import {useStateVale} from './Basket'
export default function CheckoutPro({title,img,price,id,ratings}) {
const [{basket,user},dispatch]=useStateVale()
    
    const remove=()=>{
        dispatch({
            type:"Remove",
            id:id,
        })
    }
    
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{img}</p>
            <p>{price}</p>
            {Array(ratings).fill().map((ab,i)=>{
                return(
                    <p style={{display:"inline"}} key={i}>👍</p>
                )
            }   )}
            <button onClick={user && remove}>remove</button>
        </div>
    )
}
