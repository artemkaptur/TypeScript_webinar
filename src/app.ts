import { Category } from './enums';
import { Book, Logger as DamageLogger, Author, Librarian } from './intefaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import RefBook from './Encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// task 01-03 =============================================
function getAllBooks(): Book[] {
    let books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

function getBookTitesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    let titles: string[] = [];

    for (const book of allBooks)
        if (book.category === category) {
            titles.push(book.title);
        }

    return titles;
}

function getBookById(id: number): Book {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}

function logFirstAvalable(books: any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvalableBookTitle: string = '';

    for (const book of books) {
        if (book.available) {
            firstAvalableBookTitle = book.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Avalable Book: ${firstAvalableBookTitle}`);
}

function logBookTitles(titles: string[]): void {
    titles.forEach(value => console.log(value));
}

logFirstAvalable(getAllBooks());
logBookTitles(getBookTitesByCategory(Category.JavaScript));
console.log(getBookById(2));
// ================================================

// task 04-05 =================================================
function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name is: ${name}`)

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name is: ${customer}`);
    const titles: string[] = []

    for (const id of bookIDs) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}

let myID = createCustomerID('Bob', 8);
console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = createCustomerID;
myID = idGenerator('Billy', 88);
console.log(myID);

createCustomer(`Bob`);
createCustomer(`Bob`, 20);
createCustomer(`Bob`, 20, 'Minsk')
console.log(getBookTitesByCategory());
logFirstAvalable();

const myBooks = checkoutBooks('Bob', 1, 2, 3);
myBooks.forEach(title => console.log(title))
// ================================================

// task 06 ================================================
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookproperty: any): string[] {
    const allBooks = getAllBooks();

    if (typeof bookproperty === 'string') {
        return allBooks
            .filter(book => book.author === bookproperty)
            .map(book => book.title);
    }
    else if (typeof bookproperty === 'boolean') {
        return allBooks
            .filter(book => book.available === bookproperty)
            .map(book => book.title);
    }
}

console.log(getTitles(false));
// ===========================================================

// task 07-08 ===================================================
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    year: 2015,
    copies: 3,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
}
printBook(myBook);
myBook.markDamaged('dropped into water');

const logDamage: DamageLogger = (damage: string) => console.log(`Damage: ${damage}`);
logDamage(`Stalin`);
// ===========================================================

// task 09-10 ===================================================
const favoriteAouthor: Author = {
    name: 'Bob',
    email: 'Bob@gmail.com',
    numBooksPublished: 10
}

// const favoriteLibrarian: Librarian = {
//     name: 'Billy',
//     email: 'Billy@gmail.com',
//     department: 'Classical',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`)
// }

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';
favoriteLibrarian.assistCustomer('Boris');
// ===========================================================

// task 11-13 ===================================================
// const ref = new ReferenceItem('my title', 2000);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);

const refBook: ReferenceItem = new RefBook('Blabla', 1999, 20);
refBook.printItem();
// ===========================================================
