// Load image
function addImage(imgSrc, callback) {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  function onImageLoaded() {
    const { width, height } = imgElem;
    callback(null, { width, height });
  }

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
}

function onImageLoaded(error, imgElem) {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
}

export { addImage };

// const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('alt', 'My Photo');
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector('.page');
//   containerElem.append(imgElem);

//   const onImageLoaded = () => {
//     const { width, height } = imgElem;
//     callback(null, { width, height });
//   };

//   imgElem.addEventListener('load', onImageLoaded);

//   imgElem.addEventListener('error', () => callback('Image load fail'));
// };

// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// };

// addImage(imgSrc, onImageLoaded);

// export { addImage };

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
