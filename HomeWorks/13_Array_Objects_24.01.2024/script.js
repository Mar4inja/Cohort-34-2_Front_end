// HOMEWORK
/* 
    Необходимо создать объект bankAccount (дебетовая карта), представляющий собой
    банковский счёт со следующими свойствами (ключами):
    1. accountNumber: '123456789';
    2. accountHolderName: 'Alice';
    3. balance: 0;
    4. deposit(sum) - для описания действия по добавлению суммы на счёт;
    5. withdraw(sum) - для описания действия по списанию суммы со счёта;
    6. checkBalance() - для проверки баланса.
*/

const bankAccount = {
    accountNumber: "DE4558752369874123",
    accountHolderName: "Alice",
    accountHolderLastName: "Feldbon",
    accountHolderBalance: 125,
    accountHolderAddress: {
      country: "Germany",
      city: "Berlin",
      house: {
        street: "Flieder street",
        number: 141,
        litter: "c",
        apartment: 25,
      },
    },
    deposit: function (sum) {
      if (sum > 0) {
        this.accountHolderBalance += sum;
        console.log(
          `Your deposit ${sum} successfully added to account. New balance: ${this.accountHolderBalance}`
        );
      } else {
        console.log("Please enter a correct deposit amount.");
      }
    },
  
    withdraw: function (sum) {
      if (sum > 0 && sum <= this.accountHolderBalance) {
        this.accountHolderBalance -= sum;
        console.log(
          `Withdraw ${sum} successfully. New balance: ${this.accountHolderBalance}`
        );
      } else {
        console.log("Not enough money in the account to withdraw");
      }
    },
    checkBalance: function () {
      console.log(
        `Account balance for ${this.accountHolderName} ${this.accountHolderLastName}: ${this.accountHolderBalance}`
      );
    },
  };
  
  // Пример использования методов
  bankAccount.deposit(1000);
  bankAccount.withdraw(599);
  bankAccount.checkBalance();
  