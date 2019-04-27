interface IPet {
  name: string;
  age: number;
  favorithPark?: string;
}

// The use of + and - signs
// -? -> remove all ? so they are all required
type ReadonlyPet = { +readonly [K in keyof IPet]-?: IPet[K] };

const pet: IPet = { name: "Gongong", age: 5 };
const readOnlyPet: ReadonlyPet = { name: "Buttons", favorithPark: "test" };

pet.age = 6;
readOnlyPet.age = 6;
