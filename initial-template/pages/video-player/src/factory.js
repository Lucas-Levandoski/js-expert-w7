import { Controller } from './controller.js'
import { Camera } from '../../../lib/shared/camera.js'
import { supportsWorkerType } from '../../../lib/shared/util.js'

function getWorker() {
  if (supportsWorkerType()) return new Worker('./src/worker.js', { type: 'module' })

  console.error("this browser does not support module type")
  return {
    async postMessage() { },
    onmessage(msg) { }
  }
}


const [rootPath] = window.location.href.split('/pages/')
const camera = await Camera.init()

export const factory = {
  async initialize() {
    return Controller.initialize({

    })
  }
}