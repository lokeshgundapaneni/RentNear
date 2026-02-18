const container = document.querySelector(".details-container");


function getIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}


function renderItem(item) {

    container.innerHTML = `
        <div class="img-container">
            <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="details">
            <h5 class="title item">${item.title}</h5>
            <p class="description item">${item.description}</p>
            <span class="price item">₹${item.price}</span>
            <p class="location item">📍${item.location}</p>
            <p class="rating item">⭐${item.rating}</p>
            <span class="${item.available ? 'availability' : 'notAvailable'}">
                ${item.available ? 'Available' : 'Not Available'}
            </span><br>
            <button class="btn card-btn" data-id="${item.id}">Add to cart</button><br>
            <button class="btn rent-btn" data-id="${item.id}">Rent Now</button>
        </div>
    `;
}

const id = getIdFromURL();
console.log("ID from URL:", id);

if (id) {
    const product = data.find(item => item.id == id);
    if (product) {
        renderItem(product);
    }
}
