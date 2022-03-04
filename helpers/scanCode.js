import getData from './getData.js'
import { renderError } from './renderError.js';

// Interpreting the code scanned from the video feed.  
export const scanCode = async (image) => {
  if (!('BarcodeDetector' in window)) {
    console.log('Barcode Detector is not supported by this browser.');
  } else {
    const formats = await BarcodeDetector.getSupportedFormats()
    const barcodeDetector = new BarcodeDetector({formats: await formats});
    
    barcodeDetector.detect(image)
      .then(barcodes => {
        if (barcodes.length != 0){
          console.log(barcodes[0].rawValue)
          getData(barcodes[0].rawValue)
        } else { renderError('can\'t read barcode')}
      })
      .catch(err => {
        console.log(err);
      })
  }
}