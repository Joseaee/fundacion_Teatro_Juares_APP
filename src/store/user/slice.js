import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cedula: '',
    nombres: '',
    apellidos: '',
    correo:  '',
    contraseña: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { cedula, nombres, apellidos, correo } = action.payload;

            state.cedula = cedula.trimEnd().trimRight();
            state.nombres = nombres.trimEnd().trimRight();
            state.apellidos = apellidos.trimEnd().trimRight();
            state.correo = correo.trimEnd().trimRight();
        },
        addPasswod: (state, action) =>{
            state.contraseña = action.payload;
        },
        addCorreo: (state, action) =>{
            state.correo = action.payload;
        },
    }

})

export default userSlice.reducer

export const { addUser, addPasswod, addCorreo } = userSlice.actions  