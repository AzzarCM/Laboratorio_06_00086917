function sumArray(array){
    var sumatoria = 0;
    var promedio = 0;
    for(let i = 0; i<= array.length; i++){
        sumatoria += array[i];
    }
    promedio = sumatoria/array.length;
    return console.log("sum " + sumatoria + "prom " + promedio);
}