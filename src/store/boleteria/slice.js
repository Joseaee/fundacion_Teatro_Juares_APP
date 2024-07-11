import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventos: [
        {
            id: '1',
            nombre: 'Eventito',
            categoria: 'Obra Teatral',
            poster: require('../../../assets/img/Servicios/obras.jpg'),
            funciones: [
                {
                    id: '1',
                    horaInicio: '8:00 AM',
                    horaFinal: '10:00 AM',
                    fecha: '2024-05-16'
                },
                {
                    id: '2',
                    horaInicio: '10:00 AM',
                    horaFinal: '11:00 AM',
                    fecha: '2024-05-17'
                },
                {
                    id: '3',
                    horaInicio: '8:00 AM',
                    horaFinal: '9:00 AM',
                    fecha: '2024-05-18'
                }
            ]
        },
        {
            id: '2',
            nombre: 'Eventito 2',
            categoria: 'Concierto',
            poster: require('../../../assets/img/Servicios/conciertos.jpg'),
            funciones: [
                {
                    id: '1',
                    horaInicio: '8:00 AM',
                    horaFinal: '10:00 AM',
                    fecha: '2024-05-16'
                },
                {
                    id: '2',
                    horaInicio: '10:00 AM',
                    horaFinal: '11:00 AM',
                    fecha: '2024-05-17'
                },
                {
                    id: '3',
                    horaInicio: '8:00 AM',
                    horaFinal: '9:00 AM',
                    fecha: '2024-05-18'
                }
            ]
        },
        {
            id: '3',
            nombre: 'Evento 3',
            categoria: 'Concierto',
            poster: require('../../../assets/img/Servicios/belleza.jpg'),
            funciones: [
                {
                    id: '1',
                    horaInicio: '8:00 AM',
                    horaFinal: '10:00 AM',
                    fecha: '2024-05-16'
                },
                {
                    id: '2',
                    horaInicio: '10:00 AM',
                    horaFinal: '11:00 AM',
                    fecha: '2024-05-17'
                },
                {
                    id: '3',
                    horaInicio: '8:00 AM',
                    horaFinal: '9:00 AM',
                    fecha: '2024-05-18'
                }
            ]
        }
    ],
    filtros: {
        categoria: 'all',
        nombre: ''
    },
    boletos: []
}

export const boleteriaSlice = createSlice({
    name: 'boleteria',
    initialState,
    reducers: {
        changeFilterCategory: (state, action) => {
            const categoria = action.payload

            return {
                ...state, filtros: {
                    ...state.filtros,
                    categoria
                }
            }
        },
        setFilterEvent: (state, action) => {
            const nombre = action.payload

            return {
                ...state, filtros: {
                    ...state.filtros,
                    nombre
                }
            }
        },
        addTicket: (state, action) => {
            const ticket = action.payload
            const ticketInCart = state.boletos.find((item) => item.id === ticket.id)

            if (ticketInCart) {
                ticketInCart.cantidad += 1
            } else {
                state.boletos.push({ ...ticket, cantidad: 1 })
            }
        },
        removeTicket: (state, action)=>{
            const index = state.boletos.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                if(state.boletos[index].cantidad > 1){
                    state.boletos[index].cantidad -= 1
                }else{
                    state.boletos.splice(index, 1);
                }
            }
        }
    }
})

export default boleteriaSlice.reducer

export const { changeFilterCategory, setFilterEvent, addTicket, removeTicket } = boleteriaSlice.actions  