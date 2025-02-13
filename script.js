// script.js


const gridItems = document.querySelectorAll('.grid-item');


gridItems.forEach(item => {
    item.addEventListener('click', () => {

        const title = item.querySelector('h3').textContent;
   
        alert(`You clicked on: ${title}`);
    });
});