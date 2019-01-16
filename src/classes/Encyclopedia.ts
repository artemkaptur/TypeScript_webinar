import { ReferenceItem } from './ReferenceItem';

export class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, protected edition: number) {
        super(title, year);
    }
    printItem(): void {
        super.printItem();
        console.log(`Edetion:${this.edition} (${this.year})`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
