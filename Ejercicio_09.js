function juegoRand (){
    array = [];
    for(let i = 0; i<=19; i++){
        array[i] = Math.floor((Math.random() * 10) + 1);
    }
    console.log(array);
    num = prompt("ingrese un numero entre 0-100");
    banderita = true
    for(let x = 0; x<= array.length; x++){
        if(x == num){
            banderita = false;
        }
    }
    if(!banderita){
        alert("Perdiste");
    }else{
        alert("ganaste");
    }
}