import createHtmlEL from '../helper/createEl.js';
import { BookInterface } from '../interface/interface.js';
import MyAlert from './MyAlert.class.js';

export default class UI {
  private static booksArr: BookInterface[] = [
    {
      title: 'Book One',
      author: 'John Doe',
      isbn: 3434434,
    },
    {
      title: 'Book Two',
      author: 'Jane Doe',
      isbn: 111111,
    },
    {
      title: 'Book Tryys',
      author: 'Serbentautas Doe',
      isbn: 222222,
    },
  ];

  public static showBooks() {
    UI.render();
    new MyAlert('Books loaded', 'success');
  }

  private static render(): void {
    // issivalom konteineri pries generuojant
    const tabelBodyEl = document.getElementById('book-list') as HTMLTableSectionElement | null;
    if (tabelBodyEl === null) return console.warn('nerastas tabelBodyEl ');
    tabelBodyEl.innerHTML = '';
    // sukti cikla per knygas
    // surasyti jas i html
    UI.booksArr.forEach((bookObj) => UI.createAndAppendOneRow(bookObj));
  }

  private static createAndAppendOneRow(book: BookInterface): void {
    const tabelBodyEl = document.getElementById('book-list') as HTMLTableSectionElement | null;
    const trEl = document.createElement('tr');
    const col1 = createHtmlEL<HTMLTableCellElement>('td', {}, book.title);
    const col2 = createHtmlEL<HTMLTableCellElement>('td', {}, book.author);
    const col3 = createHtmlEL<HTMLTableCellElement>('td', {}, book.isbn.toString());
    const col4 = createHtmlEL<HTMLTableCellElement>('td', {});
    const delBtn = createHtmlEL<HTMLButtonElement>(
      'button',
      { class: 'btn btn-danger btn-sm' },
      'X',
    );
    delBtn.addEventListener('click', () => UI.deleteBook(book));
    col4.appendChild(delBtn);
    trEl.append(col1, col2, col3, col4);
    if (tabelBodyEl === null) return console.warn('nerastas tabelBodyEl ');

    tabelBodyEl.append(trEl);
  }

  public static addBook(book: BookInterface): void {
    // patikrinti ar jau yra tokia knyga
    const yraTokiaKnyga = UI.booksArr.some((bObj) => bObj.isbn === book.isbn);
    if (yraTokiaKnyga) {
      // jei yra paalertinti klaida
      new MyAlert(`"${book.title}" jau yra irasyta`, 'warning');
      return;
    }
    // jei nera prideti knyga
    UI.booksArr.push(book);
    console.table(UI.booksArr);
    UI.render();
    new MyAlert('Book added', 'success');
  }

  private static deleteBook(book: BookInterface): void {
    console.log('book delete ===', book);
    const isbnToDelete = book.isbn;
    // 1 istrinti is knygu masyvo knyga kuris sutampa su book (isbn)
    UI.booksArr = UI.booksArr.filter((bObj) => bObj.isbn !== isbnToDelete);
    // 2 sugeneruoti sarasa is naujo
    UI.render();
    // 3 iskviesti alerta kad knyga istrinta
    // atspaustini knygos title kuri istrinta
    new MyAlert(`"${book.title}" was Deleted`, 'danger');
  }
}
