import createHtmlEL from './createEl.js';

console.log('Hello from app.ts!111');

const h1 = createHtmlEL<HTMLHeadingElement>('span', { class: 'title', href: '/' }, 'Hello world');

document.body.prepend(h1);
