const container = document.getElementById("listcontainer");
const title = document.querySelector(".page-title");
const alert=document.createElement("div");

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
}

function render(items) {
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

const category = getCategoryFromURL();

if (category) {
    title.innerText = category;
    const filteredItems = data.filter(item => item.category === category);
    render(filteredItems);
}
