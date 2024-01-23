// Home Work (LIBRARY)

const library = [
    {
      ISBN: "123456789",
      TITLE: "Harry Potter",
      AUTHOR: "J.K Rowling",
      YEAR: "1997",
    },
  ];
  
  let inputData = prompt(
    'Write book data using ";" (ISBN;TITLE;AUTHOR;YEAR)'
  );
  // 1. ISBN (уникальный идентификатор книги)
  // 2. TITLE (название книги)
  // 3. AUTHOR (автор книги)
  // 4. YEAR (год издания книги)
  // Example: '12345678;Gold Fish;A.S.Pushkin;1833'
  
  // ctrl + /
  /* shift + alt + a */
  
  while (inputData) {
    const bookData = inputData.split(";");
  
    if (bookData.length === 4) {
      const [ISBN, TITLE, AUTHOR, YEAR] = bookData;
  
      const isISBNUnique = library.every((book) => book.ISBN !== ISBN);
  
      if (isISBNUnique) {
        library.push({
          ISBN,
          TITLE,
          AUTHOR,
          YEAR,
        });
  
        console.log("Book successfully added");
      } else {
        console.log("Error: ISBN must be unique. Book is not added.");
      }
    } else {
      console.log("Error: Please, write all data about book.");
    }
  
    inputData = prompt('Write book data using ";" (ISBN;TITLE;AUTHOR;YEAR)');
  }
  
  function printLibrary() {
    console.log("Library:");
    library.forEach((book, index) => {
      console.log(
        `${index + 1}. ISBN: ${book.ISBN}, Title: ${book.TITLE}, Author: ${
          book.AUTHOR
        }, Year: ${book.YEAR}`
      );
    });
  }
  
  function findBook(isbn) {
    const index = library.findIndex((book) => book.ISBN === isbn);
    return index !== -1 ? index : -1;
  }
  
  printLibrary();
  