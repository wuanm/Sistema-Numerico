function hexadecimalADecimal(n){
    n=n.toUpperCase();
    let numero=[];
    let hexa={"A":10,"B":11,"C":12,"D":13,"E":14,"F":15};

    for (let i=0;i<n.length;i++) {
        if (n[i] in hexa){
            numero.push(hexa[n[i]]);
        }else {
            numero.push(parseInt(n[i]));
        }
    }
    
    numero=numero.reverse();
    let k=0;
    let total=0;

    while (k< numero.length){
        total+=(Math.pow(16,k)*numero[k]);
        k+=1

    };  

    return  total
        
};





//Decimal a Hexadecimal
function DecimalAHexadecimal(n){
    let letras={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"};
    let valor=[];
    let resultado=0;
    let palabra="";
    var elemento;
    
    if (n.length <=2){
        n=parseInt(n);
        
        if (n in letras){
            palabra+=(letras[n]);
            return palabra
        }else {
            palabra+=(n)
            return palabra
        }
    }

    while(n>16){
        resultado=parseInt(n/16);
        valor.unshift(n-(resultado*16))
        n=resultado;
        if(n<16){
            valor.unshift(n)
        }    
    }
    for(elemento of  valor){
        if(elemento in letras ){
            palabra+=letras[elemento];
        }else{
            palabra+=elemento.toString();
        }
    }
   return palabra
};
console.log(DecimalAHexadecimal("1"))





