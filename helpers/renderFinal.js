export const renderProduct = (product) => {
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
    <h3>Score: ${nutrition.grade}</h3>
    </section>
    <section class="allergies">
    <h2> Allergieen</h2>
    <p>${allergies}</p>
    </section>`
}