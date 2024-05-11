import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventos: [
        {
          id: '1',
          nombre: 'Eventito',
          categoria: 'Obra Teatral',
          poster: require('../../../assets/img/Servicios/obras.jpg')
        },
        {
          id: '2',
          nombre: 'Eventito 2',
          categoria: 'Concierto',
          poster: require('../../../assets/img/Servicios/conciertos.jpg')
        },
        {
          id: '3',
          nombre: 'Evento 3',
          categoria: 'Concierto',
          poster: require('../../../assets/img/Servicios/belleza.jpg')
        }
      ],
      filtros: {
        categoria: 'all',
        nombre: ''
      }
}

export const boleteriaSlice = createSlice({
    name: 'boleteria',
    initialState,
    reducers: {
        changeFilterCategory: (state, action)=>{
            const categoria = action.payload

            return {...state, filtros: {
                ...state.filtros,
                categoria
            }}
        },
        setFilterEvent: (state, action)=>{
          const nombre = action.payload

          return {...state, filtros: {
            ...state.filtros,
            nombre
          }}
        }
    }
})

export default boleteriaSlice.reducer

export const {changeFilterCategory, setFilterEvent} = boleteriaSlice.actions  