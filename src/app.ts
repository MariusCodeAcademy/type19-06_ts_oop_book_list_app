// import createHtmlEL from './createEl.js';

import Book from './class/book.class.js';
import BookApp from './class/bookApp.class.js';

console.log('Hello from app.ts!111');

BookApp.showBooks();

const b1 = new Book('aplinkk pasauli', 'Z.Vernas', 542874);

BookApp.addBook(b1);

// nusitaikom i forma
const formEl = document.getElementById('book-form') as HTMLFormElement | null;
const titleEl = document.getElementById('title') as HTMLInputElement | null;
const authorEl = document.getElementById('author') as HTMLInputElement | null;
const isbnEl = document.getElementById('isbn') as HTMLInputElement | null;

// dedam evet listeneri
formEl?.addEventListener('submit', (event: SubmitEvent): void => {
  event.preventDefault();
  if (!titleEl || !authorEl || !isbnEl) return console.warn('nera input elemento/u');

  // TODO: validation

  // sukuriam nauja knyga
  const newBook = new Book(titleEl.value, authorEl.value, isbnEl.valueAsNumber);
  console.log('newBook ===', newBook);
  // issivalom inputus
  BookApp.addBook(newBook);
});
