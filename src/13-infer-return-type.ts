function generateId(seed: number) {
  return seed + 5;
}

type AReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type ID = ReturnType<typeof generateId>;

const id: string = generateId(5);

function lookupEntity(id: ID) {}

type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;

const promises = [Promise.resolve(1123), Promise.resolve("eiei")];
let ReturnPromisesType: UnpackPromise<typeof promises>;
