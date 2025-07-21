import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import LoginForm from "../components/loginForm";
import bg from "../assets/imagens/bg.png" 

const LoginPage = () => {
    return(
        <>
            <div className="flex flex-col min-h-screen bg-cover bg-center h-[900px]"
               style={{backgroundImage: `url(${bg})`}}>
                <Navbar/>
                <div className="flex-grow flex items-center justify-center ">
                <LoginForm/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
 
export default LoginPage;