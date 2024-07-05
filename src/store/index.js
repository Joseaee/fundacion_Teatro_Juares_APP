import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';
import useReducer from './user/slice'

export const store = configureStore({
    reducer: {
        user: useReducer,
        boleteria: boleteriaReducer,
    }
});