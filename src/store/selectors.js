import { createSelector } from 'reselect';

const getEvents = (state) => state.boleteria.eventos;
const getEventId = (_, props) => props.eventId;

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
