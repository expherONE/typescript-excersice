//tipo explicito
let idUser: any;

idUser = 1; //number
console.log(idUser);
idUser = 'hola'; // string
console.log(idUser);
idUser = {
    hola:2,
    hola2:'hola2'
}
idUser= true;
console.log(idUser);

// sustraer

let surprise : any = 'hello helo ts';

const res = surprise.substring(10);//erro
console.log(res);