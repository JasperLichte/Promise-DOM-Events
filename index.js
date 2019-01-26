export default
  domElement =>
    eventType =>
      new Promise((resolve, reject) => {
        domElement = (window && document && document.body && domElement === window ? document.body : domElement)
        !(HTMLElement && domElement && (domElement instanceof HTMLElement))
          && reject(new Error('No valid DOM Element provided!'))
        !eventType && reject(new Error('No event type provided!'))

        domElement.addEventListener(eventType, e => {
          resolve(e)
          domElement.removeEventListener(eventType, resolve, true)
        }, true)
      })
