const carros = ['corsa', 'fusca', 'mustang'];

let [carro1, carro2]= carros;

console.log(carro1);
console.log(carro2);

let [car1, car2, car3, car4] = carros;

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);// undefined because it doesn't exist

let [caranga1, , caranga3] = carros;

console.log(caranga1);
console.log(caranga3);

const Carrao = {
    nome: 'mustang',
    ano: 70,
    motor: 4.0
}

let{ano, motor} = Carrao;
console.log(ano); //same names of propeties 
console.log(motor);

const peca = ({ano, motor}) => `Peça: motor ${motor} do ano ${ano}`; 
console.log(peca(Carrao));



