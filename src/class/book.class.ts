import { BookInterface } from '../interface/interface.js';

// Book Class aprasoma ir exportuojama is cia
export default class Book implements BookInterface {
  constructor(public title: string, public author: string, public isbn: number) {}
}
