const numbers = [2, 1];

const someObject = {
  id: 21,
  name: "Keerati"
};

const someBoolean = true;

type FlattenArray<T extends any[]> = T[number];
type FlattenObject<T extends object> = T[keyof T];

type Flatten<T> = T extends any[]
  ? T[number]
  : T extends object
  ? T[keyof T]
  : T;

const x: Flatten<typeof numbers>;
const y: Flatten<typeof someObject>;
const z: Flatten<typeof someBoolean>;
