//Desafio
// Estudiante Claudio Arguedas Cespedes

let num = 1;
let accion = prompt ("ingresar la cantidad de tickets a imprimir o la palabra ESCAPE para terminar")
console.log("La cantidad de Tickets a Imprimir es de: " + accion)

if (accion !== "ESCAPE") 
{
  while ( num <= Number(accion))
   {
   console.log("TICKETCR100-" + num)
    num++;
  }
  console.log("Fin se Imprimieron: " + Number(accion) + " Tickets")
}
else
{
  console.log("Fin del Programa")
}



