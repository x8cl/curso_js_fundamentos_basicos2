/* Tamaño Grande */
function posAbig(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big";
        }
    }
    return(arr);
}

console.log(posAbig([-1,3,5,-5]));


/* Imprime (print) el menor, devuelve (return) el mayor */
function pmenYrmay(arr){
    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null, arr);
    console.log(min);
    return max;
}

pmenYrmay([-1,3,5,-5]);


/* Imprime (print) uno, devuelve (return) otro */
function ppuYrimp(arr){
    console.log(arr[arr.length-2]);
    imp = arr.find(x => x %2 != 0);
    return imp;
}

ppuYrimp([-1,3,5,-5]);


/* Doble Visión */
function doble(arr){
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
        arr2.push(arr[i] * 2);
    }
    return arr2;
}

console.log(doble([2,-5,6,9]));


/* Contar Positivos */
function contarPositivos(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum = sum + arr[i];
        }    
    }
    arr.splice((arr.length-1), 1, (sum));
    return arr; 
}

console.log(contarPositivos([-1,5,-4,10,-11,6]));


/* Pares e Impares */
function parEimp(arr){
    var salida = 0;
    for (var i = 0; i < arr.length; i++){
        if ((arr[i]) %2 === (arr[i+1]) %2){
            salida = ("¡Qué imparcial!");
        }    
    }
    /* arr.splice((arr.length-1), 1, (sum)); */
    return salida;
}

console.log(parEimp([2,2,1,2]));