// model, данные приложения

export default {
  counter: 0,
  init: function () {
    this.loadFromLocalStorage()
  },
  saveToLocalStorage: function () {
    localStorage.setItem('counter', JSON.stringify(this.counter))
  },
  loadFromLocalStorage: function () {
    const data = localStorage.getItem('counter')
    if (data) this.counter = JSON.parse(data)
  },
  increase: function () {
    ++this.counter
    this.saveToLocalStorage()
  },
  decrease: function () {
    --this.counter
    this.saveToLocalStorage()
  },
  reset: function () {
    this.counter = 0
    this.saveToLocalStorage()
  },
}
