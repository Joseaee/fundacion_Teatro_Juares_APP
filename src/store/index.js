import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';

export const store = configureStore({
    reducer: {
        boleteria: boleteriaReducer
    }
});