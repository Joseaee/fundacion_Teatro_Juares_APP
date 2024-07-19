import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserAuthenticated, setLoading} from './slice.js';
import axios from 'axios';
import { API_URL } from "../../config/constants";
import { jwtDecode } from 'jwt-decode';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ login }, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true))
    try {
        const response = await axios({
            method: 'POST',
            url: API_URL,
            responseType: 'json',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
              url: 'app',
              type: 'auth'
            },
            data: {
              login
            }
          })
        
        const token = response.data.data.token

      // Guarda el token en AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      
      await AsyncStorage.setItem('expToken', jwtDecode(token).exp.toString());

      // Actualiza el estado global
      thunkAPI.dispatch(setUserAuthenticated({ isAuthenticated: true}));
      
      return token;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false))
    }
  }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            await AsyncStorage.removeItem('userToken');
            thunkAPI.dispatch(setUserAuthenticated({ isAuthenticated: false}));
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
