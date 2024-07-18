import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noticias: [
        {
            nro: '1',
            title: 'Las mejores graduaciones',
            text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.', 
            banner: require("../../../assets/img/Servicios/conciertos.jpg"),
        },
        {
            nro: '2',
            title: 'Conciertos geniales',
            text: 'Si buscas un espacio donde tu voz se escuche armoniosa y perfecta nuestro escenario es perfecto para ti, el mismo cuenta con una estructura basada en los Teatros Italianos que tienen la característica de proyectar e intensificar el sonido, además nuestras instalaciones cuenta con un excelente equipo de sonido y los especialistas capacitados para su manejo.', 
            banner: require("../../../assets/img/Servicios/conciertos.jpg"),
        },
        {
            nro: '3',
            title: 'Obras de teatro',
            text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.', 
            banner: require("../../../assets/img/Servicios/obras.jpg"),
        },
        {
            nro: '4',
            title: 'Concursos de belleza',
            text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.', 
            banner: require("../../../assets/img/Servicios/belleza.jpg"),
        },
    ],
    filtros: {
        title: ''
    }
}

export const noticiaSlice = createSlice({
    name: 'noticias',
    initialState,
    reducers: {
        setFilterNoticia: (state, action) => {
            const title = action.payload

            return {
                ...state, filtros: {
                    ...state.filtros,
                    title
                }
            }
        }
    }
})

export default noticiaSlice.reducer

export const { setFilterNoticia } = noticiaSlice.actions  