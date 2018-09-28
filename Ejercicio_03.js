function tiposDatos(array) {
    var tipos = [];
    contUnd = 0;
    contNull = 0;
    contLogic = 0;
    contNum = 0;
    contCadena = 0;
    contSymbol = 0;
    for (let x of array) {
        tipos.push(typeof (x));
        if(typeof(x) == "number"){
            contNum += 1;
        }else if(typeof(x) == "boolean"){
            contLogic += 1;
        }else if(typeof(x) == "string"){
            contCadena += 1;
        }else if(typeof(x)== "undefined"){
            contUnd +=1;
        }else if(typeof(x) == "null"){
            contNull += 1;
        }else if(typeof(x) == "symbol"){
            contSymbol +=1;
        }
    }
    return console.log(tipos + " booleanos " + contLogic + " numeros " + contNum + " cadenas " + contCadena + " undefineds " + contUnd + " nulls " +
                        contNull + " symbol " + contSymbol);
}


/*
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

        */

