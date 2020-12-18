function ejercicio4(filas, columnas, color, objeto) {
    var objeto = document.getElementById(objeto)[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < filas; i++) {
        var hilera = document.createElement("tr");    
        for (var j = 0; j < columnas; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("Examen");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    objeto.appendChild(tabla);
    for (let i = 0; i < fila; i++) {
        if (i % 2 != 0){
            tabla += "<tr style=\"background-color:" + color;
        }
        for (let j = 0; j < columnas; j++) {
            tabla += "<td></td>"
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    return tabla;
    guardarTabla();
}

function borrar(e) {
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            textoCelda = "";
        }
    }
}

function guardarTabla() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);
            var tr = document.createElement("tr");
            var tdSubject = document.createElement("td");
            var tdSender = document.createElement("td");
            var subject = document.createTextNode("From: " + datos.Sender + " | |");
            tdSender.appendChild(sender);
            tdSender.appendChild(subject);
            tr.appendChild(tdSender);
            tr.appendChild(tdSubject);
            tabla.appendChild(tr);
        }
    };
    xhttp.open("GET", "textoEjercicio4.json", true);
    xhttp.send();            
}
