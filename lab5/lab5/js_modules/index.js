import { createHeliCard, createPassangerCount } from "./createModules.js";
import { getAllHelis, postHeli, deleteHeli, updateHeli, searchHelis as searchHelisAPI } from "./api.js";

const HelisContainer = document.getElementById('tree_container');
let artificialHeli = [];
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

// Функція для відображення гелікоптерів
async function displayHeli() {
  artificialHeli = await getAllHelis();
  HelisContainer.innerHTML = '';

  if (artificialHeli.length === 0) {
    HelisContainer.innerHTML = '<p class="warnMessage">На жаль, такого гелікоптера немає.</p>';
    priceCountElement.innerHTML = createPassangerCount(0);
    return;
  }

  artificialHeli.forEach(heli => {
    HelisContainer.innerHTML += createHeliCard(heli);
  });

  const totalPassengerCapacity = calculateTotalPassengerCapacity(artificialHeli);
  priceCountElement.innerHTML = createPassangerCount(totalPassengerCapacity);
}

// Функція для розрахунку загальної місткості пасажирів
function calculateTotalPassengerCapacity(Heli) {
  return Heli.reduce((totalValue, heli) => totalValue + parseFloat(heli.passenger_capacity), 0);
}


function editHeli() {
    const updatedHeli = {
        manufacturer_name: manufacturerInput.value,
        passenger_capacity: parseInt(passengerCapacityInput.value),
        max_speed: parseFloat(maxSpeedInput.value),
        material: materialInput.value
    };

    updateHeli(editingHeliId, updatedHeli)
        .then(() => {
            isEditing = false;
            editingHeliId = null;
            submitBtn.textContent = "Submit";
            displayHeli();
            resetInputs();
        })
        .catch(error => console.error('Error updating helicopter:', error));
}

// Function to reset input fields
function resetInputs() {
    manufacturerInput.value = '';
    passengerCapacityInput.value = '';
    maxSpeedInput.value = '';
    materialInput.value = '';

    submitBtn.textContent = "Submit";
    isEditing = false;
    editingHeliId = null;
}

// Function to set inputs for editing
function editHeliInputs(heli) {
    manufacturerInput.value = heli.manufacturer_name;
    passengerCapacityInput.value = heli.passenger_capacity;
    maxSpeedInput.value = heli.max_speed;
    materialInput.value = heli.material;

    submitBtn.textContent = "Apply";
    isEditing = true;
    editingHeliId = heli.id;
}

HelisContainer.addEventListener('click', async (e) => {
    const target = e.target;
    const heliId = target.dataset.id;

    if (target.classList.contains('delete_button')) {
        await deleteHeli(heliId);
        displayHeli();
    }

    if (target.classList.contains('edit_button')) {
        const heliToEdit = artificialHeli.find(heli => heli.id == heliId);
        editHeliInputs(heliToEdit);
    }
});


// Функція для отримання значень введених даних
async function getInputValues() {
  const newHeli = {
    manufacturer_name: manufacturerInput.value,
    passenger_capacity: parseInt(passengerCapacityInput.value),
    max_speed: parseFloat(maxSpeedInput.value),
    material: materialInput.value
  };

  await postHeli(newHeli);
  displayHeli();
}

// Функція для показу модального вікна
function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

// Обробники подій
findButton.addEventListener('click', searchHelis);
findInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchHelis();
  }
});

// Функція для пошуку гелікоптерів
async function searchHelis() {
  const foundHeli = await searchHelisAPI(findInput.value); // Використовуйте імпортовану функцію
  HelisContainer.innerHTML = '';

  foundHeli.forEach(heli => {
    HelisContainer.innerHTML += createHeliCard(heli);
  });
}

// Обробник кнопки скидання
resetButton.addEventListener('click', () => {
  findInput.value = '';
  displayHeli();
});

// Обробник кнопки сортування за зменшенням швидкості
sortDecrease.addEventListener('click', () => {
  const sortedHeli = [...artificialHeli].sort((a, b) => b.max_speed - a.max_speed);
  renderSortedHelis(sortedHeli);
});

// Обробник кнопки сортування за збільшенням швидкості
sortIncrease.addEventListener('click', () => {
  const sortedHeli = [...artificialHeli].sort((a, b) => a.max_speed - b.max_speed);
  renderSortedHelis(sortedHeli);
});

// Функція для відображення відсортованих гелікоптерів
function renderSortedHelis(sortedHeli) {
  HelisContainer.innerHTML = '';  // Очищуємо контейнер
  sortedHeli.forEach(heli => {
    HelisContainer.innerHTML += createHeliCard(heli);  // Додаємо відсортовані картки
  });

  const totalPassengerCapacity = calculateTotalPassengerCapacity(sortedHeli);
  priceCountElement.innerHTML = createPassangerCount(totalPassengerCapacity);
} 

// Обробник кнопки відправки
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!manufacturerInput.value.trim() || !passengerCapacityInput.value.trim() || !maxSpeedInput.value.trim() || !materialInput.value.trim()) {
    showModal("All fields must be filled out!");
  } else if (isNaN(passengerCapacityInput.value) || isNaN(maxSpeedInput.value)) {
    showModal("Passenger Capacity and Max Speed must be valid numbers!");
  } else {
    getInputValues();
    manufacturerInput.value = '';
    passengerCapacityInput.value = '';
    maxSpeedInput.value = '';
    materialInput.value = '';
  }
});

// Закриття модального вікна
closeModalBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Встановлення початкових даних
displayHeli();
