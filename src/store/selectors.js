import { createSelector } from 'reselect';

export const getEvents = (state) => state.boleteria.eventos;
export const getFilters = (state, {slice, filter})=> state[slice].filtros[filter]
const getEventId = (_, props) => props.eventId;
const getTickets = (state)=> state.boleteria.boletos
const getFuncion = (_, props) => props.idFuncion
const getFacturas = (state)=> state.boleteria.facturas
const facturaIndex = (_, props) => props.indexFactura

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
  [getTickets, getFuncion],
  (tickets, funcion)=>{
    let total = 0
    const boletos = tickets.filter(item => item.idFuncion == funcion)
    for(const item of boletos){
      if(item.cantidad > 1){
        total += parseFloat(item.precio) * item.cantidad
      }else{
        total += parseFloat(item.precio)
      }
    }
    return total.toFixed(2)
  }
)

export const getTotalTickets = createSelector(
  [getTickets],
  (tickets)=>{
    let total = 0
    const mappedTickets = tickets.map(item=>{
      total += item.cantidad
    })

    return total
  }
)

export const getTicketsFunction = createSelector(
  [getTickets, getFuncion],
  (tickets, funcion)=>{

    return tickets.filter(item=> item.idFuncion === funcion)
  }
)

export const getLotes = createSelector(
  [getTickets, getFuncion],
  (tickets, funcion)=>{
    const mappedTickets = tickets.filter(item=> item.idFuncion == funcion).map(item=>(
      {idLote: item.id}
    ))

    return mappedTickets
  }
)

export const getFactura = createSelector(
  [getFacturas, getFuncion],
  (facturas, funcion)=>{
    return facturas.find(item=> item.idFuncion == funcion)
  }
)

export const findIndexFactura = createSelector(
  [getFacturas, getFuncion],
  (facturas, funcion)=>{
    return facturas.findIndex(item=> item.idFuncion == funcion)
  }
)

export const getFaltantePagar = createSelector(
  [getFacturas, facturaIndex],
  (facturas, index)=>{
    const factura = facturas[index]
    const totalPagar = (factura.tasaBs) ? factura.tasaBs * parseFloat(factura.montoTotal) : 0
    
    let pagado = 0
    factura.formasPago.map(i=>{
      const monto = (i.montoBs) ? i.montoBs : 0
      pagado += parseFloat(monto)
    })

    return totalPagar - pagado
  }
)


export const getIsLogged = (state)=> state.auth.isAuthenticated
