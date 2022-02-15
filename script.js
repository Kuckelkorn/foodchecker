import { renderLive } from "./helpers/renderLive.js"

const camera = document.querySelector('#camera')

camera.addEventListener('click', () => renderLive())