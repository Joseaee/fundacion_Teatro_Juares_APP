import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';
import useReducer from './user/slice'
import authReducer from './auth/slice.js'
import profileSlice  from './profile/slice.js';
import noticiasReducer from './noticias/slice';

export const store = configureStore({
    reducer: {
        boleteria: boleteriaReducer,
        auth: authReducer,
        user: useReducer,
        profile: profileSlice,
        noticias: noticiasReducer,
    },
});

