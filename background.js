chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  chrome.runtime.sendMessage(request)
  sendResponse('Message received by the extension!')
})
