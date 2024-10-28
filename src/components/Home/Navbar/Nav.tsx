"use client"
import { navLinks } from "@/constant/constant"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiBars3BottomRight } from "react-icons/hi2"


///deifne props type
type props ={
    openNav:()=>void
}



export default function NavBar({openNav}:props){
    const[navBg,setNavBg]= useState(false)
    
    useEffect(()=>{
        const handler=()=>{
            if(window.scrollY>=90 ){
                setNavBg(true);
     
        }if(window.scrollY < 90){
            setNavBg(false)
        }
    };
    window.addEventListener("scroll",handler)
    return()=>{
        window.removeEventListener("scroll",handler)
    }
       
    }, []);
    return(
        <div className={`fixed ${navBg ?'bg-[#240b39]':'fixed'} h-[12vh] z-[10] w-full transition-all duration-200`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
            {/* ........logo..... */}
            <Image 
            src="/Images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="ml-[-1.5rem] sm:ml-0"
            />
            {/* .....Nav links.... */}

            <div className="flex items-center space-x-10">
                <div className="hidden lg:flex items-center space-x-3">
                
                {navLinks.map((navLinks)=>{
                    return(<Link key={navLinks.id} href={navLinks.url}>
                        <p className="nav_link">{navLinks.label}</p>
                    </Link>
                    )
                })}
                </div>
                {/* ........Buttons.... */}

                <div className="flex items-center space-x-4">
                    <button  className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
                    hover:bg-gray-200 transition-all duration-200 rounded-lg">
                        Hire Me
                    </button>
                    {/* .......Burger...... */}
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />

                </div>

            </div>
            
            </div>
            </div>
            )}