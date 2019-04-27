interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkListNode<T> {
  value: T;
  next: LinkListNode<T>;
}

let node: LinkListNode<string>;
node.next.next.next.next.next.next.value;

interface Action {
  type: string;
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };

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
