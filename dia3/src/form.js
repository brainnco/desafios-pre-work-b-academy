const input = document.querySelector('[data-js="username"]')

const dontChange = ['da', 'das', 'de', 'do', 'dos']

input.addEventListener('input', (e) => {
  const valueAsArray = e.target.value.split(' ')
  console.log('valueAsArray:', valueAsArray)

  e.target.value = valueAsArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
      ? word.toLowerCase()
      : capitalize(word)
  }).join(' ')
})

function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

function $ (selector) {
  return document.querySelector(selector)
}

const form = $('[data-js="form"]')
const select = document.createElement('select')
const colors = ['#6B7280', '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#6366F1', '#8B5CF6', '#EC4899']
const colorsContainer = document.createElement('div')
colorsContainer.style.display = 'flex'

colors.forEach(color => {
  const option = createOption(color)
  select.appendChild(option)
})

select.addEventListener('change', (e) => {
  colorsContainer.innerHTML = ''

  Array.from(e.target.selectedOptions).forEach(option => {
    const div = createDivColor(option.value)
    colorsContainer.appendChild(div)
  })
})

function createDivColor (value) {
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  return div
}

function createOption (color) {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  return option
}

select.setAttribute('multiple', '')
form.appendChild(select)
document.body.appendChild(colorsContainer)
