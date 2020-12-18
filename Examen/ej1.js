function ejercicio1(cad){
    var parentesis = [];
    for (caracter of cad){
      if(caracter == '('){
        parentesis.push(caracter);
      }
      if(caracter == ')'){
        if(parentesis.length == 0){
          return false;
        }
        parentesis.pop();
      }
    }
    return parentesis.length === 0;
  }