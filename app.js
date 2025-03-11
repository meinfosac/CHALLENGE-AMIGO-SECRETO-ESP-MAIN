// Lista para almacenar los nombres de los amigos
let listaDeAmigos = [];

/**
 * Agrega un nuevo amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Agregar el nombre a la lista de amigos
    listaDeAmigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada después de agregar
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
    
    // Enfocar nuevamente el campo de entrada para facilitar la adición de más nombres
    inputAmigo.focus();
}

/**
 * Actualiza la visualización de la lista de amigos en la página
 */
function actualizarListaAmigos() {
    // Obtener la lista en el DOM
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    listaDeAmigos.forEach(amigo => {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        nuevoElemento.className = 'name-item';
        listaAmigosElement.appendChild(nuevoElemento);
    });
}

/**
 * Realiza el sorteo aleatorio de un amigo de la lista
 */
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert('Debe agregar al menos un amigo a la lista para poder sortear.');
        return;
    }
    
    // Seleccionar un amigo aleatorio de la lista
    // Forzamos una nueva generación aleatoria cada vez
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado del sorteo
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    // Crear y agregar el elemento con el amigo sorteado
    const nuevoResultado = document.createElement('li');
    nuevoResultado.className = 'result-item';
    nuevoResultado.innerHTML = `
        <p class="result-text">¡Tu amigo secreto es:</p>
        <p class="result-name">${amigoSeleccionado}</p>
    `;
    resultadoElement.appendChild(nuevoResultado);
    
    // Agrega una log para depuración
    console.log(`Sorteo realizado: Índice=${indiceAleatorio}, Amigo seleccionado=${amigoSeleccionado}, Total amigos=${listaDeAmigos.length}`);
}

// Agregar la funcionalidad de presionar Enter para añadir un amigo
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});