import { addImage } from './addImage';

const addImageV2 = url => {
  return new Promise((resolve, reject) => {
    addImage(url, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

export { addImageV2 };

// examples
/*
addImageV2(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
)
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
*/

// addImageV2('https://server.com/image.png')
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'
