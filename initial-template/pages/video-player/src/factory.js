import { Controller } from './controller.js'
import { Camera } from '../../../lib/shared/camera.js'

const [rootPath] = window.location.href.split('/pages/')
const camera = await Camera.init()

export const factory = {
  async initialize() {
    return Controller.initialize({

    })
  }
}