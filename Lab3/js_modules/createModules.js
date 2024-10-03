export function createHeliCard(Heli) {
    return `
        <div class="card_of_tree">
            <img src="img/helicopter.jpg" alt="crismasTree" class="place_for_img">
            <h4>Виробник ${Heli.name}</h4>
            <p>Місць: ${Heli.passenger_capacity} людей</p>
            <p>Максимальна швидкість: ${Heli.max_speed} km/h</p>
        </div>
    `;
}

export function createPassangerCount(price) {
    return `<p class="priceCount">Total capacity of passangers on page: ${price} pas.</p>`;
}