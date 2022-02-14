const getData = async(barcode) => {
  const result = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
  const data = await result.json()
  return await data.product
}

export default getData