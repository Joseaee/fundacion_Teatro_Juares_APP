import { createSelector } from 'reselect';

const getEvents = (state) => state.boleteria.eventos;
const getEventId = (_, props) => props.eventId;
const getTickets = (state)=> state.boleteria.boletos

export const getEventById = createSelector(
  [getEvents, getEventId],
  (events, eventId) => {
    return events.find((event) => event.id === eventId);
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
