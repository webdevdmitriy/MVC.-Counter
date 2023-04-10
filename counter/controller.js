import model from './model.js'
import View from './view.js'

const btnPlus = document.getElementById('btnPlus')
const btnMinus = document.getElementById('btnMinus')
const btnReset = document.getElementById('btnReset')

model.init()

const view = new View(model.counter)

// view.updateCounter(model.counter)

btnPlus.addEventListener('click', function () {
  model.increase()
  view.updateCounter(model.counter)
})

btnMinus.addEventListener('click', function () {
  model.decrease()
  view.updateCounter(model.counter)
})
btnReset.addEventListener('click', function () {
  model.reset()
  view.updateCounter(model.counter)
})
