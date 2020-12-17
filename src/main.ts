console.log("hola kiki");
//number
//explicito
let telefono : number;
telefono = 1;
telefono = 5;

//inferido
let numeroCel = 2291612872;
numeroCel = 39;

let hex: number=0xf00d;

let binary: number =0b1010;

let octal: number = 0o744;

//boolean
//tipado explicito

let isPro: boolean;

isPro = true;
//isPro = 1; //  no se puede asignara booleano

let userName:string = 'ejemplo';

//template string
//uso back-tick

let userInfo : string;

userInfo = `
    UserInfo:
    username: ${userName}
    telefono: ${telefono}
`;
console.log("informacion de usuario", userInfo);