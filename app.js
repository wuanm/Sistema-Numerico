//importar la hoja donde realizamos la importacion de los archivos
import { DecimalBinario,binarioDecimal, DecimalAOctal,DecimalAHexadecimal,hexadecimalADecimal} from "./SistemaNumerico.js";

const decimal=document.getElementById("Decimal");
const entradaDecimal=document.getElementById("entradaDecimal");
const Binario=document.getElementById("Binario");
const entradaBinario=document.getElementById("entradaBinario");
const hexa=document.getElementById("Hexa");
const entradaHexadecimal=document.getElementById("entradaHexadecimal");
const Octal=document.getElementById("Octal");
const entradaOctal=document.getElementById("entradaOctal");
const botton=document.getElementById("boton");



// se pone el valor de la conversion al introducir decimales
entradaDecimal.addEventListener("keyup",function(){
    document.getElementById("entradaBinario").innerHTML=DecimalBinario(entradaDecimal.value);
    entradaBinario.setAttribute('value',DecimalBinario(entradaDecimal.value))
    entradaOctal.setAttribute('value',DecimalAOctal(entradaDecimal.value))
    entradaHexadecimal.setAttribute('value',DecimalAHexadecimal(entradaDecimal.value))
});

//se pone el valor de la conversion al introducir decimales
entradaBinario.addEventListener("keyup",function(){
        document.getElementById("entradaDecimal").innerHTML=binarioDecimal(entradaBinario.value);
        entradaDecimal.setAttribute('value',binarioDecimal(entradaBinario.value))
        entradaOctal.setAttribute('value',DecimalAOctal(entradaBinario.value))
        entradaHexadecimal.setAttribute('value',DecimalAHexadecimal(entradaBinario.value))
 
});

//Hexadecimal a decimal
entradaHexadecimal.addEventListener("keyup",function(){
    document.getElementById("entradaDecimal").innerHTML=hexadecimalADecimal(entradaHexadecimal.value);
    entradaDecimal.setAttribute('value',hexadecimalADecimal(entradaHexadecimal.value))
    entradaBinario.setAttribute('value',DecimalBinario(entradaDecimal.value))
    //entradaBinario.setAttribute('value',binarioDecimal(entradaHexadecimal.value))
});



//Damos funcionalidad al boton
botton.addEventListener("click",function(){
    location.reload()  
})



