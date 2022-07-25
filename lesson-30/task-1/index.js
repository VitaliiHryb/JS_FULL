// Promise - first step

const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    // function onImageLoaded() {
    //   resolve(imgElem);
    // }

    function onImageLoaded() {
      const { width, height } = imgElem;
      resolve({ width, height });
    }

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
  });

  return p;
};

const imgSrc =
  'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';

const resultPromise = addImage(imgSrc);

resultPromise.catch(error => console.log(error));

resultPromise.then(data => console.log(data));

// console.log(result);

export { addImage };

// function onImageLoaded(error, imgElem) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// }
