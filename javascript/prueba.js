let ingresarNumero1 = parseInt(prompt("Bienvenido: ingrese un número"));
let ingresarNumero2 = parseInt(prompt("ingrese otro número"));

for (let i = ingresarNumero2; i <= 10; i) {
    let resultado = ingresarNumero1 * i;
    alert(ingresarNumero1 +" X "+ i +" = "+ resultado);
    break;
    }

/**let mes = prompt("Ingresar un mes del año");
while(mes != "ESC" ){
switch (mes) {

case "enero": 
alert("faltan 11 meses para navidad");
break;
case "febrero": 
alert("faltan 10 meses para navidad");
break;
case "marzo": 
alert("faltan 9 meses para navidad");
break;
case "abril": 
alert(" faltan 8 meses para navidad");
break;
case "mayo":
alert("faltan 7 meses para navidad");
break;
case "junio" : 
alert("faltan 6 meses para navidad");
break;
case "julio": 
alert("faltan 5 meses para navidad");
break;
case "agosto": 
alert("faltan 4 meses para navidad");
break;
case "septiembre": 
alert("faltan 3 meses para navidad");
break;
case "octubre":  
alert("faltan 2 meses para navidad");
break;
case "noviembre":  
alert("falta 1 meses para navidad");
break;
case "diciembre":  
alert("Esta en el mes de navidad");
break;
default :
alert("No es un mes")
break;
}
mes = prompt("ingrese otro mes del año");
}/** */