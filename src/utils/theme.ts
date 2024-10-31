import { ref } from 'vue'

const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'
const theme = ref(THEME_LIGHT)

export function useTheme() {
  // about try/catch: https://github.com/antfu/vite-ssg/issues/254

  try {
    const htmlELement = document.getElementsByTagName('html')[0]
    // about prefers-color-scheme: https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript

    if (htmlELement.classList.contains(THEME_LIGHT)) {
      theme.value = THEME_LIGHT
    } else if (htmlELement.classList.contains(THEME_DARK)) {
      theme.value = THEME_DARK
    } else {
      const themeSystem = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT

      htmlELement.classList.add(themeSystem)
      theme.value = themeSystem
    }
  } catch {
    console.log('theme error')
  }

  return { theme }
}

export function switchTheme() {
  try {
    const htmlELement = document.getElementsByTagName('html')[0]

    if (htmlELement.classList.contains(THEME_LIGHT)) {
      htmlELement.classList.remove(THEME_LIGHT)
      htmlELement.classList.add(THEME_DARK)
      theme.value = THEME_DARK
    } else {
      htmlELement.classList.remove(THEME_DARK)
      htmlELement.classList.add(THEME_LIGHT)
      theme.value = THEME_LIGHT
    }
  } catch {
    console.log('theme error')
  }
}
