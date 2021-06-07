/* 1 - Tamaño Grande */
function posAbig(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big";
        }
    }
    return(arr);
}

console.log(posAbig([-1,3,5,-5]));


/* 2 - Imprime (print) el menor, devuelve (return) el mayor */
function pmenYrmay(arr){
    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null,arr);
    console.log(min);
    return max;
}

pmenYrmay([-1,3,5,-5]);


/* 3 - Imprime (print) uno, devuelve (return) otro */
function ppuYrimp(arr){
    console.log(arr[arr.length-2]);
    imp = arr.find(x => x %2 != 0);
    return imp;
}

ppuYrimp([-1,3,5,-5]);


/* 4 - Doble Visión */
function doble(arr){
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
        arr2.push(arr[i] * 2);
    }
    return arr2;
}

console.log(doble([2,-5,6,9]));


/* 5 - Contar Positivos */
function contarPositivos(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum++;
        }    
    }
    arr.splice((arr.length-1), 1, (sum));
    return arr; 
}

console.log(contarPositivos([-1,5,-4,10,-11,6]));


/* 6 - Pares e Impares */
function parEimp(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0){
            console.log("¡Es para bien!");
            i+=2; 
        }
        if (arr[i]%2 ==! 0 && arr[i+1]%2 ==! 0 && arr[i+2]%2 ==! 0){
            console.log("¡Qué imparcial!");
            i+=2;
        }
    }
}
parEimp([5,3,15,2,4,6,3]);


/* 7 - Incrementa los Segundos */
function incSeg(arr){
    for (var i = 0; i < arr.length; i++){
        if(i%2 == 1){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incSeg([1,2,3,4,5,6]));


/* 8 - Longitudes previas */
function longitudesPrevias(arr){
    for (var i = arr.length-1; i>0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(longitudesPrevias(["programar","dojo", "genial", "hola como estas", "bien"]));


/* 9 - Agrega Siete */
function agrSiete(arr){
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
        arr2.push(arr[i] + 7);
    }
    return arr2;
}

console.log(agrSiete([1,2,3]));


/* 10 - Array Inverso */
function arrInv(arr){
    for (var i = 0; i < arr.length/2; i++){
        var aux = arr[i];
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = aux;
    }
    return arr;
}

console.log(arrInv([2,4,6,1,3]));


/* 11 - Perspectiva: Negativa */
function persNeg(arr){
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr2.push(arr[i] * -1);
        }
        else{
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(persNeg([1,-2,3,0]));


/* 12 - Siempre hambriento */
function hambriento(arr){
    var cont = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] == "comida"){
            console.log("yummy");
            cont++;
        }
    }
    if (cont == 0){
        console.log("Tengo Hambre");
    }
}

/* hambriento(["perro", "comida", "gato", "raton", "comida"]); */
hambriento(["perro", "comida2", "gato", "raton", "comida2"]);


/* 13 - Cambiar hacia el centro */
function cambiaHaciaElCentro(arr){
    for (var i = 0; i < arr.length/2; i++){
        var aux = arr[i];
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = aux;
        i++
    }
    console.log(arr);
}

/* cambiaHaciaElCentro([1,2,3,4,5,6]); */
cambiaHaciaElCentro([true, 42, "Ada", 2, "pizza"]);


/* 14 - Escala el Array */
function escalaArray(arr, mult){
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i] * mult;
    }
    return arr;
}

console.log(escalaArray([1,2,3], 3));