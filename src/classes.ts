import { Librarian } from './intefaces';

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new referenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    static department: string = 'New department';

    constructor(public title: string, public year: number) {
        console.log('Creating a new referenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`${this.title} was published in ${this.year}`);
    }

    abstract printCitation(): void;
}

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

export { UniversityLibrarian, ReferenceItem };
