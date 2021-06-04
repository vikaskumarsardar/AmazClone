import React from 'react'
import { useStateVale } from './Basket'
import './Product.css'

export default function Product({id,title,price,ratings,img}) {
    const [{basket,user},dispatch]=useStateVale()
    
    function addTo(){
        dispatch({
            type:'Add',
            item:{
                id:id,
                title:title,
                price:price,
                ratings:ratings,
                img:img
            }
        })
        
    }
    
    
    return (
        // <div className='container'>
        <div className='Product'>
            <div className='product_info'>
            <p>{title}</p>
            <small>$</small>
                <strong>{price}</strong>

                <div className="ratings">
                    {
                        Array(ratings).fill().map((io,o)=>{
                            return(
                                <p key={o}>👍</p>
                                )
                            })
                        }
                    </div>
            <h4 >{img}
            </h4>
            <button onClick={user && addTo}>add to basket</button>
        </div>

        
        </div>
        
        // </div>
    )
}
