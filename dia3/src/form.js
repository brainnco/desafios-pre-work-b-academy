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
