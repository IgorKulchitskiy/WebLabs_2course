import {
    createHeliCard,
    createPassangerCount,
} from "./createModules.js";

const HeliContainer = document.getElementById('tree_container');
const findButton = document.getElementById('find_button');
const findnput = document.getElementById('find_input');
const sortDecrease = document.getElementById('sort_by_decrease_of_price');
const resetButton = document.getElementById('reset_button');
const sortIncrease = document.getElementById('sort_by_increase_of_price');
const priceCountElement = document.getElementById('priceCount');

let artificialHeli = [];
let artificialHeliCopy = [];
let currentHelis = [];

fetch('HeliCopm.json')
    .then(response => response.json())
    .then(data => {
        artificialHeli = data;
        artificialHeliCopy = data;
        currentHelis = data;
        displayHelis(artificialHeli);
    })
    .catch(error => console.error('Problem with JSON:', error));

function calculateTotalPrice(helis) {
    return helis.reduce((totalValue, heli) => totalValue + heli.passenger_capacity, 0);
}

function displayHelis(helis) {
    currentHelis = helis;
    HeliContainer.innerHTML = '';

    if (helis.length === 0) {
        HeliContainer.innerHTML = '<p class="warnMessage">На жаль, гелікоптерів з такою швидкістю немає.</p>';
        const totalPrice = 0;
        priceCountElement.innerHTML = createPassangerCount(totalPrice);
        return;
    }

    helis.forEach(heli => {
        HeliContainer.innerHTML += createHeliCard(heli);
    });

    const totalPrice = calculateTotalPrice(helis);
    priceCountElement.innerHTML = createPassangerCount(totalPrice);
}

findButton.addEventListener('click', () => {
    const searchTerm = findnput.value.trim().toLowerCase(); 
    const foundHeli = artificialHeli.filter(heli => 
        heli.name.toLowerCase().includes(searchTerm) 
    );
    displayHelis(foundHeli);
});


resetButton.addEventListener('click', () => {
    HeliContainer.innerHTML = '';
    findnput.value = '';
    artificialHeli = [...artificialHeliCopy];
    displayHelis(artificialHeli);
});

sortDecrease.addEventListener('click', () => {
    const sortedHelis = currentHelis.sort((a, b) => b.max_speed - a.max_speed);
    displayHelis(sortedHelis);
});

sortIncrease.addEventListener('click', () => {
    const sortedHelis = currentHelis.sort((a, b) => a.max_speed - b.max_speed);
    displayHelis(sortedHelis);
});
