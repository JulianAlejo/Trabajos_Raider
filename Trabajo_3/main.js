const botondatos = document.getElementById("Datos");
const formulario = document.getElementById("formula");
const formulario2 = document.getElementById("formula2");


function valores(mes, año, trimestre, resultado) {
 let datos = [mes, año, trimestre, resultado];
 return datos;
}

const mostrarDatos = () => {
 const mes = document.getElementById("mes").value;
 const año = document.getElementById("año").value;
 const trimestre = document.getElementById("trimestre").value;
 const fecha = document.getElementById("fecha").value;
 const resultado = document.querySelector(
  "input[name=resultado]:checked"
 ).value;
 const competencia = document.getElementById("comp").value;

 const datosArray = [mes, año, trimestre, fecha, resultado, competencia];

 const datosParrafo = document.createElement("p");
 console.log(datosParrafo);
 datosParrafo.textContent = `Mes: ${datosArray[0]}, Año: ${datosArray[1]}, Trimestre: ${datosArray[2]},Fecha: ${datosArray[3]} ,Resultado: ${datosArray[4]}Competencia: ${datosArray[5]}` ;
 formula.appendChild(datosParrafo);

 let divisiones = fecha.slice(5, 7);
};