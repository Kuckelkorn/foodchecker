import { scanCode } from "./scanCode.js"

export const renderLoading = async (video) => {
  const main = document.querySelector('main')
  const title = document.querySelector('header')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  main.innerHTML = `<canvas id="canvas" width="320" height="240"></canvas>`

  const canvas = document.querySelector('canvas')

  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

  // scanCode(video)
  scanCode(canvas)
  // scanCode(image_data_url)

}