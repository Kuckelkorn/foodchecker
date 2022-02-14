const render = (product) => {
  const title = product.product_name
  const nutrition = product.nutriscore_data // OBJECT
  const allergies = product.allergens_hierarchy // ARRAY

  console.log(allergies)
  console.log(nutrition.score)

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

export default render