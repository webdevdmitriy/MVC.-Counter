// export default {
//   input: document.getElementById('input'),
//   updateCounter: function (counter) {
//     this.input.value = counter
//   },
// }

export default class View {
  constructor(value) {
    this.input = document.getElementById('input')
    this.updateCounter(value)
  }

  updateCounter(data) {
    this.input.value = data
  }
}
