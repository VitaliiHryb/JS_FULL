// Load image
// const imgSrc =
//   'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';

function addImage(imgSrc, callback) {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  function onImageLoaded() {
    callback(null, imgElem);
  }

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
}

// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

function onImageLoaded(error, imgElem) {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
}

// const imgSrc =
//   'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';

// addImage(imgSrc, onImageLoaded);

export { addImage };

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );

// const imgSrc =
//   'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';

// function addImage(imgSrc, callback) {
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('alt', 'My Photo');
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector('.page');
//   containerElem.append(imgElem);

//   function onImageLoaded() {
//     const { width, height } = imgElem;
//     callback(null, { width, height });
//   }

//   imgElem.addEventListener('load', onImageLoaded);
//   imgElem.addEventListener('error', () => callback('Image load is failed'));
// }

// // const imgSrc =
// //   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// function onImageLoaded(error, imgElem) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// }

// // const imgSrc =
// //   'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';

// addImage(imgSrc, onImageLoaded);

// export { addImage };
