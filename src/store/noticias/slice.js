import { createSlice } from "@reduxjs/toolkit";
import { fetchNoticias } from "./thunks";

const initialState = {
    noticias: {
        relevantes: [],
        otras: []
    },
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

            state.filtros.title = title
        }
    },
    extraReducers: (builder)=>{
        builder
      .addCase(fetchNoticias.fulfilled, (state, action) => {
        const {relevantes, otras} = action.payload
        state.noticias.relevantes = relevantes;
        state.noticias.otras = otras
      })
      ;
    }
})

export default noticiaSlice.reducer

export const { setFilterNoticia } = noticiaSlice.actions  