import { createSlice } from "@reduxjs/toolkit";
import { consulterUser } from "./thunks"

const initialState = {loading: false, cedula:'', nombre: '', apellido:'', correo:'', telefono:'', password: '', img: 'assets/img/usuario.jpg', compras: null}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
            setProfile: (state, action) => {
                const {cedula, nombre, apellido, correo, telefono, imgUser} = action.payload
                state.cedula = cedula;
                state.nombre = nombre;
                state.apellido = apellido;
                state.correo = correo;
                state.telefono = telefono;
                if (imgUser) {
                    state.img = imgUser;
                }
            }
        },
        extraReducers: (builder)=>{
            builder
          .addCase(consulterUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(consulterUser.fulfilled, (state, action) => {
            state.loading = false;
            const {cedula, nombre, apellido, correo, telefono, imgUser} = action.payload.datosUsuario
                state.cedula = cedula;
                state.nombre = nombre;
                state.apellido = apellido;
                state.correo = correo;
                state.telefono = telefono;
                if (imgUser) {
                    state.img = imgUser;
                }
            if(action.payload.compras[0]) {
                const comprasUser = action.payload.compras.map((item)=>{
                    return {
                        'Boletos': item.cantidad,
                        'Evento': item.nombre,
                        'Funcion': item.fecha,
                        'Horario': `${item.horaInicio} - ${item.horaFinal}`,
                        'Pago': `${item.montoTotal}$`,
                        'Estado': (item.estado == 0) ? 'Por Verificar' : 'Aceptado'

                    }
                })
                state.compras = comprasUser[0]
            }
          })
          .addCase(consulterUser.rejected, (state) => {
            state.loading = false;
          })
          ;
        }
})

export default profileSlice.reducer

export const { setProfile } = profileSlice.actions  