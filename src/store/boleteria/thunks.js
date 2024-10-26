import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from "../../config/constants";
import { useStorage } from '../../hooks/localStorage';

export const fetchEvents = createAsyncThunk(
    'boleteria/fetchEvents',
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
              type: 'eventos'
            }
          })
        return response.data.data
    }
)

export const fetchTasaBs = createAsyncThunk(
  'boleteria/fetchTasaBs',
  async ()=>{
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
              type: 'pagos',
              get: 'tasaBs'
            }
          })
      return response.data.data.tasaBs
  }
)