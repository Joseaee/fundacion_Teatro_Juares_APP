export const useFormatDate = () => {
  const getDateFormated = ({
    value,
    format = "datetime",
    locale = "en-GB",
    options = {},
  }) => {
    const time = new Date(value);
    let settings;

    if (isNaN(time.getTime())) {
      throw new Error("El valor ingresado no es una fecha valida");
      return;
    }

    if (format === "date") {
      settings = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        ...options,
      };
    } else if (format === "time") {
      settings = {
        hourCycle: "h12",
        hour: "2-digit",
        minute: "2-digit",
        ...options,
      };
    } else {
      settings = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hourCycle: "h12",
        hour: "2-digit",
        minute: "2-digit",
        ...options,
      };
    }

    return time.toLocaleString(locale, settings);
  };

  const getTimestamp = (fecha)=>{
      const now = new Date();
      const past = new Date(fecha)
      const diferencia = now - past;
  
      const segundos = Math.floor(diferencia / 1000)
      const minutos = Math.floor(segundos / 60)
      const horas = Math.floor(minutos / 60)
      const dias = Math.floor(horas / 24)
  
      if (dias > 0) {
        const text = (dias > 1) ? 'dias' : 'dia'
        return `Hace ${dias} ${text}`
      }
  
      if (horas > 0) {
        const text = (horas > 1) ? 'horas' : 'hora'
        return `Hace ${horas} ${text}`
      }
  
      if (minutos > 0) {
        return `Hace ${minutos} min`
      }
  
      if (segundos > 0) {
        return `Hace ${segundos} seg`
      }
  
      return `Ahora`
  
  }

  const getNowDate = ()=> {
    const ahora = new Date();
  
    const year = ahora.getFullYear();
    const month = String(ahora.getMonth() + 1).padStart(2, '0');
    const day = String(ahora.getDate()).padStart(2, '0');
  
    const hours = String(ahora.getHours()).padStart(2, '0');
    const minutes = String(ahora.getMinutes()).padStart(2, '0');
  
    const fecha = `${year}-${month}-${day}`;
    const hora = `${hours}:${minutes}`;
  
    return { fecha, hora };
  }

  return { getDateFormated, getTimestamp, getNowDate };
};
