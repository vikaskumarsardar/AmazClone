import React from 'react'
import {useStateVale} from './Basket'
import CheckoutPro from './CheckoutPro'

export default function Checkout() {
    const [{basket},dispatch]=useStateVale()
    // console.log(basket);
    return (
        <div className='Checkout'>
            {basket.length===0?(
<div><h3>empty</h3></div>
            ):(
<div >
    <h3>your shopping are</h3>
    {basket.map((br,p)=>{
        return(
<CheckoutPro
        title={br.title}
        id={br.id}
        img={br.img}
        price={br.price}
        ratings={br.ratings}
 key={p}/>
        )
    })}
</div>
            )}
        </div>
    )
}
