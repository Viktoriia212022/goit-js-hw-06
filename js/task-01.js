const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);



function countList(element) {
    const categoryElTitle = element.firstElementChild;
    console.log('Category:', categoryElTitle.textContent);
    const categoryElLi = categoryElTitle.nextElementSibling; 
     console.log('Elements:',categoryElLi.children.length)
}

categoriesEl.forEach(countList);

// const categoryElAnimal = categoriesEl[0].firstElementChild;
// console.log('Category:', categoryElAnimal.textContent);

// console.log('Elements:',categoryElAnimal.nextElementSibling.children.length)

// const categoryElProducts = categoriesEl[1].firstElementChild;
// console.log('Category:', categoryElProducts.textContent);

// console.log('Elements:', categoryElProducts.nextElementSibling.children.length)

// const categoryElTechnologies = categoriesEl[2].firstElementChild;
// console.log('Category:', categoryElTechnologies.textContent);

// console.log('Elements:',categoryElTechnologies.nextElementSibling.children.length)


