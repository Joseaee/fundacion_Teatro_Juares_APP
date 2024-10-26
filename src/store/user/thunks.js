import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../auth/slice.js';
import axios from 'axios';
import { API_URL } from "../../config/constants";

export const activeChangePassword = createAsyncThunk(
  'user/activeChangePassword',
  async (_, thunkAPI) => {

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
              type: 'forgetPassword'
            },
            data: {
              solicitudEnviada: true
            }
          })

          return response.data.data.solicitudEnviada
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } 
  }
);

export const confirmEmail = createAsyncThunk(
  'user/confirmEmail',
  async (email, thunkAPI) => {
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
              type: 'forgetPassword'
            },
            data: {
              recoverEmail: email
            }
          })
          
          return response.data
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false))
    };
  }
);
