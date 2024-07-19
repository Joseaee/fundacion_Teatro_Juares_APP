import {configureStore} from '@reduxjs/toolkit'
import boleteriaReducer from './boleteria/slice';
<<<<<<< HEAD
import noticiasReducer from './noticias/slice';
import authReducer from './auth/slice.js'
=======
import useReducer from './user/slice'
import authReducer from './auth/slice.js'
import profileSlice  from './profile/slice.js';
>>>>>>> c48d7b5b4c49b4ef7be0054c1a0a4575b5b58909

export const store = configureStore({
    reducer: {
        boleteria: boleteriaReducer,
        auth: authReducer,
<<<<<<< HEAD
        noticias: noticiasReducer,
=======
        user: useReducer,
        profile: profileSlice
>>>>>>> c48d7b5b4c49b4ef7be0054c1a0a4575b5b58909
    },
});

