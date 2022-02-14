import getData from "./getData.js"

const renderProduct = (product) => {
  const footer = document.querySelector('footer')
  const header = document.querySelector('header')
  const main = document.querySelector('main')

  // Filter necessary items
  const title =  product.generic_name
  const productName = product.product_name
  const nutrition =  product.nutriscore_data // OBJECT
  const allergies =  product.allergens_hierarchy // ARRAY

  footer.classList.toggle('hidden')

  // Changing the HTML with the API data
  header.innerHTML = `<h1>${ title}</h1><p>${productName}</p>`
  main.innerHTML = `<section class="voedingswaarde">
    <h2>Voedingswaarde</h2>
    <h3>Score: ${ nutrition.grade}</h3>
    </section>
    <section class="allergies">
    <h2> Allergieen</h2>
    <p>${ allergies}</p>
    </section>`
}

export const renderCamera = async () => {
  const main = document.querySelector('main')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')

  footer.classList.toggle('hidden')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  main.innerHTML = `<form><label>737628064502</label><input type="text"><button id="search">Zoek</button></form>`

  const search = document.querySelector('#search')
  search.addEventListener('click', async (e) => {
    e.preventDefault()
    const barcode = document.querySelector('input').value
    const product = await getData(barcode)
    renderProduct(await product)
  })
}