import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = ()=>{

    const getItem = async (item)=>{
        try {
            return await AsyncStorage.getItem(item)
        } catch (error) {
            throw new Error(error)
        }
    }

    const setItem = async (key, value)=>{
        try {
            return await AsyncStorage.setItem(key, value)
        } catch (error) {
            throw new Error(error)
        }
    }

    const removeItem = async (item)=>{
        try {
            return await AsyncStorage.removeItem(item)
        } catch (error) {
            throw new Error(error)
        }
    }

    return {getItem, setItem, removeItem}
}