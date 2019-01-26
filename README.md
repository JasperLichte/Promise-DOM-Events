# Promise-DOM-Events
>  Listen to DOM events using ES2015 Promises and/or `async/await`



## Non-recurring events

Because of the nature of Promises, `Promise-DOM-Events` work best with events that are only supposed to happen once in the lifetime of the app. Such as a user clicking a button:

```javascript
const button = document.getElementById('btn')
const event = await promiseDomEvent(button)('click')
```

Or a keyboard event such as `keydown`

```javascript
const event = await promiseDomEvent(window)('keydown')
```

You do not need to bother unsubscribing from the event after it has emitted.

## Recurring events

`Promise-DOM-Events` does allow you to listen to recurring events as well. You will need to set up your own simple 'event loop' using `requestAnimationFrame` or other non blocking timing functions such as `setInterval` or `setTimeout` though:

```javascript
(async function loop() {  
  const event = await promiseDomEvent(window)('mousemove')
  console.log(event)
  requestAnimationFrame(loop)
})()
```



