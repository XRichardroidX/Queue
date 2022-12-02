# Queue

This is a queue which works with the FIFO principle of data manipulation.

## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.js](./challenge.js) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
5. _You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge._

## Challenge description

### Queue

Create a Queue with the two methods add and remove. Use your LinkedList class to keep track of the elements internally.
In this challenge, there's one more detail: If remove is called on the empty Queue, return -1.

#### Example

This is an example of a test case:

```
const queue = new Queue()
queue.add(3)
queue.add(5)
console.log(queue.remove)
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1
```

The numbers come out in the order they went in, and the final remove returns a -1 since the queue is empty.

### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
