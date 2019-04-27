interface Action {
  type: string;
}

let action1: Action = { type: "LOGIN" };
let action2: Action = { type: "LOAD_POSTS" };

interface ListNode<T> {
  value: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}

let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null
};

let actionNode2: ListNode<Action> = {
  value: action2,
  next: null,
  prev: actionNode1
};

actionNode1.next = actionNode2;

let currentNode = actionNode2;
do {
  console.log(currentNode.value);
  currentNode = currentNode.prev;
} while (currentNode);

const numbers = [1, 2, 3, 4];
for (const number of numbers) {
  console.log(number);
}

class BackwardsActionIterator implements IterableIterator<Action> {
  constructor(private currentActionNode: ListNode<Action>) {}

  [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }

  next(value?: any): IteratorResult<Action> {
    const curr = this.currentActionNode;
    if (!curr || !curr.value) {
      return { value: null!, done: true };
    }
    // 1. move through each item in the list
    this.currentActionNode = curr.prev;
    // 2. return each item
    return { value: curr.value, done: false };
  }
}

const backwardList = new BackwardsActionIterator(actionNode2);

for (const action of backwardList) {
  console.log(action);
}
