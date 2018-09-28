arrayPersonas = []
function personaPrin(nombre, apellido, fechaNac, numTel, correo){
    
    var persona = new Object();
    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.fechaNac = fechaNac;
    persona.numTel = numTel;
    persona.correo = correo;

    arrayPersonas.push(persona);
}