import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from '../assets/imagens/bg.png'

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {bg} titulo = "Novo Horizonte" paragrafo="conheça os lugares mais visitados do Mundo!" rota="#" botao="Saiba mais" />
                    
                    <div>

                    </div>
                </div>
                    <Footer />
            </div>


        </>
    )
}

export default Home;