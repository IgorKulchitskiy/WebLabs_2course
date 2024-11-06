export function createHeliCard(Heli) {
    return `
        <div class="card_of_tree">
            <img src="img/Helicopter.jpg" alt="crismasTree" class="place_for_img">
            <h4>Виробник ${Heli.manufacturer_name}</h4>
            <p>Місць: ${Heli.passenger_capacity} людей</p>
            <p>Максимальна швидкість: ${Heli.max_speed} km/h</p>
            <p>Material: ${Heli.material}</p>
            <div class="tree_edit_delete">
                <button class="edit_button" data-id="${Heli.id}">Edit</button>
                <button class="delete_button" data-id="${Heli.id}">Delete</button>
            </div>
        </div>

    `;
}

export function createPassangerCount(price) {
    return `<p class="priceCount">Total capacity of passangers on page: ${price} pas.</p>`;
}