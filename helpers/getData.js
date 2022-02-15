import { renderProduct } from "./renderFinal.js"
import { renderError } from "./renderError.js"

const getData = async(barcode) => {
  const result = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
  const data = await result.json()
  console.log(await data)
  if(data.status === 1){
    renderProduct(await data.product)
  } 
  renderError(await data.status_verbose)
}

export default getData