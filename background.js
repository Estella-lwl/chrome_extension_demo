chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  var confirmClose = confirm("是否需要打开新的导航页");
  if (confirmClose) {
    chrome.tabs.create({}); //创建新的tab页
  }
});
