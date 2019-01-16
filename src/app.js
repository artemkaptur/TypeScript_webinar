var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
showHello('greeting', 'TypeScript');
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = "Hello from " + name;
}
// task 01-03 =============================================
var Category;
(function (Category) {
    Category[Category["JavaScript"] = 0] = "JavaScript";
    Category[Category["CSS"] = 1] = "CSS";
    Category[Category["HTML"] = 2] = "HTML";
    Category[Category["TypeScript"] = 3] = "TypeScript";
    Category[Category["Angular"] = 4] = "Angular";
})(Category || (Category = {}));
function getAllBooks() {
    var books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}
function getBookTitesByCategory(category) {
    if (category === void 0) { category = Category.JavaScript; }
    var allBooks = getAllBooks();
    var titles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    return titles;
}
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.find(function (book) { return book.id === id; });
}
function logFirstAvalable(books) {
    if (books === void 0) { books = getAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvalableBookTitle = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            firstAvalableBookTitle = book.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Avalable Book: " + firstAvalableBookTitle);
}
function logBookTitles(titles) {
    titles.forEach(function (value) { return console.log(value); });
}
logFirstAvalable(getAllBooks());
logBookTitles(getBookTitesByCategory(Category.JavaScript));
console.log(getBookById(2));
// ================================================
// task 04-05 =================================================
function createCustomerID(name, id) {
    return "" + name + id;
}
function createCustomer(name, age, city) {
    console.log("Customer name is: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function checkoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Customer name is: " + customer);
    var titles = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}
var myID = createCustomerID('Bob', 8);
console.log(myID);
var idGenerator;
idGenerator = createCustomerID;
myID = idGenerator('Billy', 88);
console.log(myID);
createCustomer("Bob");
createCustomer("Bob", 20);
createCustomer("Bob", 20, 'Minsk');
console.log(getBookTitesByCategory());
logFirstAvalable();
var myBooks = checkoutBooks('Bob', 1, 2, 3);
myBooks.forEach(function (title) { return console.log(title); });
function getTitles(bookproperty) {
    var allBooks = getAllBooks();
    if (typeof bookproperty === 'string') {
        return allBooks
            .filter(function (book) { return book.author === bookproperty; })
            .map(function (book) { return book.title; });
    }
    else if (typeof bookproperty === 'boolean') {
        return allBooks
            .filter(function (book) { return book.available === bookproperty; })
            .map(function (book) { return book.title; });
    }
}
console.log(getTitles(false));
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
var myBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    year: 2015,
    copies: 3,
    pages: 200,
    markDamaged: function (reason) { return console.log("Damaged: " + reason); }
};
printBook(myBook);
myBook.markDamaged('dropped into water');
var logDamage = function (damage) { return console.log("Damage: " + damage); };
logDamage("Stalin");
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteAouthor = {
    name: 'Bob',
    email: 'Bob@gmail.com',
    numBooksPublished: 10
};
// const favoriteLibrarian: Librarian = {
//     name: 'Billy',
//     email: 'Billy@gmail.com',
//     department: 'Classical',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`)
// }
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';
favoriteLibrarian.assistCustomer('Boris');
// ===========================================================
// task 11-12 ===================================================
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new referenceItem...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log("Department: " + ReferenceItem.department);
        console.log(this.title + " was published in " + this.year);
    };
    ReferenceItem.department = 'New department';
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edetion:" + this.edition + " (" + this.year + ")");
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
// const ref = new ReferenceItem('my title', 2000);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);
var refBook = new Encyclopedia('Blabla', 1999, 20);
refBook.printItem();
// ===========================================================
