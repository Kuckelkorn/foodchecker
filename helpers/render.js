import getData from "./getData.js"

const renderProduct = (product) => {
  const camera = document.querySelector('#camera')
  const title = product.product_name
  const nutrition = product.nutriscore_data // OBJECT
  const allergies = product.allergens_hierarchy // ARRAY

  console.log(allergies)
  console.log(nutrition.score)

  camera.classList.toggle('hidden')
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  header.innerHTML = `<h1>${title}</h1>`
  main.innerHTML = `<section class="voedingswaarde">
    <h2>Voedingswaarde</h2>
    <h3>Score: ${nutrition.grade}</h3>
    </section>
    <section class="allergies">
    <h2> Allergieen</h2>
    <p>${allergies}</p>
    </section>`
}

export const renderCamera = async () => {
  const product = await getData(737628064502);

  const main = document.querySelector('main')
  const title = document.querySelector('header')
  const camera = document.querySelector('#camera')

  camera.classList.toggle('hidden')

  title.innerHTML = "<h1>Foodchecker</h1>"
  main.innerHTML = `<form><input type="text"><button id="search">Zoek</button></form>`

  const search = document.querySelector('#search')
  search.addEventListener('click', async () => renderProduct( await product))
}