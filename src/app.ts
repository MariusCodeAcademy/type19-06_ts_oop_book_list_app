// import createHtmlEL from './createEl.js';

import Book from './class/book.class.js';
import UI from './class/ui.class.js';

console.log('Hello from app.ts!111');

UI.showBooks();

const b1 = new Book('aplinkk pasauli', 'Z.Vernas', 542874);

UI.addBook(b1);

console.log('b1 ===', b1);
