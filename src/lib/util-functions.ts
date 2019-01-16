import { Book, LibMgrCallback } from '../intefaces';
import { Category } from '../enums';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Book[] {
    let books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

export function getBookTitesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    let titles: string[] = [];

    for (const book of allBooks)
        if (book.category === category) {
            titles.push(book.title);
        }

    return titles;
}

export function getBookById(id: number): Book {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}

export function logFirstAvalable(books: any[] = getAllBooks()): void {
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

export function logBookTitles(titles: string[]): void {
    titles.forEach(value => console.log(value));
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name is: ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name is: ${customer}`);
    const titles: string[] = [];

    for (const id of bookIDs) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookproperty: any): string[] {
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

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books were found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message ${err.message}`);
    } else {
        console.log(titles);
    }
}