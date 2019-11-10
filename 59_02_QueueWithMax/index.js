// class QueueWithMax {
//   constructor() {
//     this.list = []
//     this.maxList = []
//   }

//   push_back(number) {
//     if (this.maxList.length && this.maxList[this.maxList.length - 1] <= number) {
//       this.maxList.pop()
//     }

//     this.maxList.push(number)
//     this.list.push(number)
//   }

//   pop_front() {
//     const shifted = this.list.shift()
//     if (this.maxList[0] === shifted) {
//       this.maxList.shift()
//     }
//   }

//   max() {
//     return this.maxList[0]
//   }
// }

class QueueWithMax {
  constructor() {
    this.list = []
  }
  
}

// ====================测试代码====================
function Test(testName, queue, expected) {
    if(testName != null)
        console.log("%s begins: ", testName);

    const result = queue.max()
    console.log('result=', result, 'expected=', expected)
    if(result == expected)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

;(function main() {
    const queue = new QueueWithMax();
    // {2}
    queue.push_back(2);
    Test("Test1", queue, 2);

    // {2, 3}
    queue.push_back(3);
    Test("Test2", queue, 3);

    // {2, 3, 4}
    queue.push_back(4);
    Test("Test3", queue, 4);

    // {2, 3, 4, 2}
    queue.push_back(2);
    Test("Test4", queue, 4);

    // {3, 4, 2}
    queue.pop_front();
    Test("Test5", queue, 4);

    // {4, 2}
    queue.pop_front();
    Test("Test6", queue, 4);

    // {2}
    queue.pop_front();
    Test("Test7", queue, 2);

    // {2, 6}
    queue.push_back(6);
    Test("Test8", queue, 6);

    // {2, 6, 2}
    queue.push_back(2);
    Test("Test9", queue, 6);

    // {2, 6, 2, 5}
    queue.push_back(5);
    Test("Test9", queue, 6);

    // {6, 2, 5}
    queue.pop_front();
    Test("Test10", queue, 6);

    // {2, 5}
    queue.pop_front();
    Test("Test11", queue, 5);

    // {5}
    queue.pop_front();
    Test("Test12", queue, 5);

    // {5, 1}
    queue.push_back(1);
    Test("Test13", queue, 5);

    return 0;
})()
