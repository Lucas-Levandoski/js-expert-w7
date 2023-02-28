export function supportsWorkerType() {
  let supports = false
  const tester = {
    get type() { supports = true }
  }

  try {
    new Worker('blob://', { type: 'module' })
  } finally {
    return supports
  }
}
