"use client"
import { useState } from "react";
import MobileNav from "./MobileNav";
import NavBar from "./Nav";

export default function ResponsiveNav(){
    const [showNav, setShowNav]= useState(false)

    const showNavHundler=()=>setShowNav(true)
    const closeNavHandler = () => setShowNav(false)
    return(
        <div>
            <NavBar openNav={showNavHundler} />
            <MobileNav  showNav={showNav} closeNav={closeNavHandler}/>
        </div>
    )
}