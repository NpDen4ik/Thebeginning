// check
function BookInfo(book, author, isbn) {
  this.book = userBook;
  this.author = userAuthor;
  this.isbn = userISBN;
}

var book1 = new BookInfo(userBook, userAuthor, userISBN);


var inputElementBook = document.querySelectorAll("input")[0];
var inputElementAuthor = document.querySelectorAll("input")[1];
var inputElementISBN = document.querySelectorAll("input")[2];
var userBook = "";
var userAuthor = "";
var userISBN = "";

inputElementBook.addEventListener('change', function(e) {
  userBook = e.target.value;
});

inputElementAuthor.addEventListener('change', function(e) {
  userAuthor = e.target.value;
});

inputElementISBN.addEventListener('change', function(e) {
  userISBN = e.target.value;
});

// check
document.querySelector(".alert").style.display = "none";
var p = 0;
document.querySelectorAll("button")[0].onclick = function() {
  if (document.querySelectorAll("input")[0].value == "" || document.querySelectorAll("input")[1].value == "" || document.querySelectorAll("input")[2].value == "" ) {
    document.querySelector(".alert").style.display = "block"
    return
  } else {
    document.querySelector(".alert").style.display = "none"
  }
  // numeration 1
  var num = document.createElement("td");
  p++;
  var numNode = document.createTextNode(p)
  num.appendChild(numNode);
  var bookListTr = document.createElement("tr")
  bookListTr.className = "newp"
  bookListTr.appendChild(num);
  var bookTbody = document.querySelector("tbody");
  bookTbody.appendChild(bookListTr)
  // book
  var book = document.createElement("td");
  var bookInput = document.querySelectorAll("input")[0].value;
  var bookNode = document.createTextNode(bookInput);
  book.appendChild(bookNode);
  bookListTr.appendChild(book);
  // author
  var author = document.createElement("td");
  var authorInput = document.querySelectorAll("input")[1].value;
  var authorNode = document.createTextNode(authorInput);
  author.appendChild(authorNode);
  bookListTr.appendChild(author);
  // isbn
  var isbn = document.createElement("td");
  var isbnInput = document.querySelectorAll("input")[2].value;
  var isbnNode = document.createTextNode(isbnInput);
  isbn.appendChild(isbnNode);
  bookListTr.appendChild(isbn);
  // close
  var btn = document.createElement("td");
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  span.className = "close";
  btn.appendChild(span)
  bookListTr.appendChild(btn);
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement.parentElement;
      div.style.display = "none";
    }
  }
}


document.querySelectorAll("button")[1].onclick = function() {
    document.querySelectorAll(".newp").forEach(function(a) {
      a.remove()
    })

}

// var book = document.createElement("td");
// var bookInput = document.querySelectorAll("input")[0].value;
// var bookNode = document.createTextNode(bookInput);
// book.appendChild(bookNode);
// var bookListTr = document.createElement("tr")
// bookListTr.appendChild(book);
// var bookTbody = document.querySelector("tbody");
// bookTbody.appendChild(bookListTr)
