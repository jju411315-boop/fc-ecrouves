let total = 0;

function addToCart(product, price) {
    const cart = document.getElementById("cart");
    const li = document.createElement("li");
    li.textContent = product + " - " + price + " €";
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}
