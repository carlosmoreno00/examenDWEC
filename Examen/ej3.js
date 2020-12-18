function ejercicio3(arr) {
    tamano = arr.length;
    if (tamano > 0) {
        var resultado =+ arr.pop();
        resultado *= ejercicio3(arr);
    }
    return resultado;
}