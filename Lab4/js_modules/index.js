import { createHeliCard, createPassangerCount } from "./createModules.js";


const HelisContainer = document.getElementById('tree_container');
let artificialHeli = [];
let artificialHeliCopy = []; 
let currentHeli = [];


const findInput = document.getElementById('find_input');
const findButton = document.getElementById('find_button');
const resetButton = document.getElementById('reset_button');


const sortDecrease = document.getElementById('sort_by_decrease_of_price');
const sortIncrease = document.getElementById('sort_by_increase_of_price');


const priceCountElement = document.getElementById('priceCount');


const submitBtn = document.getElementById('submit_btn');
const manufacturerInput = document.getElementById('manufacturer_desc_input');
const passengerCapacityInput = document.getElementById('height_desc_input');
const maxSpeedInput = document.getElementById('price_desc_input');
const materialInput = document.getElementById('material_desc_input');


const modal = document.getElementById("errorModal");
const closeModalBtn = document.querySelector(".close");
const modalMessage = document.getElementById("modalMessage");


fetch('HeliComp.json')
    .then(response => response.json())
    .then(data => {
        artificialHeli = data;
        artificialHeliCopy = data;
        currentHeli = data;
        displayHeli(artificialHeli, HelisContainer, priceCountElement);
    })
    .catch(error => console.error('Problem with JSON:', error));


function displayHeli(Heli) {
    currentHeli = Heli;
    HelisContainer.innerHTML = '';
    
    if (Heli.length === 0) {
        HelisContainer.innerHTML = '<p class="warnMessage">На жаль, такого гелікоптера немає.</p>'; 
        const totalPassengerCapacity = 0;
        priceCountElement.innerHTML = createPassangerCount(totalPassengerCapacity);
        return;
    }

    Heli.forEach(heli => {
        HelisContainer.innerHTML += createHeliCard(heli);
    });

    const totalPassengerCapacity = calculateTotalPassengerCapacity(Heli);
    priceCountElement.innerHTML = createPassangerCount(totalPassengerCapacity);
};


function calculateTotalPassengerCapacity(Heli) {
    return Heli.reduce((totalValue, heli) => totalValue + parseFloat(heli.passenger_capacity), 0);
}


function getInputValues() {
    let lastId = artificialHeli.length;
    lastId++;

    let newHeli = {
        id: lastId,
        name: manufacturerInput.value,
        passenger_capacity: parseInt(passengerCapacityInput.value),
        max_speed: parseFloat(maxSpeedInput.value),
        material: materialInput.value
    };

    artificialHeli.push(newHeli);
}


function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "block";
}


findButton.addEventListener('click', () => {
    searchHelis();
});

findInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchHelis();
    }
});

function searchHelis() {
    const foundHeli = artificialHeli.filter(heli => 
        heli.name.toLowerCase().includes(findInput.value.trim().toLowerCase())
    );
    displayHeli(foundHeli, HelisContainer, priceCountElement);
}



resetButton.addEventListener('click', () => {
    HelisContainer.innerHTML = '';
    findInput.value = '';
    const resetHeli = artificialHeli.sort((a, b) => a.id - b.id);
    displayHeli(resetHeli, HelisContainer, priceCountElement);
});


sortDecrease.addEventListener('click', () =>{
    const sortedHeli = currentHeli.sort((a, b) => b.max_speed - a.max_speed);
    displayHeli(sortedHeli, HelisContainer, priceCountElement);
});


sortIncrease.addEventListener('click', () =>{
    const sortedHeli = currentHeli.sort((a, b) => a.max_speed - b.max_speed);
    displayHeli(sortedHeli, HelisContainer, priceCountElement);
});


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!manufacturerInput.value.trim() || !passengerCapacityInput.value.trim() || !maxSpeedInput.value.trim() || !materialInput.value.trim()) {
        showModal("All fields must be filled out!");
    } else if (isNaN(passengerCapacityInput.value) || isNaN(maxSpeedInput.value)) {
        showModal("Passenger Capacity and Max Speed must be valid numbers!");
    } else {
        getInputValues();
        displayHeli(artificialHeli);
        manufacturerInput.value = '';
        passengerCapacityInput.value = '';
        maxSpeedInput.value = '';
        materialInput.value = '';
    }
});


closeModalBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
