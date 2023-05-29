//Leyendo texto con boton "Encriptar"

function encriptar() {
    let textoPrincipal = document.getElementById("texto-principal").value.toLowerCase();
    //bangera i - afecta a mayusculas y minusculas
    //Bandera g - busca en toda la línea, palabra, oración, etc.
    //Bandera m - afecta múltiples lineas, palabras, parrafos,etc.
    //Doble barra hace que cada letra se cheque por separado

    var textoEncriptado = textoPrincipal.replace(/e/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"emter");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("texto-final").value = textoEncriptado;
}


