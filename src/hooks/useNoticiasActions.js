import { useAppDispatch } from "./store";
import { setFilterNoticia} from "../store/noticias/slice";
import { fetchNoticias } from "../store/noticias/thunks";

export const useNoticiasActions = () => {
    const dispatch = useAppDispatch();

    const filterNoticia = (name) => {
        dispatch(setFilterNoticia(name));
    };

    const consultarNoticias = async ()=>{
        return await dispatch(fetchNoticias()).unwrap()
    }

    return { filterNoticia, consultarNoticias }
};