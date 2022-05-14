function solicitarNombre(){
    let nombreCompleto = prompt("Ingrese su nombre y apellido")
    alert("El nombre ingresado es " + nombreCompleto)}
solicitarNombre();

//cuantas clases quiero (surge el cartel default como 1era pantalla)
let clases = parseInt (prompt("cuantas clases de yoga a la semana deseas tomar (Max 10 por mes)"));
while(clases){
switch (clases) {


case "1": 
alert("serían mil quinientos pesos");
break;
case "2": 
alert("serían dos mil ochocientos pesos");
break;
case "3": 
alert("serían tres mil trescientos pesos");
break;
case "4": 
alert(" serían cuatro mil cuatrocientos pesos");
break;
case "5":
alert("serían cinco mil pesos");
break;
case "6" : 
alert("serían cinco mil cuatrocientos pesos");
break;
case "7": 
alert("serían seis mil pesos");
break;
case "8": 
alert("serían seis mil cuatrocientos pesos");
break;
case "9": 
alert("serían siete mil pesos");
break;
case "10":  
alert("serían siete mil cuatrocientos pesos");
break;

default:
alert("Si desea más de díez clases por mes averiguar llamando al telefono por otros paquetes")
break;


}
clases = prompt("ingrese otra cantidad");
}
alert("Si desea saber cuanto se ahorra por clases le dejamos una calculadora para saber su ahorro");
let ingresarNumero1 = parseInt(prompt("Ingrese el valor de la clase individual"));
let ingresarNumero2 = parseInt(prompt("ingrese la cantidad de veces que desea tomar la clase"));
let ingresarNumero3 = parseInt(prompt("Restelo por la cantidad"));


for (let i = ingresarNumero2; i <= 10; i) {
    let resultado = ingresarNumero1 * i - ingresarNumero3;
    alert("El valor total sin descuento es:" + ingresarNumero1 +" X "+ i + " - " + ingresarNumero3 + " = "+ resultado);
    break;
    }


    
    let trabajo = ["clases por Zoom", "clases instituto 1", "Clases instituto 2"]
    let nuevaModalidad = ['clases mixtas'];
    let nuevaModalidad2 = [];
    
    // ordena alfabeticamente
    trabajo.sort();
    console.log(trabajo); // ['exercise', 'sleep', 'work']
    
    // busca posición 
    const ubicacion = trabajo.indexOf("clases por Zoom");
    console.log(ubicacion); // 2
    
    // Quita un elemento
    const selector = trabajo.slice(1);
    console.log(selector);
    
    // concatenar otro tipo
    const trabajo2 = trabajo.concat(nuevaModalidad);
    console.log(trabajo2); 

    // agrego un tipo de clase
    
    nuevaModalidad2.push("clases presenciales");
    console.log(nuevaModalidad2, trabajo); 
