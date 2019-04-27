interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
};

let animalInterface: IAnimal;
let animalType: AnimalTypeAlias;

animalInterface = animalType;
animalType = animalInterface;

// ----------------------------------------------------------------

type Eat = (food: string) => void;
type AnimalList = string[];

interface IEat {
  (food: string): void;
}

interface IAnimalList {
  [index: number]: string;
}

const x: IEat = (x: string) => {};
const y: Eat = (x: string) => {};

const animals: AnimalList = ["12", "23"];
const animals2: IAnimalList = ["12", "23"];

// ----------------------------------------------------------------

type Human = IMale & IFemale;

interface IHuman extends IMale, IFemale {}

interface IMale {
  power: string;
}

interface IFemale {
  mood: string;
}

let me: Human;

me.mood;
me.power;

let you: IHuman;
you.mood;
you.power;

type YO2 = IHuman & Human;
interface YO extends YO2 {}
class YO3 implements Human, IHuman {}

type HumanType = IMale | IFemale;
interface What extends HumanType {}
class Why implements HumanType {}

// ----------------------------------------------------------------
interface IFOO {
  name: string
}
// This will extends IFOO
interface IFOO {
  age: string
}

const foo: IFOO;
foo.age
foo.name

const XType = string[];
const XType = number[];
