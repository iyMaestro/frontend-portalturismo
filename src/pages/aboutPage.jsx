import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/aboutHero";
import bg from "../assets/imagens/bg.png"
const About = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen"
         style={{ backgroundImage: `url(${bg})` }}>
                <Navbar/>
                <div>
                          
                    <div>
                    <AboutHero/>  
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default About;