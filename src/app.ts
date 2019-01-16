import { Category } from './enums';
import { Book, Logger as DamageLogger, Author, Librarian, Magazine } from './intefaces';
import { Encyclopedia, UniversityLibrarian, ReferenceItem } from './classes/index';
import { purge, logFirstAvalable, getAllBooks, logBookTitles, getBookTitesByCategory, getBookById, createCustomerID, createCustomer, getTitles, printBook, checkoutBooks, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './lib/util-functions';
import Shelf from './shelf';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// task 01-03 =============================================
logFirstAvalable(getAllBooks());
logBookTitles(getBookTitesByCategory(Category.JavaScript));
console.log(getBookById(2));
// ================================================

// task 04-05 =================================================
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
console.log(getTitles(false));
// ===========================================================

// task 07-08 ===================================================
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

const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';
favoriteLibrarian.assistCustomer('Boris');
favoriteLibrarian.assistFaculty = () => console.log('!!!!!!');
favoriteLibrarian.assistFaculty();
try {
    favoriteLibrarian.teachCommunity = () => console.log('???????');
}
catch (err) {
    console.log(err);
}
favoriteLibrarian.teachCommunity();
// ===========================================================

// task 11-13 ===================================================
// const ref = new ReferenceItem('my title', 2000);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);

const refBook: ReferenceItem = new Encyclopedia('Blabla', 1999, 20);
refBook.printItem();
// ===========================================================

// task task 18-20 ===================================================
const inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }

];

// let result = purge(inventory);
// console.log(result);
// let result1 = purge([1, 2, 3, 4, 5]);
// console.log(result1);

const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook: Book = bookShelf.getFirst();
console.log(firstBook);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
const firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine);

magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));
// ===========================================================

// task 23-24 ===========================================================
console.log('Begin...');
getBooksByCategory(Category.JavaScript, logCategorySearch);
console.log('End');

console.log('Begin...');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles);
        return getTitles.length;
    })
    .then(numOfBooks => console.log(numOfBooks))
    .catch(err => console.log(err));
console.log('End');
// ===========================================================

// task 23-24 ===========================================================
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');
// ===========================================================
