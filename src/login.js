import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase'
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    
    const login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        }).catch((e)=>alert(e.message))
        
    }
    
    const signUp=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((some)=>{
            history.push('./')
        }).catch((e)=>alert(e.message))
    }
    return (
        <div className="yui">
            <form  >

                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name='Email' placeholder="Email"/>
                <input type="password" name='Password' onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password"/>
                <button type="submit" onClick={login}>Login</button>
                <button type="submit" onClick={signUp}>SignUp</button>

            </form>
            
        
        
        
        
        
        </div>
    )
}
