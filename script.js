import {renderCamera} from './helpers/render.js';
const camera = document.querySelector('#camera')


if (!('BarcodeDetector' in window)) {
  console.log('Barcode Detector is not supported by this browser.');
} else {
  console.log('Barcode Detector supported!');
  // create new detector
  const barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
  barcodeDetector.detect(imageEl)
    .then(barcodes => {
      barcodes.forEach(barcode => console.log(barcode.rawData));
    })
    .catch(err => {
      console.log(err);
    })
}


camera.addEventListener('click', () => renderCamera())