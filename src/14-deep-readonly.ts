type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };

type DeepReadonly<T> = T extends (infer E)[][]
  ? ReadonlyArray<ReadonlyArray<DeepReadonlyObject<E>>>
  : T extends (infer E)[]
  ? ReadonlyArray<DeepReadonlyObject<E>>
  : T extends object
  ? DeepReadonlyObject<T>
  : T;

interface ITodo {
  task: string;
  done: boolean;
}

interface IRootState {
  userId: string;
  showCompletedOnly: boolean;
  todoTypes: string[];
  todos: ITodo[];
  iconGrid: string[][];
}

type ReadonlyRootState = DeepReadonly<IRootState>;

let rootState: ReadonlyRootState; // Typescript Service will prevent this variable from mutation
