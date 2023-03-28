// Se obtiene el botón de carga y la imagen del gato de la página HTML
const botonCargar = document.querySelector('#boton-cargar');
const imagenGato = document.querySelector('#imagen-gato');

// Se agrega un listener para el evento click del botón de carga
botonCargar.addEventListener('click', async () => {
  try {
    // Se realiza una petición a la API de imágenes de gatos y se espera su respuesta
    const response = await fetch('https://cataas.com/cat');

    // Si la respuesta no es exitosa, se lanza un error
    if (!response.ok) {
      throw new Error('No se pudo cargar la imagen');
    }
    alert('La respuesta fue exitosa!!')

    // Se obtiene el contenido de la respuesta en formato Blob
    const blob = await response.blob();

    // Se crea una URL a partir del contenido del Blob y se establece como origen de la imagen
    imagenGato.src = URL.createObjectURL(blob);
  } catch (error) {
    // Si ocurre un error, se muestra un mensaje de alerta en el navegador y se imprime el error en la consola
    console.error(error);
    alert('Ocurrió un error al cargar la imagen');
  }
});
