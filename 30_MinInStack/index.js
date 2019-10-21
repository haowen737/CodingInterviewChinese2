// Passed at leetcode-cn.com
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)

      if (!this.minStack.length || x < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x)
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1])
      }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  return this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

MinStack.prototype.print = function () {
  console.log(this.stack)
  console.log(this.minStack)
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

function Test(testName,stack, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

        console.log(stack.print())
    const gettedmin = stack.getMin()
    if(gettedmin == expected)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");
}

;(function main(){
    // StackWithMin<int> stack;
    const stack = new MinStack()

    stack.push(3);
    Test("Test1", stack, 3);

    stack.push(4);
    Test("Test2", stack, 3);

    stack.push(2);
    Test("Test3", stack, 2);

    stack.push(3);
    Test("Test4", stack, 2);

    stack.pop();
    Test("Test5", stack, 2);

    stack.pop();
    Test("Test6", stack, 3);

    stack.pop();
    Test("Test7", stack, 3);

    stack.push(0);
    Test("Test8", stack, 0);

    return 0;
})()
