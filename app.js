//Ejercicios de repaso
//Javascript

// Ejercicio 0 - Nombre y Apellido
// var nombre = "Neby";
// var apellido = "X";
// console.log(nombre +" " + apellido);



// Ejercicio 1 - Array Ensalada de Frutas
// let frutosDelBosque = ["arándanos","frutillas","moras","frambuesas","grosellas"];

// for (let i = 0; i < frutosDelBosque.length; i++) {
//     console.log(frutosDelBosque[i] + " estarán en la ensalada de frutas")
//   };



// Ejercicio 2 - Promedio de edad
// let edades = [25, 32, 55, 38, 44, 29];

// function promedio(edad) {
//     let sumar = 0;
//     let contar = edades.length;
//     for (i = 0; i < contar; i++) {
//         sumar += edades[i];
//     }
//     return sumar / contar
// }
// let promedioEdades = promedio();
// console.log(promedioEdades)



// Ejercicio 3 - Mis amigos.
// let amigos = ["Ryan", "Kieran", "Mark", "Miguel"];

// let filtro = amigos.filter((amigo) => amigo.length === 4)

// console.log(filtro)


// Ejercicio 4 - Métodos de arrays.
// let listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// listaDeSuper.push("shampoo")
// listaDeSuper.shift()
// listaDeSuper.length
// console.log(listaDeSuper)
// listaDeSuper.indexOf("shampoo")



// Ejercicio 5 - Mi primera función
// saludo = () => {
//     return "Sea usted bienvenido/a querida/o visitante";
//   }



// Ejercicio 6 - Calculando el mayor
// calculoMayor = (num1, num2) => {
//     if (num1 > num2) {
//         alert("El primer número ingresado es mayor que el segundo");
//     } else if (num2 > num1) {
//         alert("El segundo número ingresado es mayor que el primero");
//     } else(
//         alert("Ambos valores son iguales")
//     );
// }



// Ejercicio 7 - Mis amigos.
// const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
// const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"];

// filtrarAmigos = (arr) => {
//     return arr.filter((amigo) => amigo.length === 4)
// }



// Ejercicio 8 - Tirar dados.
// const dado = [1, 2, 3, 4, 5, 6];

// tirarDado = () => {
//     let tirarDado = Math.floor(Math.random() * 6);
//     return dado[tirarDado]
// }



// Ejercicio 9 - Creando y consultando un objeto
// let toDoList = {
//     tipo_de_tarea: "Compras",
//     dia: "Miercoles",
//     productos: ["soap", "sugar", "bread"],
//     cantidadDeProductos: 3,
//     notificacion: function() {
//         return alert("Esta tarea tiene una prioridad urgente!");
//     }
// };
// toDoList.dia
// toDoList["tipo_de_tarea"]
// toDoList["productos"].length
// toDoList.notificacion()



// Ejercicio 10 - Consultando valores.
// const superHeroes = {
//     "squadName": "Super Hero Squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [{
//             "name": "Molecule Man",
//             "age": 29,
//             "secretIdentity": "Dan Jukes",
//             "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//         },
//         {
//             "name": "Madame Uppercut",
//             "age": 39,
//             "secretIdentity": "Jane Wilson",
//             "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
//         }
//     ]
// };

// superHeroes.squadName
// superHeroes.members[1].name
// superHeroes.members[1].powers[2]
// superHeroes.members[1].age



// EJERCICIO 11: Mis amigos.
// let amigos = ["Ryan", "Kieran", "Mark", "Miguel"];

// let filtro = amigos.filter((amigo) => amigo.length === 4)

// console.log(filtro)



// EJERCICIO 12: Corrigeme la frase.
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// function fraseAlterada(frase) {
//     return `¡${frase}!`;
// }

// let frasesExclamadas = frases.map(fraseAlterada);
// console.log(frasesExclamadas)