function tiposDatos(array){
    var tipos = [];
    contUnd = 0;
    contNull = 0;
    contLogic = 0;
    contNum = 0;
    contCadena = 0;
    contSymbol = 0;
    for(let x of array){
        tipos.push(typeof(x));
        switch(typeof(x)){
            case "number":
                contNum +=1;
                console.log("hola");
                break;
            case "boolean":
                contLogic +=1;
                break;
            case "string":
                contCadena +=1;
                break;
            case "undefined":
                contUnd +=1;
                break;
            case "null":
                contNull +=1;
                break;
            case "symbol":
                contSymbol +=1;
                break;
                
                default: console.log("no encontre nada");
        }
    return console.log(tipos + contNum);
}
}


function tiposDatos(array){
    var aux1 = [];
    for(let x of array){
       aux1.push(typeof(x));
    }return aux1;
}



