import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';
import noticiasReducer from './noticias/slice';
import authReducer from './auth/slice.js'

export const store = configureStore({
    reducer: {
        boleteria: boleteriaReducer,
        auth: authReducer,
        noticias: noticiasReducer,
    },
});

