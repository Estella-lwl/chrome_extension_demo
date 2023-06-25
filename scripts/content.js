/*   示例：
    大致思路：
    1. 获取
    2. 计算
 */

const article = document.querySelector("article");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // 使用matchAll需要加/g
  const words = text.matchAll(wordMatchRegExp); // matchAll用于在字符串中查找所有匹配某个正则表达式的子串
  const wordCount = [...words].length; // matchAll返回一个迭代器, 转成数组计算字符
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode; // 使用可选链获取对象属性

  (date ?? heading).insertAdjacentElement("afterend", badge); // 在元素后插入阅读时间节点
} else {
  // alert("未获取到");
}
