const alfabeto = "abcdefghijklmnopqrstuvwxyz";

function validarTexto(texto) {
    const regex = /^[a-z]+$/;
    return regex.test(texto);
}

function cifrarSa(texto, desplazamiento) {
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas.");
        return "";
    }

    let textoCifrado = "";
    for (let i = 0; i < texto.length; i++) {
        const indice = alfabeto.indexOf(texto[i]);
        if (indice !== -1) {
            let nuevoIndice = (indice + desplazamiento) % alfabeto.length;
            if (nuevoIndice < 0) {
                nuevoIndice += alfabeto.length; 
            }
            textoCifrado += alfabeto[nuevoIndice];
        } else {
            textoCifrado += texto[i];
        }
    }
    return textoCifrado;
}

function descifrarSa(texto, desplazamiento) {
    return cifrarSa(texto, -desplazamiento);
}

const textoEntrada = document.getElementById('textoEntrada');
const textoSalida = document.getElementById('textoSalida');
const btnCifrar = document.getElementById('btnCifrar');
const btnDescifrar = document.getElementById('btnDescifrar');
const btnCopiar = document.getElementById('btnCopiar');

btnCifrar.addEventListener('click', () => {
    const texto = textoEntrada.value;
    const desplazamiento = 3; // 
    const textoCifrado = cifrarSa(texto, desplazamiento);
    textoSalida.value = textoCifrado;
});

btnDescifrar.addEventListener('click', () => {
    const texto = textoEntrada.value;
    const desplazamiento = 3;
    const textoDescifrado = descifrarSa(texto, desplazamiento);
    textoSalida.value = textoDescifrado;
});

btnCopiar.addEventListener('click', () => {
    textoSalida.select();
    document.execCommand('copy');
});
