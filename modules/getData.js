import { renderProduct } from "./renderFinal.js"
import { renderError } from "./renderError.js"


// Bij het lezen van de barcode via de openfoodfacts 
// api data ophalen vervolgens de data te renderen

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