const submitbut = document.querySelector(".formbutton")
const form = document.querySelector("form")
const formData = new FormData(form)

const title = formData.get("title")
console.log(title)
showcase = document.querySelector(".showcase")

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
  book = new Book(title, author, pgs, readstat)
  books.push(book)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Gets form data as an dictionary like thing 
  const formData = new FormData(form)

  const title = formData.get("title")
  const author = formData.get("author")
  const pgs = formData.get("pages")
  const readstat = formData.get("status") 

  addBookToLibrary(title, author, pgs, readstat)
 
  // Add text content to new card elements
  const cardElement = document.createElement("div") 
  const titleElement = document.createElement("h2")
  titleElement.textContent = title
  const authorElement = document.createElement("h2")
  authorElement.textContent = author
  const pagesElement = document.createElement("p")
  pagesElement.textContent = pgs

  // Add classes for style
  cardElement.classList.add("card")
  titleElement.classList.add("title")
  authorElement.classList.add("author")
  pagesElement.classList.add("pages")
  cardElement.appendChild(titleElement)
  cardElement.appendChild(authorElement)
  cardElement.appendChild(pagesElement)
  showcase.appendChild(cardElement)
})