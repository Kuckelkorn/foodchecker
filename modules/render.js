import { getBarcode, scanCode } from "./getCode.js"

export const renderCamera = async () => {
  const main = document.querySelector('.active')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')

  footer.classList.add('hidden')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  main.innerHTML = `<form>
      <video autoplay></video>
      <a id="scan">Scan</a>
    </form>`
}

export const renderProduct = (product) => {
    const footer = document.querySelector('footer')
    const header = document.querySelector('header')
    const main = document.querySelector('.active')
  
    // Filter necessary items
    const title =  product.generic_name
    const productName = product.product_name
    const nutrition =  product.nutriscore_data // OBJECT
    const allergies =  product.allergens_hierarchy // ARRAY
  
    footer.classList.remove('hidden')
  
    // Changing the HTML with the API data
    header.innerHTML = `<h1>${ title}</h1><p>${productName}</p>`
    main.innerHTML = `<section class="voedingswaarde">
      <h2>Voedingswaarde</h2>
      <h3>Score: ${nutrition.grade}</h3>
      </section>
      <section class="allergies">
      <h2> Allergieen</h2>
      <p>${allergies}</p>
      </section>`
}

export const renderLoading = async(video) => {
  const main = document.querySelector('.active')
  const title = document.querySelector('header')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  main.innerHTML = `<canvas id="canvas" width="320" height="240"></canvas>`

  const canvas = document.querySelector('canvas')

  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
  scanCode(canvas)
}

export const renderError = async (message) => {
  console.log(message)
  const main = document.querySelector('.active')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')

  footer.classList.remove('hidden')
  
  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  const p = document.createElement("p")
  main.appendChild(p).textContent = message
}