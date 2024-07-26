const menuItems = [
    { category: "starters", name: "Garlic Bread", description: "Toasted bread with garlic", price: 3, dietary: ["vegan"] },
    { category: "starters", name: "Chilli Chicken", description: "fried chicken bites tossed in a super aromatic sweet, spicy and slightly tangy chili sauce", price: 15, dietary: [] },
    { category: "mains", name: "Vegan Burger", description: "packed with a mix of vegetables, grains, peas, legumes, and healthy fats", price: 15, dietary: ["vegan"] },
    { category: "mains", name: "Biryani", description: " layered rice dish that's popular in South Asia and made with rice, meat, and spices", price: 30, dietary: [] },
    { category: "desserts", name: "Cheesecake", description: "Creamy cheesecake with a biscuit base", price: 6, dietary: ["vegetarian"] },
    { category: "desserts", name: "Badam Kheer", description: "Badam Kheer Recipe | Badam Payasam | Almond Kheer · Cham cham sweet (Chum chum ...)", price:11, dietary: ["vegetarian"] },
    { category: "beverages", name: "Chocolate Milkshake", description: "Sweet, cold beverage made from ice cream, milk, and chocolate.,topped with whipped cream and chocolate syrup", price: 6, dietary: ["gluten-free"] },
    { category: "beverages", name: "Dalgona Coffee ", description: "A Korean coffee drink made with whipped instant coffee, sugar, water, and milk", price: 11, dietary: ["vegetarian", "gluten-free"] },
];
function displayMenuItems(items) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "<h2>Menu Items</h2>";

    items.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Dietary Preferences: ${item.dietary.join(", ") || "None"}</p>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}
function applyFilters() {
    const category = document.getElementById("category-filter").value;
    const vegan = document.getElementById("vegan").checked;
    const glutenFree = document.getElementById("gluten-free").checked;
    const vegetarian = document.getElementById("vegetarian").checked;
    const price = document.querySelector('input[name="price"]:checked')?.value;

    let filteredItems = menuItems.filter(item => {
        if (category !== "all" && item.category !== category) return false;
        if (vegan && !item.dietary.includes("vegan")) return false;
        if (glutenFree && !item.dietary.includes("gluten-free")) return false;
        if (vegetarian && !item.dietary.includes("vegetarian")) return false;
        if (price === "under-10" && item.price >= 10) return false;
        if (price === "10-20" && (item.price < 10 || item.price > 20)) return false;
        if (price === "over-20" && item.price <= 20) return false;
        return true;
    });
    displayMenuItems(filteredItems);
}
document.getElementById("submit-filter").addEventListener("click", applyFilters);
displayMenuItems(menuItems);