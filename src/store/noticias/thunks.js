import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from "../../config/constants";
import { useStorage } from '../../hooks/localStorage';

export const fetchNoticias = createAsyncThunk(
    'boleteria/fetchNoticias',
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
              type: 'noticias'
            }
          })
          console.log(response.data)
        return response.data.data
    }
)