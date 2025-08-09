// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Código para almacenar los nombres registrados
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Borrar mensaje de resultado si existe
    document.getElementById("resultado").innerHTML = "";

    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar si está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar duplicados
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombre);

    // Mostrar lista actualizada
    mostrarLista();

    // Limpiar y enfocar input
    input.value = "";
    input.focus();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Función para sortear un amigo y resetear todo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos un amigo.");
        return;
    }

    // Seleccionar aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar solo el resultado del ganador
    document.getElementById("resultado").innerHTML =
        `Tu amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;

    // Borrar lista visual
    document.getElementById("listaAmigos").innerHTML = "";

    // Resetear la base de datos en memoria
    listaAmigos = [];
}
