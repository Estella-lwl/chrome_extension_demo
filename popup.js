// 监听按钮的触发：
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector("#trigger");
  trigger.addEventListener("click", () => {
    chrome.tabs.executeScript({
      code: 'document.documentElement.style.filter = "hue-rotate(180deg)"',
    });
  });
});
