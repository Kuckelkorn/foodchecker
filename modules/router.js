import './vendors/routie.min.js'

import { renderCamera, renderProduct, renderLoading } from './render.js'
import getData from './getData.js'
import { getBarcode, scanCode } from './getCode.js'

export function handleRoutes() {
  routie({
    'camera': async ()=>{
      renderCamera()
        .then(() => {
          const btn = document.querySelector('#scan')
          console.log(btn)
          // const barcode = getBarcode()
          const barcode = 8711400408540 || 737628064502
          
          btn.addEventListener('click', () => {
            location.href = `./product/${barcode}`
          })
        })
    },
    'product/:barcode': async (barcode)=>{
      console.log(barcode)
      renderLoading()
      const data = await getData(barcode)
      if(data.status === 1){
        renderProduct(await data.product)
      } else {
        renderError(await data.status_verbose)
      }
    }
  })
}