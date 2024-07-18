import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cedula: '',
    nombre: '',
    apellido: '',
    correo:  '',
    contraseña: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { cedula, nombres, apellidos, correo } = action.payload;

            state.cedula = cedula.replace(/\s+/g, ' ').trim();
            state.nombre = nombres.replace(/\s+/g, ' ').trim();
            state.apellido = apellidos.replace(/\s+/g, ' ').trim();
            state.correo = correo.replace(/\s+/g, ' ').trim();
        },
        addPasswod: (state, action) =>{
            state.contraseña = action.payload;
        },
        addCorreo: (state, action) =>{
            state.correo = action.payload;
        },
        resetState: (state) =>{
            return initialState;
        },
    }

})

export default userSlice.reducer

export const { addUser, addPasswod, addCorreo, resetState } = userSlice.actions  