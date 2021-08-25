/*
//new array
const numeros =[1,2,3];
console.log(numeros);

const novosNumeros = numeros;
console.log(novosNumeros);

novosNumeros.push(4);
console.log(numeros);
console.log(novosNumeros);//same altered numeros 

const num = [1,2,3];
const num2 = [...num]// for not same altered numeros, it is sprad 
num2.push(4);
console.log(num);
console.log(num2);
//push in sprad
const num3 = [...num2, 5];
console.log(num3);

//sprad with object
const dog = {
    nome: 'Bob'
}

console.log(dog);

const pet = {...dog}
console.log(pet);
pet.nome='Snop';
console.log(pet);

//sprad with propeties of pet2 
const pet2 = {...dog, patas:2};
console.log(pet2);

*/

const sum = (a,b) => {
    return a+b
}

console.log(sum(2,3));

//for get values of amount undefined
const soma = (...numeros) =>{
    return numeros.reduce((a,b) => a+b, 0);//REDUCE: for each element of array do it a+b, initial value is 0
}

console.log(soma(2,3,4));