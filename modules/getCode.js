import { renderLoading, renderError } from "./render.js";

// Barcode lezen van de camera. 
export const getBarcode = async() => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });

    const scanBtn = document.querySelector('#scan')
    const video = document.querySelector('video')

    video.srcObject = await stream

    scanBtn.addEventListener('click', async(e) => {
      e.preventDefault()
      renderLoading(await video)
      stream.getTracks().forEach(function(track) {
        track.stop();
      });
    })

  } catch(err) {
      console.log(err)
  }
}

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
          return barcodes[0].rawValue
        } else { 
          renderError('can\'t read barcode')
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}