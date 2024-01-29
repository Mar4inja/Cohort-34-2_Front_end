const stock = {
  items: [],
  totalCost: 0,
  numPositions: 0,
  totalQuantityAllProducts: 0,
  maxPrice: 0,
  avgPrice: 0,
  minPrice: Infinity,
  addItem(item) {
    const existingItem = this.items.find((e) => e.name === item.name);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    this.updateStatistics();
  },
  removeItem(itemName, count) {
    const index = this.items.findIndex((e) => e.name === itemName);
    if (index !== -1 && count <= this.items[index].quantity) {
      count === this.items[index].quantity
        ? this.items.splice(index, 1)
        : (this.items[index].quantity -= count);
    }

    this.updateStatistics();
  },
  updateStatistics() {
    this.numPositions = this.items.length;
    this.totalCost = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    this.totalQuantityAllProducts = this.items.reduce((acc, item) => acc + item.quantity, 0);

    if (this.numPositions > 0) {
      this.maxPrice = Math.max(...this.items.map((item) => item.price));
      this.minPrice = Math.min(...this.items.map((item) => item.price));
      this.avgPrice = this.totalCost / this.totalQuantityAllProducts;
    } else {
      this.maxPrice = 0;
      this.minPrice = Infinity;
      this.avgPrice = 0;
    }

    this.displayStatistics();
  },
  displayStatistics() {
    const statsList = document.getElementById("statsList");
    statsList.innerHTML = `
      <li>Number of Positions: ${this.numPositions}</li>
      <li>Total Cost of All Products: ${this.totalCost}</li>
      <li>Total Quantity of All Products: ${this.totalQuantityAllProducts}</li>
      <li>Max Price: ${this.maxPrice}</li>
      <li>Average Price: ${this.avgPrice.toFixed(2)}</li>
      <li>Min Price: ${this.minPrice}</li>
    `;
  },
};

stock.updateStatistics(); // Update statistics initially

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const add = document.getElementById("add");
const stats = document.getElementById("stats");
const productList = document.getElementById("productList");

add.onclick = () => {
  const name = productName.value.trim();
  const price = +productPrice.value.trim();
  const quantity = +productQuantity.value.trim();

  if (name && price && quantity) {
    stock.addItem({ name, price, quantity });
  }


  productName.value = "";
  productPrice.value = "";
  productQuantity.value = "";

  productList.innerHTML = '';
  stock.items.forEach(e => {
    const li = document.createElement('li');
    li.textContent = `
      Product name: ${e.name},
      Product price: ${e.price},
      Product quantity: ${e.quantity}
    `;
    productList.appendChild(li);
  });
}

// 1. Кол-во позиций;
//   2. Итоговая стоимость всех продуктов;
//   3. Итоговое кол-во всех продуктов;
//   4. Макс. цена;
//   5. Средняя цена;
//   6. Мин. цена.