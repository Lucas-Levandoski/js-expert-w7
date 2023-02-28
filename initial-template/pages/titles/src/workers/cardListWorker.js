onmessage = ({ data }) => {
  let counter = 0

  console.time('blocking-up')

  console.table(data)

  for (; counter < 1e5; counter++) console.log('.')

  console.timeEnd('blocking-up')

  postMessage(
    { response: 'ok', data: counter }
  )
}