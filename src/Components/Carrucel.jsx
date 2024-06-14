import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carrucel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    //ESTA ES UNA IDEA PARA TRAER NOMBRES E IMAGENES DE CANCHAS // ESTO SE DEBE CREAR EN BACKEND
    const nameCancha = ["Miraflores", "Pasto", "Monaco"];

    const imageCancha = ['https://th.bing.com/th/id/R.089b16aebcfd18af6ff9c725318b65e0?rik=Ug%2fvoYlEElak8A&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.c223eb1d12de592ea513a285d9294320?rik=l7Ot2%2fASfaIyMw&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2fsizes%2f1200x675%2f1491127204-95410191gettyimages-488144002.jpg&ehk=dettdl4rxdcGYrLDeu4AYIjFzmztEQ2lT3bwX%2bcMI8U%3d&risl=&pid=ImgRaw&r=0',
        'https://www.parqueygrama.com/wp-content/uploads/2018/02/canchas-de-futbol-sinteticas-grama-de-futbol.jpg']

    //SE TRAEN LAS IMAGENES DE LA CANCHA Y SU NOMBRE
    const images = [
        { id: 1, title: nameCancha[0], url: imageCancha[0] },
        { id: 2, title: nameCancha[1], url: imageCancha[1] },
        { id: 3, title: nameCancha[2], url: imageCancha[2] },
    ];

    return (
        <div>
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <h3 className='title-image'>{image.title}</h3>
                        <img className="img-dimensions" src={image.url} alt={image.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
