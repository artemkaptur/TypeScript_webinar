showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// task 01
enum Category {
    JavaScript, CSS, HTML, TypeScript, Angular
}

function getAllBooks(): any[] {
    let books: any[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

function getBookTitesByCategory(category: Category): Array<string> {
    const allBooks = getAllBooks();
    let titles: string[] = [];

    for (const book of allBooks)
        if (book.category === category) {
            titles.push(book.title);
        }

    return titles;
}

function logFirstAvalable(books: any[]): void {
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

// ==================================
