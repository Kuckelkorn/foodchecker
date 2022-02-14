import getData from './helpers/getData.js'
import render from './helpers/render.js';

const product = await getData(737628064502);

render(await product)