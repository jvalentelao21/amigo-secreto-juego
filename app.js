
// Array para almacenar la lista de amigos.
let listaDeAmigos = [];

/**
 * Función para agregar un nuevo amigo a la lista.
 */
function agregarAmigo() {
    // 1. Obtener el nombre del amigo desde el input.
    const nombreInput = document.getElementById('amigo');
    const nombreAmigo = nombreInput.value.trim(); // .trim() elimina espacios en blanco al inicio y al final.

    // 2. Validar que el campo no esté vacío.
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución de la función si el campo está vacío.
    }

    // Validar que el nombre no esté ya en la lista.
    if (listaDeAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.');
        nombreInput.value = ''; // Limpiar el campo de entrada
        return;
    }

    // 3. Agregar el nombre al array.
    listaDeAmigos.push(nombreAmigo);

    // 4. Actualizar la lista visible en la página.
    actualizarLista();

    // 5. Limpiar el campo de texto para el siguiente nombre.
    nombreInput.value = '';
    nombreInput.focus(); // Pone el cursor de nuevo en el campo de texto.
}

/**
 * Función para realizar el sorteo del amigo secreto.
 */
function sortearAmigo() {
    // Validar que haya suficientes amigos para sortear.
    if (listaDeAmigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para poder realizar el sorteo.');
        return;
    }

    // 1. Generar un índice aleatorio.
    // Math.random() genera un número entre 0 (incluido) y 1 (excluido).
    // Lo multiplicamos por el tamaño de la lista para obtener un número entre 0 y la longitud de la lista.
    // Math.floor() redondea hacia abajo al entero más cercano, dándonos un índice válido (de 0 a N-1).
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // 2. Seleccionar el amigo secreto usando el índice aleatorio.
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    // 3. Mostrar el resultado en la pantalla.
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `El amigo secreto es: ¡${amigoSecreto}!`;
    resultadoElemento.style.display = 'block'; // Asegurarse de que el resultado sea visible
}

/**
 * Función para actualizar la lista de amigos en el HTML.
 */
function actualizarLista() {
    const listaElemento = document.getElementById('listaAmigos');
    
    // Limpiamos la lista actual en el HTML para no duplicar nombres.
    listaElemento.innerHTML = ''; 

    // Recorremos el array 'listaDeAmigos' y creamos un elemento <li> por cada amigo.
    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Creamos un nuevo elemento de lista <li>
        let item = document.createElement('li');
        // Le asignamos el nombre del amigo como contenido de texto.
        item.textContent = listaDeAmigos[i];
        // Añadimos el <li> a la lista <ul> en el HTML.
        listaElemento.appendChild(item);
    }
}

function reiniciarJuego() {
    // Vaciar el array de amigos.
    listaDeAmigos = [];
    
    // Limpiar la lista visible en la página.
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Ocultar y limpiar el resultado del sorteo.
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = '';
    resultadoElemento.style.display = 'none';

    // Limpiar el campo de entrada.
    document.getElementById('amigo').value = '';
}
