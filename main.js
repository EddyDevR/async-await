const btnLoad = document.querySelector('#btn-load');
const imgCat = document.querySelector('#img-cat');

btnLoad.addEventListener('click', loadImg);
async function loadImg() {
  try {
    const response = await fetch('https://cataas.com/cat');

    if (!response.ok) {
      throw new Error('Could not load image');
    } else {
      const binary = await response.blob();
      imgCat.src = URL.createObjectURL(binary);
      console.log('Loaded image');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while loading the image');
  }
}
