
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

var botaoCriptogravar = document.querySelector("#btn-cripto");
botaoCriptogravar.addEventListener("click", function (event) {
    event.preventDefault();

    var textoDigitado = document.querySelector("#input-texto");
    var textoCriptografado = textoDigitado.value;

    textoCriptografado = textoCriptografado.replace(/a/g, "ai");
    textoCriptografado = textoCriptografado.replace(/e/g, "enter");
    textoCriptografado = textoCriptografado.replace(/i/g, "imes");
    textoCriptografado = textoCriptografado.replace(/o/g, "ober");
    textoCriptografado = textoCriptografado.replace(/u/g, "ufat");

    document.getElementById("msg").value = textoCriptografado;
});

var botaoDescriptogravar = document.querySelector("#btn-descripto");
botaoDescriptogravar.addEventListener("click", function (event) {
    event.preventDefault();

    var mensagem = document.querySelector("#input-texto");
    var textoDescriptografado = mensagem.value;

    textoDescriptografado = textoDescriptografado.replace(/ai/g, "a");
    textoDescriptografado = textoDescriptografado.replace(/enter/g, "e");
    textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
    textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, "u");

    document.getElementById("msg").value = textoDescriptografado;
});

let botaoCopiar = document.querySelector("#btn-copy");
botaoCopiar.addEventListener("click", function (event) {
    event.preventDefault();

    let mensagemCopiada = document.querySelector("#msg");
    mensagemCopiada.select();
    mensagemCopiada.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado!");
});


