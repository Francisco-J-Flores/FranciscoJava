let parrafo = document.getElementById("parrafo1")
parrafo.innerHTML = "<h2>¡BIENVENIDOS YOGUIS!</h2><p>A TUS CLASES PRESENCIALES, PARTICULARES, VIRTUAL O MIXTA</p>"; 
document.body.append(parrafo);

document.getElementById("nombre").value = "";


//no logro poner el titulo por encuma del boton

const boton = document.querySelector("#primerBoton");
boton.addEventListener("click", function(evento){
	alert("Se ha enviado la consulta");
    this.innerText = "enviado";
});

let instructora1 = document.getElementById("personas");
//Array con la información a agregar

let profesoras = ["Claudia ", "Gonzalo ", "Nicolas ", "Ana ","Paula "];
for (const instructora2 of profesoras) {
    let li = document.createElement("span");
    li.innerHTML = instructora2
    instructora1.appendChild(li);}





const clases = [{ id: "Presencial en instituto",  valor: 2200, cantidad: 1 },
                   {  id: "Virtual",  valor: 1500, cantidad: 1 },
                   {  id: "Mixto",  valor: 2000  , cantidad: 1},
                   {  id: "Particular",  valor: 3000 ,cantidad: 1}];

for (const clase of clases) {
let contenedor = document.createElement("ul"); 

// no logré que cambie el color de todas las ul como así tampoco el background>

contenedor.innerHTML = `<h4> ${clase.id}</h4>
              <p>  Valor de la clase: $ ${clase.valor}</p>
              <b> Cantidad ${clase.cantidad}</b> <br>`;
document.body.appendChild(contenedor);
document.querySelector("ul").style.color="blue";
document.querySelector("ul").style.backgroundColor = "red";

}

