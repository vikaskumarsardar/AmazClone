import React from 'react'
import Product from './product' 
import './home.css'
import Logo from './sviet.jpg'
export default function Home() {
    return (
        <div className='home'>
            <img src={Logo} alt="" className='Home_img'/>
            
            <div className="homer">

                <Product  id={10} title='somethin' price={100} ratings={5} img='le' />
                <Product  id={20} title='nothing' price={36767675} ratings={3} img='naaananan' />
            </div>
            <div className="homer">
                <Product  id={30} title='somethin is happening' price={367} ratings={1} img='maraao' />
                <Product  id={40} title='nothing is happening' price={3100} ratings={3} img='kuch bhi ' />
                <Product  id={50} title='thanks' price={345} ratings={2} img='munh me' />
        
            </div>
            <div className="homer">
                <Product  id={60} title='for what ' price={90909} ratings={5} img='kahin bho' />
            </div>

        </div>
    )
}
