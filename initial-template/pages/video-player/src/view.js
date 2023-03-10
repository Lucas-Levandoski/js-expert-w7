export class View {
  #btnInit = document.querySelector('#init')
  #statusElement = document.querySelector('#status')

  enableButton() {
    this.#btnInit.disabled = false
  }

  configOnBtnClick(callback) {
    this.#btnInit.addEventListener('click', callback)
  }

  log(text) {
    this.#statusElement.innerHTML = text
  }
}