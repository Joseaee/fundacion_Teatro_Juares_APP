import { createSlice } from "@reduxjs/toolkit";

const initialState = {isAuthenticated: false, loading: false}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAuthenticated: (state, action) => {
            const {isAuthenticated} = action.payload
            state.isAuthenticated = isAuthenticated;
        },
        setLoading: (state, action) => {
            
            state.loading = action.payload
        }
      },
})

export default authSlice.reducer

export const { setUserAuthenticated, setLoading } = authSlice.actions  