const capitalize = (word) => {
  const lower = word.toLowerCase()
  
  return word.charAt(0).toUpperCase() + lower.slice(1)
}

const textToPascal = (word) => {
  const pascal = word.replace(/([-_ ]\w)/g, text => text[1].toUpperCase())
  
  return capitalize(pascal)
}


const generateId = (len) => {
  const dec2hex = dec.toString(16).padStart(2, "0")

  const arr = new Uint8Array((len || 40) / 2)

  window.crypto.getRandomValues(arr)

  return Array.from(arr, dec2hex).join('')
}

module.exports = { capitalize, textToPascal, generateId }
