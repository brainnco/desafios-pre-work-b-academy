import './style.css'

const url = 'http://localhost:3333/cars'
const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="table"]')

const getFormElement = (event) => (elementName) => {
  console.log(event.target.elements[elementName])
  return event.target.elements[elementName]
}

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
}

function createImage (data) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = data.src
  img.alt = data.alt
  img.width = 100
  td.appendChild(img)
  return td
}

function createText (value) {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

function createColor (value) {
  const td = document.createElement('td')
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  td.appendChild(div)
  return td
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const getElement = getFormElement(e)

  const data = {
    image: getElement('image').value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value,
  }

  createTableRow(data)

  e.target.reset()
  image.focus()
})

function createTableRow (data) {
  const elements = [
    { type: 'image', value: { src: data.image, alt: data.brandModel } },
    { type: 'text', value: data.brandModel },
    { type: 'text', value: data.year },
    { type: 'text', value: data.plate },
    { type: 'color', value: data.color }
  ]

  const tr = document.createElement('tr')
  elements.forEach(element => {
    const td = elementTypes[element.type](element.value)
    tr.appendChild(td)
  })

  table.appendChild(tr)
}

function createNoCarRow () {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const thsLength = document.querySelectorAll('table th').length
  td.setAttribute('colspan', thsLength)
  td.textContent = 'Nenhum carro encontrado'

  tr.appendChild(td)
  table.appendChild(tr)
}

async function main () {
  const result = await fetch(url)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

  if (result.error) {
    console.log('Erro ao buscar carros', result.message)
    return
  }

  if (result.length === 0) {
    createNoCarRow()
    return
  }

  result.forEach(createTableRow)
}

main()
