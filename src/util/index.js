const t = (function () {
  var count = 0
  return function (bool) {
    if (bool) {
      console.log('ok')
    } else {
      console.error(count + ' not right')
    }
    count++
  }
})()