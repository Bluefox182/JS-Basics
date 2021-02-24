if (true) {  //Lo que va dentro del if debe ser siempre verdadero
  console.log("Hola");
} else {
  console.log("Soy Falso");
}

if (true) {  
  console.log("Hola");
} else if {
  console.log("Soy Falso");
} else {
  console.log("Soy Falso2");
}

var edad = 18;
  if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
  } else if ( edad > 18) {
    console.log("Puedes votar otra vez");
  } else {
    console.log ("No puedes votar");
  }

  //condicion para validar T y F 
  condition ? true : false;

  var resultado = numero === 1 ? "Si soy un Uno" : "No, no soy un Uno"


  var op1 = "Piedra"
  var op2 = "Papel"
  var op3 = "Tijera"

  var resultado = function(user,cpu) {
    if (user != cpu) {
      if (user === op1 && cpu === op3) {
        console.log("El Usuario Gano con " + op1)
      } else if (user === op2 && cpu === op1) {
        console.log("El Usuario Gano con " + op2)
      } else if (user === op3 && cpu === op2) {
          console.log("El Usuario Gano con " + op3)
      } else {
          console.log("La CPU Gano!")  
      }
    } else if (user === cpu) {
      console.log("Empataron!")  
    }
  };

  resultado(op1,op3)