const hotels = [
    { name: 'Hotel A', price: 100, rating: 4 },
    { name: 'Hotel B', price: 150, rating: 3 },
    { name: 'Hotel C', price: 200, rating: 5 },
    // Add more hotel data here
];

const priceRangeInput = document.getElementById('priceRange');
const priceValueSpan = document.getElementById('priceValue');
const starRatingSelect = document.getElementById('starRating');
const hotelList = document.getElementById('hotelList');

priceRangeInput.addEventListener('input', updatePriceRange);
starRatingSelect.addEventListener('change', updateStarRating);

function updatePriceRange() {
    const priceRange = parseInt(priceRangeInput.value);
    priceValueSpan.textContent = `$${priceRange}`;
    filterHotels();
}

function updateStarRating() {
    filterHotels();
}

function filterHotels() {
    const priceRange = parseInt(priceRangeInput.value);
    const starRating = parseInt(starRatingSelect.value);

    const filteredHotels = hotels.filter((hotel) => {
        return hotel.price <= priceRange && (starRating === 0 || hotel.rating === starRating);
    });

    displayHotels(filteredHotels);
}

function displayHotels(hotelsToShow) {
    hotelList.innerHTML = '';
    hotelsToShow.forEach((hotel) => {
        const hotelElement = document.createElement('div');
        hotelElement.classList.add('hotel');
        hotelElement.innerHTML = `
            <h2>${hotel.name}</h2>
            <p>Price: $${hotel.price}</p>
            <p>Rating: ${hotel.rating} Stars</p>
        `;
        hotelList.appendChild(hotelElement);
    });
}

// Initial filter
filterHotels();
