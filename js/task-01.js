const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories:  ${itemEl.length}`);

itemEl.forEach((li) => {
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.lastElementChild.children.length}`);
}) 