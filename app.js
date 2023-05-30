function encriptar() {
    let textoPrincipal = document.getElementById("texto-principal").value.toLowerCase();
    //bangera i - afecta a mayusculas y minusculas
    //Bandera g - busca en toda la línea, palabra, oración, etc.
    //Bandera m - afecta múltiples lineas, palabras, parrafos,etc.
    //Doble barra hace que cada letra se cheque por separado

    var textoEncriptado = textoPrincipal.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("texto-final").value = textoEncriptado;
}

function desencriptar() {
    let textoPrincipal = document.getElementById("texto-principal").value.toLowerCase();
    //bangera i - afecta a mayusculas y minusculas
    //Bandera g - busca en toda la línea, palabra, oración, etc.
    //Bandera m - afecta múltiples lineas, palabras, parrafos,etc.
    //Doble barra hace que cada letra se cheque por separado

    var textoEncriptado = textoPrincipal.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("texto-final").value = textoEncriptado;
}

function copiarTexto(){
    let texto = document.getElementById("texto-final");
    texto.select();
    texto.selectionRange(0,99999);
    document.execCommand("copy");
}

