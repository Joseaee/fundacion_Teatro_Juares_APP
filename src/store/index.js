import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';
import authReducer from './auth/slice.js'
import profileSlice  from './user/slice.js';


export const store = configureStore({
    reducer: {
        boleteria: boleteriaReducer,
        auth: authReducer,
        profile: profileSlice
    },
});