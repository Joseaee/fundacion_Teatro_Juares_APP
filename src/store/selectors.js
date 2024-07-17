import { createSelector } from 'reselect';

export const getEvents = (state) => state.boleteria.eventos;
export const getFilters = (state, {slice, filter})=> state[slice].filtros[filter]
const getEventId = (_, props) => props.eventId;
const getTickets = (state)=> state.boleteria.boletos

export const getEventById = createSelector(
  [getEvents, getEventId],
  (events, eventId) => {
    return events.find((event) => event.nroEvento === eventId);
  }
);

export const getEventRecent = createSelector(
  [getEvents],
  (events) => {
    return events.reduce((mostRecent, currentEvent) => {
      return new Date(`${currentEvent.fechaEstreno} ${currentEvent.horaInicio}`) > new Date(`${mostRecent.fechaEstreno} ${mostRecent.horaInicio}`) ? currentEvent : mostRecent;
    }, events[0]);
  }
);

export const getEventFunctios = createSelector(
    [getEvents, getEventId],
    (events, eventId) => {
        const event = events.find((event) => event.id === eventId);
        return event.funciones
  }
)

export const getTotalPrize = createSelector(
  [getTickets],
  (tickets)=>{
    let total = 0
    for(const item of tickets){
      if(item.cantidad > 1){
        total += parseFloat(item.precio) * item.cantidad
      }else{
        total += parseFloat(item.precio)
      }
    }
    return total.toFixed(2)
  }
)

export const getIsLogged = (state)=> state.auth.isAuthenticated
