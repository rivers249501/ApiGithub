
import './Header.styles.css'
import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react'

const Header = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const handlerMenu = ()=>{
        setShow(!show)
    }
    return (
        <div className="flex-col">
            <div className="flex  bg-pink text-center justify-between"> 
                <button onClick={handlerMenu}><i class="text-xl ml-4 fa fa-bars"></i></button>
                <h1 class="text-xl text-black font-bold uppercase text-center bg-red p-8 self-center">GitHub</h1>
                <h2> </h2>
            </div>
            <div className="">
                
                <div className= {show ? "menuNav" : "notVisible"}>
                            <ul className="flex justify-between w-full bg-blue">
                                <li onClick={()=> navigate('/')}>
                                    <a class="fa fa-home"/><span>Home</span>
                                </li>
                                <li onClick={()=> navigate(- 1)}>
                                    <a href="#" class="previous round">&#8249;</a><span>Go Back</span>
                                </li>
                                <li onClick={()=> navigate(+ 1)}>
                                    <span className="onlySpan">Next</span><a href="#" class="next round">&#8250;</a>   
                                </li>
                            </ul>
                </div>
            </div>
        </div>
    )
}

export default Header

