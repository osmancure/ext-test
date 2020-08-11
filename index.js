chrome.runtime.onMessage.addListener(
  function(request,) {
    var el = document.getElementById('message-box')
    el.textContent = request
  }
)
