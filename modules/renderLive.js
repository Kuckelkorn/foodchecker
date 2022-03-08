import { getBarcode } from "./getCode.js"

// Rendering the live feed from the camera on the device
export const renderLive = async () => {
  const main = document.querySelector('.active')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')

  footer.classList.toggle('hidden')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  main.innerHTML = `<form>
      <label>737628064502</label>
      <video autoplay></video>
      <button id="scan">Scan</button>
    </form>`

  getBarcode()
}