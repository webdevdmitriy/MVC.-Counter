const btnPlus = document.getElementById('btnPlus')
const btnMinus = document.getElementById('btnMinus')
const btnReset = document.getElementById('btnReset')

updateCounter(counter)

btnPlus.addEventListener('click', function () {
  increase()
  updateCounter(counter)
})

btnMinus.addEventListener('click', function () {
  decrease()
  updateCounter(counter)
})
btnReset.addEventListener('click', function () {
  reset()
  updateCounter(counter)
})
