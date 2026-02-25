const searchBar = document.querySelector(".search-bar");
const locationInput = document.querySelector("#locationInput");
const price = document.querySelector("#priceInput");
const sortBy = document.querySelector("#sortBySelect");
const categories = document.querySelector("#categoriesSelect");
const searchbtn = document.querySelector("#searchButton");
const container = document.querySelector(".cards");

searchbtn.addEventListener("click", handle);
function handle(e) {
    e.preventDefault();
    const locationValue = locationInput.value.trim();
    const priceValue = Number(price.value);
    const sortByValue = sortBy.value;
    const categoriesValue = categories.value;


    console.log("Search Clicked");
    console.log("Location:", locationValue);
    console.log("Price:", priceValue);
    console.log("Category:", categoriesValue);
    console.log("Sort:", sortByValue);

    let filteredData = data;
    if (locationValue) {
        filteredData = filteredData.filter(item => item.location.toLowerCase().includes(locationValue.toLowerCase()));
    }

    if (price.value !== "") {
        filteredData = filteredData.filter(item => item.price <= priceValue);
    }

    if (categoriesValue && categoriesValue !== "") {
        filteredData = filteredData.filter(item => item.category === categoriesValue);
    }

    if (sortByValue === "low") {
        filteredData.sort((a, b) => a.price - b.price);
    }
    else if (sortByValue === "high") {
        filteredData.sort((a, b) => b.price - a.price);
    }
    render(filteredData);
}
render(data);



function render(items) {
    if(items.length===0)
    {
        container.innerHTML =`
        <div class="no-results">
            <h2 class="no-results-text">No items found matching your criteria.</h2>
        </div>`;
        return;
    }


    let html = "";

    items.forEach(item => {
        html += `
            <div class="card-container">
                <img src="${item.image}" loading="lazy" class="card-img" alt="${item.title}" />
                <div class="card-body">
                    <h5 class="title">${item.title}</h5>
                    <p class="location">📍${item.location}</p>
                    <p class="rating">⭐${item.rating}</p>
                    <p class="price">₹${item.price}</p>
                    <span class="${item.available ? 'availability' : 'notAvailable'}">
                        ${item.available ? 'Available' : 'Not Available'}
                    </span>
                    <button class="card-btn" data-id="${item.id}">Add to cart</button>
                    <button class="view-btn" data-id="${item.id}">View Details</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}





// add to cart and view details.
// Event Delegation
container.addEventListener("click", function(e) {


    
    const id=e.target.dataset.id;
    if (e.target.classList.contains("card-btn")) {
       const product=data.find(item=>item.id==id);
       if (!product) return;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const alreadyExists = cart.find(item => item.id == id);

        if (!alreadyExists) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        window.location.href = window.location.href;
;
    }

     if (e.target.classList.contains("view-btn")) {
        window.location.href = `details.html?id=${id}`;
    }

});
