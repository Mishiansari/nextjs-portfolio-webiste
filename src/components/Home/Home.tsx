import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";


export default function Home(){
    return(
        <div className="overflow-hidden">
            <Hero/>
            <About />
            <Skills />
            <Contact/>
            
        </div>
    )
}