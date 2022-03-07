import { renderLoading } from "./renderLoading.js";


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
