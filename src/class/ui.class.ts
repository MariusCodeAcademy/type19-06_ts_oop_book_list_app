import createHtmlEL from '../helper/createEl.js';
import { BookInterface } from '../interface/interface.js';
import BookApp from './bookApp.class.js';

export default class UI {
  public static render(booksArr: BookInterface[]): void {
    // issivalom konteineri pries generuojant
    const tabelBodyEl = document.getElementById('book-list') as HTMLTableSectionElement | null;
    if (tabelBodyEl === null) return console.warn('nerastas tabelBodyEl ');
    tabelBodyEl.innerHTML = '';
    // sukti cikla per knygas
    // surasyti jas i html
    booksArr.forEach((bookObj) => UI.createAndAppendOneRow(bookObj));
  }

  private static createAndAppendOneRow(book: BookInterface): void {
    const tabelBodyEl = document.getElementById('book-list') as HTMLTableSectionElement | null;
    const trEl = document.createElement('tr');
    const col1 = createHtmlEL<HTMLTableCellElement>('td', {}, book.title);
    const col2 = createHtmlEL<HTMLTableCellElement>('td', {}, book.author);
    const col3 = createHtmlEL<HTMLTableCellElement>('td', {}, book.isbn.toString());
    const col4 = createHtmlEL<HTMLTableCellElement>('td', {}, book.price?.toString() || '0');
    const col5 = createHtmlEL<HTMLTableCellElement>('td', {});
    const delBtn = createHtmlEL<HTMLButtonElement>(
      'button',
      { class: 'btn btn-danger btn-sm' },
      'X',
    );
    delBtn.addEventListener('click', () => BookApp.deleteBook(book));
    col5.appendChild(delBtn);
    trEl.append(col1, col2, col3, col4, col5);
    if (tabelBodyEl === null) return console.warn('nerastas tabelBodyEl ');

    tabelBodyEl.append(trEl);
  }
}
