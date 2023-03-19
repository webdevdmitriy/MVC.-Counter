const input = document.getElementById('input')
const btnMinus = document.getElementById('btnMinus')
const btnPlus = document.getElementById('btnPlus')
const btnReset = document.getElementById('btnReset')

let counter = 0 // model, данные приложенич
input.value = counter // view обновляем данные

// Нажали на кнопку плюс, контроллер обратился к модели. Данные увеличились. Контроллер обратился
// ко вью, сообщил что нужно изменить данные на странице

//controller. Слушаем действия пользователя
btnPlus.addEventListener('click', function () {
  counter += 1 //model
  input.value = counter //view
})

btnMinus.addEventListener('click', function () {
  counter -= 1
  input.value = counter
})

btnReset.addEventListener('click', function () {
  counter = 0
  input.value = counter
})
