import React from "react";
import CardService from "./cardService";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'; // 👈 Importa autoplay
import 'swiper/css'

import china from "../assets/imagens/china.jpg"
import eiffel from "../assets/imagens/eiffel.jpg"
import sidney from "../assets/imagens/sidney.jpg"
import mahal from "../assets/imagens/mahal.jpg"
import liberdade from "../assets/imagens/liberdade.jpg"
import gize from "../assets/imagens/gize.jpg"

const tourist_places = [
    {Image: china, title: "A muralha da China", description: "Um dos ícones mais reconhecidos do mundo."},
    {Image: eiffel, title: " A torre Eiffel", description: "Um símbolo de Paris e da França."},
    {Image: sidney, title: "A Ópera de Sydney", description: "Um marco arquitetônico na Austrália."},
    {Image: mahal, title: "uma das 7 maravilhas do mundo", description: "Um famoso mausoléu na Índia."},
    {Image: liberdade, title: " A torre da Liberdade", description: " Um símbolo de liberdade nos Estados Unidos."},
    {Image: gize, title: "As pirâmides de Gizé", description: "Maravilhas antigas do Egito."},
]

const Carousel = () =>{

    return (
        <div className="relative z-10 w-full bg-orange-500 mt-[-128px]">
            <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                Os lugares mais visitados do mundo!
            </h1>
            <Swiper
                modules={[Autoplay]} // 👈 Habilita o módulo
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {tourist_places.map((place, index) => (
                    <SwiperSlide key={index}>
                        <CardService
                            img={place.Image}
                            alt={place.description}
                            titulo={place.title}
                            descricao={place.description}
                            link="#"
                            botao="Saiba Mais"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
 
export default Carousel;