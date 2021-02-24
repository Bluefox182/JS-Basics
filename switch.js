var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy un numero 1!");
    break;
  case 10:
    console.log("Soy un numero 10!");
    break;
  case 100:
    console.log("Soy un numero 100!");
    break;
  default:
    console.log("No soy Nada :(");
}

var op1 = "Piedra"
var op2 = "Papel"
var op3 = "Tijera"

var resultado = function(user,cpu) {
  switch (true) {
    case (user === cpu):
      console.log("Empataron!");
      break;
    case (user === op1 && cpu === op3):
      console.log("You Win!");
      break;
    case (user === op2 && cpu === op1):
      console.log("You Win!");
      break;
    case (user === op3 && cpu === op2):
      console.log("You Win!");
      break;
    default;
      console.log("You Lose!");
  }
};
resultado(op1,op3)


var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i])
}

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
}

miAuto.marca 
// "Toyota"

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020, 
  detallesDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.año}`);
  }
  
  // miAuto.detallesDelAuto();
  //Auto Corolla 2020


var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

articulos.forEach(function(articulo){
  console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});
//se llama con articulosBaratos

1 = "1
"