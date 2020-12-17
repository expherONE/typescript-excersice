//void

//explicito
function showInfo(user:any): any{
    console.log('User info',
     user.id, user.username, user.firstname);
}
showInfo({
id:1, 
username:'moises', 
firstname:'olguin'
});

//inferido void revisar con el cursor sobre la funcion
function showFormarttedInfo(user:any){
    console.log('user Info',
    `
    id: ${user.id}
    user: ${user.username}
    firsname: ${user.firsName}
    `
    );
}
showFormarttedInfo({
    id: 1,
    username:'moises',
    firstname: 'Olguin'
});

//tipo void como tipo de dato en variable
let unusable :void;
//unusable=null;


////never--------------------------------------------
function handleError(code:number, messahe:string):never{
    //proceso o logica para gestionar el error
    //generar respuesta

    throw new Error(`${messahe}.code: ${code}`)
}
try{
    handleError(404,'not fount')
}catch(error){}


function sumNumbers(limit:number): never{
    let suma=0;
    while(true){
        suma++
    }
    //return suma;
}
sumNumbers(10);
//ciclo infinito, el programa no termina
