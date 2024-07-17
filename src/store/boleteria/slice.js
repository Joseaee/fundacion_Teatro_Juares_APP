import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, fetchBoletos } from "./thunks";

const initialState = {
    loading: false,
    eventos: [],
    categorias: [],
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
    },
    extraReducers: (builder)=>{
        builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.eventos = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchBoletos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBoletos.fulfilled, (state, action) => {
        state.loading = false;
        state.boletos = action.payload;
      })
      .addCase(fetchBoletos.rejected, (state) => {
        state.loading = false;
      })
      ;
    }
})

export default boleteriaSlice.reducer

export const { changeFilterCategory, setFilterEvent, addTicket, removeTicket } = boleteriaSlice.actions  