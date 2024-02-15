// import createHtmlEL from './createEl.js';

import Book from './class/book.class.js';
import BookApp from './class/bookApp.class.js';
import MyAlert, { PermanentAlert } from './class/myAlert.class.js';

console.log('Hello from app.ts!111');

BookApp.showBooks();

const b1 = new Book('aplinkk pasauli', 'Z.Vernas', 542874, 10.99);

BookApp.addBook(b1);

// nusitaikom i forma
const formEl = document.getElementById('book-form') as HTMLFormElement | null;
const titleEl = document.getElementById('title') as HTMLInputElement | null;
const authorEl = document.getElementById('author') as HTMLInputElement | null;
const isbnEl = document.getElementById('isbn') as HTMLInputElement | null;
const priceEl = document.getElementById('price') as HTMLInputElement | null;

// dedam evet listeneri
formEl?.addEventListener('submit', (event: SubmitEvent): void => {
  event.preventDefault();
  if (!titleEl || !authorEl || !isbnEl || !priceEl) return console.warn('nera input elemento/u');

  // validation
  if (
    [
      titleEl.value.trim(),
      authorEl.value.trim(),
      isbnEl.value.trim(),
      priceEl.value.trim(),
    ].includes('')
  ) {
    // new MyAlert('All fields required', 'danger');
    new PermanentAlert('All fields required');
    return;
  }

  // sukuriam nauja knyga
  const newBook = new Book(
    titleEl.value,
    authorEl.value,
    isbnEl.valueAsNumber,
    priceEl.valueAsNumber,
  );
  console.log('newBook ===', newBook);
  // issivalom inputus
  BookApp.addBook(newBook);
});
