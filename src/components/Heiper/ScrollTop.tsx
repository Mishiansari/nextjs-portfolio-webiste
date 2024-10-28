"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop(){
    const [isVisible,setisVisible]=useState(false)
    useEffect(()=>{
   const toggleVisibility=()=>{
    if(window.scrollY > 300){
        setisVisible(true)
    } else{
        setisVisible(false)
    }

   };

   window.addEventListener('scroll',toggleVisibility);
   return()=>{
    window.removeEventListener('scroll',toggleVisibility);

   }
    },[])

    const ScrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };
    return(
        <div className="fixed bottom-4 animate-pulse right-4">
            {isVisible && (
                <button onClick={ScrollTop} className="bg-blue-900 text-white rounded-full w-12 h-12 
                flex items-center focus:outline-none">
                    <FaArrowUp/>
                </button>
            )}
          </div>
    )
}
