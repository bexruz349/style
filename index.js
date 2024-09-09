let addButton = document.querySelector(".add-product");
let productList = document.querySelector(".products-list");
let productArray = [];

addButton.addEventListener("click", addProduct);

function addProduct() {
    let productType = document.querySelector("#type-select").value;
    let productName = document.querySelector("#product-name").value;
    let productCount = document.querySelector("#product-count").value;
    
    let obj = {
        type: productType,
        name: productName,
        count: productCount
    };
    
    productArray.push(obj);
    renderProductList();
}

function btnClick(index) {
    productArray.splice(index, 1); // Удаляем элемент из массива по индексу
    renderProductList(); // Перерисовываем список продуктов
}

function renderProductList() {
    let productString = productArray.map((e, i) => `
        <div class="product-item">
            Тип: ${e.type} Название: ${e.name} Количество: ${e.count}
            <button class="delete" onclick="btnClick(${i})">удалить</button>
        </div>
    `).join('');
    productList.innerHTML = productString;
}

function clearList() {
    productArray = [];
    renderProductList();
}
