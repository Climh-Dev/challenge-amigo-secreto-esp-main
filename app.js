// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

// Función para asignar texto a un elemento
function ingresarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Agrega un amigo desde el input y actualiza la lista visual
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor ingresa un nombre.');
        return;
    }

    amigos.push(nombre);
    limpiarCaja();

    mostrarListaAmigos();
}

// Muestra los nombres en el <ul id="listaAmigos">
function mostrarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; // Limpia la lista antes de actualizar

    //Recorre la lista amigos y agrega los <li> a el <ul>
    for (let indiceAmigo = 0; indiceAmigo < amigos.length; indiceAmigo++) {
        let item = document.createElement('li');
        item.textContent = amigos[indiceAmigo];
        lista.appendChild(item);
        
    }
}

// Sortea un amigo al azar y lo muestra en <ul id="resultado">
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indice];

    let resultadoLista = document.querySelector('#resultado');
    resultadoLista.innerHTML = '';

    let item = document.createElement('li');
    item.textContent = `Tu amigo secreto es: ${nombreSorteado}`;
    resultadoLista.appendChild(item);
}

    // Limpia el campo de entrada
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function limpiarLista() {
    // Vaciar la lista de amigos
    amigos = [];

    // Limpiar la visualización de la lista de nombres y del resultado
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    // Limpiar el input por si había texto pendiente
    limpiarCaja();
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAmigo();
    }
});
