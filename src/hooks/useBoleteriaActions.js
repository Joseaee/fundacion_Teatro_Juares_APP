import { useAppDispatch } from "./store";
import { setFilterEvent, changeFilterCategory, removeTicket, addTicket, addSeat, setFactura, addFormaPago, editFormaPago, removeFormaPago, removeFactura, resetCompra } from "../store/boleteria/slice";
import { fetchEvents, fetchTasaBs } from "../store/boleteria/thunks";

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

  const newTicket = (ticket)=>{
    dispatch(addTicket(ticket))
  } 

  const deleteTicket = (ticket)=>{
    dispatch(removeTicket(ticket))
  }

  const setSeats = ({lote, asientos})=>{
    dispatch(addSeat({lote, asientos}))
  }

  const newFactura = (factura)=>{
    dispatch(setFactura(factura))
  }

  const getTasaBs = async ()=>{
    return await dispatch(fetchTasaBs()).unwrap()
  }

  const newFormaPago = ({id, data})=>{
    dispatch(addFormaPago({id, data}))
  }

  const changeFormaPago = ({id, index, data})=>{
    dispatch(editFormaPago({id, index, data}))
  }

  const deleteFormaPago = ({id, index})=>{
    dispatch(removeFormaPago({id, index}))
  }

  const deleteFactura = (index)=>{
    dispatch(removeFactura(index))
  }

  const resetCompraBoletos = ()=>{
    dispatch(resetCompra())
  }

  return {filterCategory, filterEvent, fetchingEvents, newTicket, deleteTicket, setSeats, getTasaBs, newFactura, newFormaPago, changeFormaPago, deleteFormaPago, deleteFactura, resetCompraBoletos}
};
