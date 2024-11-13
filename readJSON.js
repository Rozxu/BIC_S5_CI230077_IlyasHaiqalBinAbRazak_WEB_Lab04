const fs = require('fs');

fs.readFile('books.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const bookData = JSON.parse(data);

  const firstBookTitle = bookData.Books[0].title;
  const secondBookAuthor = bookData.Books[1].author;
  const allGenres = bookData.Books.map(book => book.genres).flat();

  console.log("Title of the first book:", firstBookTitle);
  console.log("Author of the second book:", secondBookAuthor);
  console.log("Genres of all books:", allGenres.join(", "));
});
