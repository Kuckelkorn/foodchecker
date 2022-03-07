import './vendors/routie.min.js'

import { renderLive } from './renderLive.js'

export function handleRoutes() {
  routie({
    'camera': ()=>{
      renderLive();
    },
    'product': ()=>{

    }
  })
}