import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg1 from '../assets/imagens/bg1.png'
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div className=" font-semibold">
                    <Hero Background = {bg1} titulo = "Portal de Serviços" paragrafo="conheça diversos lugares do mundo!" rota="#" botao="Conhecer Agora" />
                    <div>
                        <Carousel/>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default ServicePage;