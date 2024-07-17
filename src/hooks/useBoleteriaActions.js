import { useAppDispatch } from "./store";
import { setFilterEvent, changeFilterCategory, removeTicket, addTicket } from "../store/boleteria/slice";
import { fetchEvents, fetchBoletos } from "../store/boleteria/thunks";

export const useBoleteriaActions = () => {
  const dispatch = useAppDispatch();

  const filterCategory = (category) => {
    dispatch(changeFilterCategory(category));
  };

  const filterEvent = (name) => {
    dispatch(setFilterEvent(name));
  };

  const fetchingEvents = async ()=>{
    return await dispatch(fetchEvents()).unwrap()
  }

  const fetchingTickets = async (funcion)=>{
    return await dispatch(fetchBoletos(funcion)).unwrap()

  }

  const newTicket = (ticket)=>{
    dispatch(addTicket(ticket))
  } 

  const deleteTicket = ()=>{
    dispatch(removeTicket(ticket))
  }

  return {filterCategory, filterEvent, fetchingEvents, fetchingTickets, newTicket, deleteTicket}
};
