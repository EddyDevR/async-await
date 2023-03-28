const btnLoad = document.querySelector('#btn-load');
const imgCat = document.querySelector('#img-cat');

btnLoad.addEventListener('click', loadImg);
async function loadImg() {
  try {
    const res = await fetch('https://cataas.com/cat');
    if (!res.ok) {
      throw new Error('Could not load image');
    } else {
      const binary = await res.blob();
      imgCat.src = URL.createObjectURL(binary);
      console.log('Loaded image');
    }
  } catch (error) {
    console.error(error);
  }
}
