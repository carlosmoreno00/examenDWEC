function ejercicio2(fecha, fechaInicio, fechaFin) {
    var fechasFinales = [];
    var fechaIni = parseFechas(fechaInicio);
    var fechaFin = parseFechas(fechaFin)
    for (let i = 0; i < fecha.length; i++) {
      let fechaC = parseFechas(fecha[i]);
      if (fechaC >= fechaIni && fechaC <= fechaFin) {
        fechasFinales.push(fecha[i]);
      }
    }
    return fechasFinales;
  }
  
  function parseFechas(fecha) {
    let fechaString = fecha.replaceAll('/', '-');
    let partes = fechaString.split("-");
    let fechaCorrecta = new Date(+partes[2], partes[1] - 1, +partes[0]);
    return fechaCorrecta;
  
  }