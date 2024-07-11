import { useAppDispatch } from "./store";
import { setFilterEvent, changeFilterCategory } from "../store/boleteria/slice";

export const useBoleteriaActions = () => {
  const dispatch = useAppDispatch();

  const filterCategory = (category) => {
    dispatch(changeFilterCategory(category));
  };

  const filterEvent = (name) => {
    dispatch(setFilterEvent(name));
  };

  return {filterCategory, filterEvent}
};
