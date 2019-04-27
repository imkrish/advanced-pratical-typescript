interface StringContainer {
  match: any;
}

interface NumberContainer {
  add: any;
}

type Item<T> = {
  id: T;
  container: T extends string ? StringContainer : NumberContainer;
};

let condType: Item<number>;
condType.container.add;

let condType2: Item<string>;
condType2.container.match;

type ArrayFilter<T> = T extends any[] ? T : never;
type StringsOrNumbers = ArrayFilter<
  string | number | string[] | number[] | boolean | object
>;

interface Book {
  id: number;
}

interface TV {
  id: string;
}

interface IItemService {
  // getItem(id: number): Book;
  // getItem(id: string): TV;
  // getItem<T>(id: T): Book | TV;
  getItem<T extends string | number>(id: T): T extends number ? Book : TV;
}

let itemService: IItemService;
