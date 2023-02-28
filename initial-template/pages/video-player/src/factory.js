import { Controller } from "./controller.js";

const [rootPath] = window.location.href.split('/pages/')

export const factory = {
  async initialize() {
    return Controller.initialize({

    })
  }
}