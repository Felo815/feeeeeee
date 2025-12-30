function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
}

function toggleDark() {
    document.body.classList.toggle('dark');
}

function filterPrice() {
    let max = document.getElementById("priceInput").value;
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
        let price = p.getAttribute("data-price");
        p.style.display = price <= max ? "block" : "none";
    });
}