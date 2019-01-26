(async _ => {
  
  const button = document.getElementById('btn')
  const event = await promiseDomEvent(button)('click')

  console.log(event)
})()

;(async function loop() {
  
  const event = await promiseDomEvent(window)('mousemove')
  console.log(event)

  requestAnimationFrame(loop)
})()
