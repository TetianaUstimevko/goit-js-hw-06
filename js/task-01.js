const list = document.getElementById('categories');
console.log(`Number of categories: ${list.children.length}`);

const listArr = list.children;

[...listArr].forEach((item) => console.log(`Category: ${item.firstElementChild.textContent} Elements: ${item.lastElementChild.children.length}`));