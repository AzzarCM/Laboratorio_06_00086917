function ocurrencias(numero, arreglo){
    
    var ocurrencia = 0;
    for(let i = 0; i <= arreglo.lenght; i ++){
       
       if(arreglo[i] == numero){
           ocurrencia = ocurrencia + 1;
       }
    }
    
    return console.log("Numero de repeticiones " + ocurrencia);
}
