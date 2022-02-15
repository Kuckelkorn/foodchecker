export const scanCode = async (image) => {
  if (!('BarcodeDetector' in window)) {
    console.log('Barcode Detector is not supported by this browser.');
  } else {
    console.log('Barcode Detector supported!');
    
    const formats = await BarcodeDetector.getSupportedFormats()
    const barcodeDetector = new BarcodeDetector({formats: await formats});
    
    barcodeDetector.detect(image)
      .then(barcodes => {
        console.log('scanning code')
        barcodes.forEach((barcode) => {
          console.log(barcode.rawValue)
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
}