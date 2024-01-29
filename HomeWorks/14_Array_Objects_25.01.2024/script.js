// HOMEWORK

// Необходимо создать объект stock, который будет представлять склад нашей продукции

// 1. totalCost: 0 // Итоговая стоимость всех товаров
// 2. addItem() // функция для добавления товара на склад
// 3. removeItem() // функция для удаления товара на склад
// 4. updateTotalCost() // обновление значения totalCost

const stock = {
    totalCost: 0,
    items: [],
  
    addItem: (name, price, quantity) => {
      stock.items.push({ name, price, quantity });
      stock.updateTotalCost();
    },
  
    removeItem: (i) => {
      if (i >= 0 && i < stock.items.length) {
        stock.items.splice(i, 1);
        stock.updateTotalCost();
      } else {
        console.log("Invalid index for remove.");
      }
    },
  
    updateTotalCost: () => {
      stock.totalCost = stock.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  };
  
  const addItem = (name, price, quantity) => {
    stock.addItem(name, price, quantity);
  };
  
  const removeItem = (i) => {
    stock.removeItem(i);
  };
  
  addItem("Laptop", 100, 22);
  console.log(stock.totalCost);
  
