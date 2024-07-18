import { useAppDispatch } from "./store";
import { setFilterNoticia} from "../store/noticias/slice";

export const useNoticiasActions = () => {
    const dispatch = useAppDispatch();

    const filterNoticia = (name) => {
        dispatch(setFilterNoticia(name));
    };

    return { filterNoticia }
};