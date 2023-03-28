const btnLoad = document.querySelector('#btn-load');
const imgCat = document.querySelector('#img-cat');
btnLoad.addEventListener('click', loadImg);

async function loadImg() {
  try {
    const response = await fetch('https://cataas.com/cat');

    if (!response.ok) {
      throw new Error('No se pudo cargar la imagen');
    }

    const binary = await response.blob();

    imgCat.src = URL.createObjectURL(binary);

  } catch (error) {
    console.error(error);
    alert('Ocurrió un error al cargar la imagen');
  }
}
