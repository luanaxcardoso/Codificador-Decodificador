function codificar(){

    var frase = document.getElementById("textoCodificado").value.toLowerCase();
    var textoCodificado = frase.replace(/e/img, "enter");
    var textoCodificado = textoCodificado.replace(/i/img, "imes");
    var textoCodificado = textoCodificado.replace(/a/img, "ai");
    var textoCodificado = textoCodificado.replace(/o/img, "ober");
    var textoCodificado = textoCodificado.replace(/u/img, "ufat");

document.getElementById("textoDecodificado").innerHTML=textoCodificado;


}

function decodificar(){

    var frase = document.getElementById("textoCodificado").value.toLowerCase();
    var textoCodificado = frase.replace(/enter/img, "e");
    var textoCodificado = textoCodificado.replace(/imes/img, "i");
    var textoCodificado = textoCodificado.replace(/ai/img, "a");
    var textoCodificado = textoCodificado.replace(/ober/img, "o");
    var textoCodificado = textoCodificado.replace(/ufat/img, "u");

document.getElementById("textoDecodificado").innerHTML=textoCodificado;
document.getElementById("textoCodificado").value = "";
}

function copiar(){

    var textoCodificado = document.querySelector("#textoDecodificado");
    textoCodificado.select();
    document.execCommand("copy");
    document.getElementById("textoCodificado").value = "";
}

function colar(){
    var textoCopiado = navigator.clipboard.readText().then(
        clipText => document.getElementById("textoCodificado").value = clipText
    );
    decodificar();
}




 

