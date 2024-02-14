// import createHtmlEL from './createEl.js';

console.log('Hello from app.ts!111');

// const h1 = createHtmlEL<HTMLHeadingElement>('span', { class: 'title', href: '/' }, 'Hello world');

// document.body.prepend(h1);

// BookInterface

interface BookInterface {
  title: string;
  author: string;
  isbn: number;
}

// Book Class
class Book implements BookInterface {
  constructor(public title: string, public author: string, public isbn: number) {}
}

const b1 = new Book('aplinkk pasauli', 'Z.Vernas', 542874);
console.log('b1 ===', b1);
