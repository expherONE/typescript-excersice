"use strict";
//void
//explicito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstname);
}
showInfo({
    id: 1,
    username: 'moises',
    firstname: 'olguin'
});
//inferido void revisar con el cursor sobre la funcion
function showFormarttedInfo(user) {
    console.log('user Info', "\n    id: " + user.id + "\n    user: " + user.username + "\n    firsname: " + user.firsName + "\n    ");
}
showFormarttedInfo({
    id: 1,
    username: 'moises',
    firstname: 'Olguin'
});
//tipo void como tipo de dato en variable
var unusable;
//unusable=null;
////never--------------------------------------------
function handleError(code, messahe) {
    //proceso o logica para gestionar el error
    //generar respuesta
    throw new Error(messahe + ".code: " + code);
}
try {
    handleError(404, 'not fount');
}
catch (error) { }
function sumNumbers(limit) {
    var suma = 0;
    while (true) {
        suma++;
    }
    //return suma;
}
sumNumbers(10);
//ciclo infinito, el programa no termina
