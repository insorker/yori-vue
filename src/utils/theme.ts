import { ref } from 'vue'
const themeState = ref(false)
const themeYori = ref('light')

export function useTheme() {
  const htmlELement = document.getElementsByTagName('html')[0]
  // https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
  const themeSystem = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"

  if (htmlELement.classList.contains('light')) {
    themeState.value = false
    themeYori.value = 'light'
  }
  else if (htmlELement.classList.contains('dark')) {
    themeState.value = true
    themeYori.value = 'dark'
  }
  else {
    htmlELement.classList.add(themeSystem)
    themeState.value = themeSystem == 'dark'? true : false
    themeYori.value = themeSystem
  }
  
  return { themeState, themeYori }
}

export function switchTheme() {
  const htmlELement = document.getElementsByTagName('html')[0]

  if (htmlELement.classList.contains('light')) {
    htmlELement.classList.remove('light')
    htmlELement.classList.add('dark')
    themeState.value = false
    themeYori.value = 'dark'
  }
  else {
    htmlELement.classList.remove('dark')
    htmlELement.classList.add('light')
    themeState.value = true
    themeYori.value = 'light'
  }
}