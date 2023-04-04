// model, данные приложения

const model = {
  counter: 0,
  increase: function () {
    ++this.counter
  },
  decrease: function () {
    --this.counter
  },
  reset: function () {
    this.counter = 0
  },
}
