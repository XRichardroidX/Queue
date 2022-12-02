const Queue = require('./challenge')
const assert = require('assert')

describe('UnitTests', function () { 
  it('add_and_remove', function () {
    // Failure message: 
    // The order of method calls is: queue.add(3) -> queue.remove
    const queue = new Queue()
    queue.add(3)

    assert(queue.remove() === 3)
  })

  it('multiple_adds_and_removes', function () {
    // Failure message: 
    // The order of method calls is: queue.add(3) -> queue.remove -> queue.add(5) -> queue.add(7) -> queue.remove -> queue.remove
    const queue = new Queue()
    queue.add(3)
    assert(queue.remove() === 3)

    queue.add(5)
    queue.add(7)
    assert(queue.remove() === 5)
    assert(queue.remove() === 7)
  })

  it('remove_on_empty_queue', function () {
    // Failure message: 
    // The order of method calls is: queue.remove
    const queue = new Queue()
    assert(queue.remove() === -1)
  })
})
