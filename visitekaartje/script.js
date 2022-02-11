import {getAndRenderData, postAndRenderData} from './api.js'

const picture = document.querySelector('section:first-of-type')
const skills = document.querySelector('section:nth-of-type(2)')
const about = document.querySelector('section:nth-of-type(3)')
const contact = document.querySelector('section:nth-of-type(4)')


const button = document.querySelector('footer button')
const skillsBtn = document.querySelector('nav ul li:first-of-type button')
const aboutBtn = document.querySelector('nav ul li:nth-of-type(2) button')
const contactBtn = document.querySelector('nav ul li:last-of-type button')

button.addEventListener("click", () => {
  if (picture.classList.contains('hidden')){
    picture.classList.remove('hidden')
    skills.classList.add('hidden')
    about.classList.add('hidden')
    contact.classList.add('hidden')
  }
})

skillsBtn.addEventListener('click', () => {
  picture.classList.add('hidden')
  skills.classList.remove('hidden')
  about.classList.add('hidden')
  contact.classList.add('hidden')
})

aboutBtn.addEventListener('click', () => {
  picture.classList.add('hidden')
  skills.classList.add('hidden')
  about.classList.remove('hidden')
  contact.classList.add('hidden')
})

contactBtn.addEventListener('click', () => {
  picture.classList.add('hidden')
  skills.classList.add('hidden')
  about.classList.add('hidden')
  contact.classList.remove('hidden')
})

getAndRenderData('Remco');
