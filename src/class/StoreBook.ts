import { BookInterface } from '../interface/interface.js';

export default class StoreBooks {
  private static storageKey: string = 'MyBooks';

  public static getData(): BookInterface[] {
    const gotFromStorage = localStorage.getItem(StoreBooks.storageKey);
    if (!gotFromStorage) return [];

    // atversti is json i masyva
    return JSON.parse(gotFromStorage);
  }

  public static saveData(data: BookInterface[]) {
    localStorage.setItem(StoreBooks.storageKey, JSON.stringify(data));
  }
}
