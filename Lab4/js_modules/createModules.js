export function createHeliCard(Heli) {
    return `
        <div class="card_of_tree">
            <img src="img/Helicopter.jpg" alt="crismasTree" class="place_for_img">
            <h4>Виробник ${Heli.name}</h4>
            <p>Місць: ${Heli.passenger_capacity} людей</p>
            <p>Максимальна швидкість: ${Heli.max_speed} km/h</p>
            <p>Material: ${Heli.material}</p>
        </div>
    `;
}

export function createPassangerCount(price) {
    return `<p class="priceCount">Total capacity of passangers on page: ${price} pas.</p>`;
}