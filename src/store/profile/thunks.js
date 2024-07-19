import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from '../auth/slice.js';
import { API_URL } from "../../config/constants";
import { useStorage } from '../../hooks/localStorage';

export const consulterUser = createAsyncThunk(
    'profile/consulterUser',
    async () => {
        const {getItem} = useStorage()
        const token = await getItem('userToken')
        const response = await axios({
            method: 'GET',
            url: API_URL,
            responseType: 'json',
            headers: {
              Authorization: `Bearer ${token}`
            },
            params: {
              url: 'app',
              type: 'perfil'
            }
          })
          
        return response.data.data
    }
)

export const fetchBoletos = createAsyncThunk(
  'boleteria/fetchBoletos',
  async (idFuncion) => {
    const {getItem} = useStorage()
    const token = await getItem('userToken')
    const response = await axios({
        method: 'GET',
        url: API_URL,
        responseType: 'json',
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          url: 'app',
          type: 'boletos',
          funcion: idFuncion
        }
      })
    return response.data.data
})

export const editPerfil = createAsyncThunk(
  'boleteria/editPerfil',
  async (edit, thunkAPI) => {
    const {getItem} = useStorage()
    const token = await getItem('userToken')
    thunkAPI.dispatch(setLoading(true))

    try {
      const response = await axios({
          method: 'POST',
          url: API_URL,
          responseType: 'json',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
              url: 'app',
              type: 'perfil'
          },
          data: {
            editProfile: edit,
          }
        })

        return response.data
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data);
    } finally {

      thunkAPI.dispatch(setLoading(false))
    }
});
