import { Books } from "./book";

//1.function to print high rated bokks with genre >4.5
const highRatedBooks=()=> {
    const highRatedBooks=Books.filter(book=>book.Rating>4.5);
    highRatedBooks.forEach(book=>console.log(book.title));
};
// 2.rint books details
const bookDetails=()=>{
    Books.forEach(({title,Author,Rating,Genre})=>{console.log('Author:${author},Title:${title},Genre:${genre},Rating:${Rating}')});
};
// 3. A function that prints book titles with the genre "fiction"
const printFictionbooks=()=>{
    const fictionbooks=Books.filter(books=>books.genre.toLowerCase()==="Fiction");
    fictionbooks.forEach(books=>console.log(books.title));
}
// 4. A function that display an array of book authors.
const displaybooks=()=>{
    const authors=Books.map(books=>books.Author)
    console.log(authors);
}

//Now Testing of Functions
console.log("Books with rating higher than 4.5:");
highRatedBooks();
console.log("The details of book:");
bookDetails();
console.log("Book details with fiction:");
printFictionbooks();
console.log("Print book details:");
displaybooks();






