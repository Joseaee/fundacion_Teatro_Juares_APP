import { useAppDispatch } from "./store";
import { setUserAuthenticated } from "../store/auth/slice";
import { loginUser, logoutUser } from "../store/auth/thunks";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
    
  const authenticated = (isAuthenticated)=> {
    dispatch(setUserAuthenticated({isAuthenticated}));
  }
  
  const login = async ({data})=>{
    return await dispatch(loginUser({login: data})).unwrap()
  }

  const logout = async ()=>{
    await dispatch(logoutUser()).unwrap()
  }

  return {authenticated, login, logout}
};
