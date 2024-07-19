import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';
import useReducer from './user/slice'
import authReducer from './auth/slice.js'
import profileSlice  from './profile/slice.js';

export const store = configureStore({
    reducer: {
        boleteria: boleteriaReducer,
        auth: authReducer,
        user: useReducer,
        profile: profileSlice
    },
});