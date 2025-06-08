function Book(title, author, pgs, readstat) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  }
  this.title = title
  this.author = author
  this.pgs = pgs
  this.readstat = readstat
  this.id = crypto.randomUUID()
}

books = []

function addBookToLibrary(title, author, pgs, readstat) {
  obj = new Book(title, author, pgs, readstat)
  books.push(obj)
}


addBookToLibrary('test', 'auth', 'pgs', 'unread')
console.log(books[0])
console.log(`${books[0].title}, ${books[0].author}, ${books[0].pgs}, ${books[0].readstat}, ${books[0].id}`)