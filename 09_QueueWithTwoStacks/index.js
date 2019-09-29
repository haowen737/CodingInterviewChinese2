// 两个栈实现一个队列
class Stack {
  constructor() {
    this.value = []
  }
  push(element) {
    return this.value.push(element)
  }
  pop() {
    return this.value.pop()
  }
  size() {
    return this.value.length
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  appendTail(element) {
    return this.stack1.push(element)
  }

  deleteHead() {
    if (!this.stack2.size()) {
      while(this.stack1.size() > 0) {
        const element = this.stack1.pop()
        this.stack2.push(element)
      }
    }
    return this.stack2.pop()
  }
}


function test() {
  const queue = new Queue()

  queue.appendTail(1)
  queue.appendTail(2)
  queue.appendTail(3)

  console.log(queue.deleteHead())
  console.log(queue.deleteHead())

  queue.appendTail(4)
  console.log(queue.deleteHead())
  console.log(queue.deleteHead())
}
test()