import { getBarcode } from "./getCode.js"

export const renderLive = async () => {
  const main = document.querySelector('main')
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
