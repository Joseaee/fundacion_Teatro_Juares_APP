import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, fetchTasaBs } from "./thunks";

const initialState = {
    eventos: [],
    categorias: [],
    filtros: {
        categoria: 'all',
        nombre: ''
    },
    boletos: [],
    facturas: []
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
        },
        addSeat : (state, action)=>{
            const {lote, asientos} = action.payload
            const index = state.boletos.findIndex(item => item.id === lote);
            if(index !== -1){
                state.boletos[index].asientos = asientos
            }
        },
        setFactura: (state, action)=> {
            const factura = action.payload
            const index = state.facturas.findIndex((item) => item.idFuncion === factura.idFuncion)

            if (index !== -1) {
                const formasPago = (state.facturas[index].formasPago.length > 0) ? state.facturas[index].formasPago : []
                state.facturas[index] = {
                    ...factura,
                    formasPago: [...formasPago, ...factura.formasPago]
                }
                
            }else{
                state.facturas.push(factura)
            }
           
        },
        removeFactura: (state, action)=>{
            const index = action.payload
            state.facturas.splice(index, 1);

        },
        addFormaPago: (state, action)=> {
            const {id, data} = action.payload

            state.facturas[id].formasPago.push(data)
        },
        editFormaPago: (state, action)=> {
            const {id, index, data} = action.payload
            state.facturas[id].formasPago[index] = data
        },
        removeFormaPago: (state, action)=> {
            const {id, index} = action.payload
            state.facturas[id].formasPago.splice(index, 1)
        },
        resetCompra: (state) => {            
            return {
                ...state, 
                facturas: [],
                boletos: []
            }
        }
        
    },
    extraReducers: (builder)=>{
        builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.eventos = action.payload;
      })
      .addCase(fetchTasaBs.fulfilled, (state, action) => {

        for (let index = 0; index < state.facturas.length; index++) {
            state.facturas[index] .tasaBs = action.payload;
        }
        
      })
      ;
    }
})

export default boleteriaSlice.reducer

export const { changeFilterCategory, setFilterEvent, addTicket, removeTicket, addSeat, setFactura, addFormaPago, removeFormaPago, editFormaPago, removeFactura, resetCompra } = boleteriaSlice.actions  