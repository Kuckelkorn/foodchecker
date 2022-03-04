// Rendering error message

export const renderError = async (message) => {
  console.log(message)
  const main = document.querySelector('main')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')

  footer.classList.remove('hidden')
  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  const p = document.createElement("p")
  main.appendChild(p).textContent = message
}