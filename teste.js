//declareted class
/*class Carro {
    nome = 'mustang'
    ano = 70

    gas(preco){
        return preco*5.2;
    }
}*/

//extends
class Carro{
    constructor(t){
        this.tipo = t
    }
    roda = () => {
        return '4 rodas'
    };
}

//same class with constructor
class Raro extends Carro{
    constructor (n,a){
        super('Raro')
        this.nome = n
        this.ano = a
    }

    gas(preco){
        return preco*5.2;
    }
}


let car = new Raro('Mustang', 70);//istance of class
let car2 = new Raro('Camaro', 50);//istance of class

console.log(car.nome+': R$'+car.gas(20));
console.log(car2.nome+': R$'+car2.gas(30));

//test constructor
console.log(car);