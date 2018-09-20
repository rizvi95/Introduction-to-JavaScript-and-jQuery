
var book1 = {
    title: 'title 1',
    author: 'author 1',
    yearPublished: 2018,
    readBook: function() {
      console.log('reading book 1');
    }
  }
book1.readBook();

function Book(titleParam, authorParam, yearParam) {
    this.title = titleParam; 
    this.author = authorParam;
    this.yearPublished = yearParam;
    this.readBook = function(message) {
      console.log(message);
    }
  }
var book2 = new Book('title 2', 'author 2', 2018);
book2.readBook('reading book 2');

class BookClass {
    constructor(year, author, title) {
      this.yearPublished = year;
      this.title = title;
      this.author = author;
    }
    readBook() {
        console.log('reading book 3');
      }
}
var book3 = new BookClass(2018, 'author 3', 'title 3');
book3.readBook();

for (var property in book1) {
    alert(property + ' = '+ book1[property]);
  }