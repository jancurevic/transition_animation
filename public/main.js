import { handleCSSAnimation } from "./cssAnimation"
import { handleCanvasAnimation } from "./canvasAnimation"
import { handleThreeAnimation } from "./threeAnimation"
import { SLIDES_COUNT } from "./utils"

const title = document.getElementById('title')

let slideIndex = 0

export const nextSlide = () => {
  if (slideIndex >= SLIDES_COUNT) {
    slideIndex = 0
  } else {
    slideIndex++
  }

  title.innerHTML = ''
  const text = document.createTextNode(`slide${slideIndex + 1}`)
  title.appendChild(text)

  handleCSSAnimation()
  handleCanvasAnimation(slideIndex)
  handleThreeAnimation(0)
}
export const prevSlide = () => {
  if (slideIndex == 0) {
    slideIndex = 2
  } else {
    slideIndex--
  }

  title.innerHTML = ''
  const text = document.createTextNode(`slide${slideIndex + 1}`)
  title.appendChild(text)

  handleCSSAnimation()
  handleCanvasAnimation(slideIndex)
  handleThreeAnimation(1)
}