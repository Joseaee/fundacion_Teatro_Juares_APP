import { createSlice } from "@reduxjs/toolkit";

const initialState = {isAuthenticated: false}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAuthenticated: (state, action) => {
            const {isAuthenticated} = action.payload
            state.isAuthenticated = isAuthenticated;
        },
      },
})

export default authSlice.reducer

export const { setUserAuthenticated } = authSlice.actions  