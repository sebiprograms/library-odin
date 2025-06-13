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

function addBookToLibrary(title, author, pgs, status) {
  book = new Book(title, author, pgs, status)
  books.push(book)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Gets form data as an dictionary like thing 
  const formData = new FormData(form)

  const title = formData.get("title")
  const author = formData.get("author")
  const pgs = formData.get("pages")
  const status = formData.get("status") 

  // Create object for book and push it too Books array
  addBookToLibrary(title, author, pgs, status)
 
  // Add text content to new card elements
  const cardElement = document.createElement("div") 
  const titleElement = document.createElement("h2")
  titleElement.textContent = `Title: ${title}`
  const authorElement = document.createElement("h2")
  authorElement.textContent = `Author: ${author}`
  const pagesElement = document.createElement("p")
  pagesElement.textContent = `Pages: ${pgs}`
  const statustext = document.createElement("p")
  if (status == "read") {
    statustext.textContent = `Status: ${status}`
  } else if (status == null){
    statustext.textContent = `Status:`
  }
  // Add classes for style
  cardElement.classList.add("card")
  titleElement.classList.add("title")
  authorElement.classList.add("author")
  pagesElement.classList.add("pages")
  statustext.classList.add("statustext")
  cardElement.appendChild(titleElement)
  cardElement.appendChild(authorElement)
  cardElement.appendChild(pagesElement)
  cardElement.appendChild(statustext)
  showcase.appendChild(cardElement)
})