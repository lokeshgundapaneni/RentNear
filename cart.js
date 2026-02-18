const cartContainer = document.querySelector(".cart-container");
const tot_value=document.querySelector(".total-value");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h4>Your cart is empty</h4>";
        tot_value.innerText = "₹ 0.00";
        return;
    }

    let total=0;
    let html = "";
    cart.forEach(item => {
        html += `
            <div class="c-container">
                <div class="image-container">
                    <img src="${item.image}" class="card-img" />
                 </div>
                <div class="card-body">
                  <div class="data-items">
                    <h5>${item.title}</h5>
                    <p>${item.description}</P>
                    <button class="remove-btn" data-id="${item.id}">Delete</button>
                  </div>
                <div class="data-price">
                    <p>₹ ${item.price}</p>
                </div>
                </div>
            </div>
        `;
    });
    cartContainer.innerHTML = html;
    total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    tot_value.innerText = `₹ ${total}`;
}

cartContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
        const id = e.target.dataset.id;
        cart = cart.filter(item => item.id != id);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
})

renderCart();