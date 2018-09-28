function sumaArrays(array1, array2) {
    var array3 = [];
    var minLength = Math.min(array1.length, array2.length);
    for ( var i = 0; i < minLength; i++) {
        array3[i] = array1[i] + array2[i];
    }
    return array3;
}