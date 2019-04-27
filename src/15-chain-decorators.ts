const fetch: any;

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Get(url: string) {
  return function GetTodos(target: any, name: string) {
    const hiddenInstanceKey = "_$$" + name + "$$_";

    const init = () => {
      return fetch("https:...").then(response => response.json());
    };

    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true
    });
  };
}

function First() {
  return function GetTodos(target: any, name: string) {
    const hiddenInstanceKey = "_$$" + name + "$$_";
    const prevInit = Object.getOwnPropertyDescriptor(target, name)!.get;
    const init = () => {
      return prevInit!().then(response => response[0]);
    };

    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true
    });
  };
}

class TodoService {
  // Decorators will be called bottom to top
  @First()
  @Get("https://")
  todos: Promise<ITodo[]>;
}

const todoService = new TodoService();
