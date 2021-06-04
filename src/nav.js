import React from 'react'
import {NavLink} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Nav.css'
import {useStateVale} from './Basket'
import { auth } from './firebase'

export default function Nav() {
    const [{basket,user}]=useStateVale();
    

    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="Header">
            <NavLink className='NavLink' to='/'>
                <div className="logo">
                    <h2>swapan </h2>
                </div>    
            </NavLink>
<div className="search" >
    <input type="text" spellCheck="false" className='earch'/>
    <SearchIcon className='searchIcon'/>
</div>


    <div className="header_nav">
        <NavLink to ={user? '/': '/login'} className='NavLink'>
            <div onClick={login} className="header_option">

                <span>{user?`hello ${user.email}`:null} </span>
                <span>{user?'signOut':'Login'}</span>
            </div>
        </NavLink>
        <NavLink to ='/returns' className='NavLink'>
            <div className="header_option">

                <span>Returns</span>
                <span>& orders</span>
            </div>
        </NavLink>
        <NavLink to ='/' className='NavLink'>
            <div className="header_option">

                <span>Your</span>
                <span>Primes</span>
            </div>
        </NavLink>
        <NavLink to ='/Check' className='NavLink'>
            <div className="header_option">

                <span>🎁</span>
                <span>{basket.length}</span>
            </div>
        </NavLink>
    </div>

        </nav>
    )
}
