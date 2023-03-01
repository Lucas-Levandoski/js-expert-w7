export class Controller {
  #view
  #service

  constructor({ view, service }) {
    this.#view = view
    this.#service = service

    this.#view.configOnBtnClick(this.onBtnStart.bind(this))
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.log('not yet detecting eye blink')
    return controller.init()
  }

  async init() {
    console.log('init');
  }

  log(text) {
    this.#view.log(`logger: ${text}`)
  }

  onBtnStart() {
    this.log('initializing detection')
  }
}