// DONT DO VIOLENT
function maxInWindows3(numbers, size) {
  if (!size) return null

  const window = []
  const length = numbers.length
  for (let index = 0; index < length; index++) {
    if (index + size - 1 < length) {
      window.push(Math.max(...numbers.slice(index, index + size)))
    } else {
      break
    }
  }

  return window
}

// MAX STACK -- FAILED 
function maxInWindows2(nums, k) {
  function Stack (limit) {
    this.list = []
    this.maxList = []

    this.push = function (el) {
      
      this.maxList.push(
        (!this.maxList.length || this.maxList[this.maxList.length - 1] < el) ? el : this.maxList[this.maxList.length - 1]
      )

      return this.list.push(el)
    }
    this.getMax = function() {
      return this.maxList[this.maxList.length - 1]
    }
  }

  // const stack = new Stack(k)
  const list = []
  const result = []
  for (let index = 0; index < nums.length; index++) {

    if (list.length && list[list.length - 1] < nums[index]) {
      list.shift()
    }

    list.push(nums[index])

    if (stack.list.length === 3) {
      result.push(list[0])
    }
  }

  return result
}

// OFFICIAL
function maxInWindows(nums, k) {
  if (!k || !nums) return []

  const arr = []
  const list = []
  for (let index = 0, i = 0; i < nums.length; i++) {

    console.log('list=', list, 'index=', index, 'i=', i)

    while(list.length && nums[i] > nums[list[list.length - 1]]) {
      list.pop()
    }

    list.push(i)

    // 判断队列的头元素是否有效;
    if (list[0] === i - k) {
      console.log('--', list, i, k)
      list.shift()
    }

    if (i >= k - 1) {
      arr[index++] = nums[list[0]]
    }
  }

  return arr
}


// ====================测试代码====================
function Test(testName, num, size, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    const result = maxInWindows(num, size);

    // const iterResult = result.begin();
    // const iterExpected = expected.begin();
    // while(iterResult < result.end() && iterExpected < expected.end())
    // {
    //     if(*iterResult != *iterExpected)
    //         break;

    //     ++iterResult;
    //     ++iterExpected;
    // }

    console.log('result=', result, 'expected=', expected)

    if((result == null || expected == null) || (result.toString() === expected.toString()))
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

function Test1()
{
    const num = [ 2, 3, 4, 2, 6, 2, 5, 1 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    const expected = [ 4, 4, 6, 6, 6, 5 ];
    // const vecExpected(expected, expected + sizeof(expected) / sizeof(int));

    const size = 3;

    Test("Test1", num, size, expected);
}

function Test2()
{
    const num = [ 1, 3, -1, -3, 5, 3, 6, 7 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    const expected = [ 3, 3, 5, 5, 6, 7 ];
    // const vecExpected(expected, expected + sizeof(expected) / sizeof(int));

    const size = 3;

    Test("Test2", num, size, expected);
}

// 输入数组单调递增
function Test3()
{
    const num = [ 1, 3, 5, 7, 9, 11, 13, 15 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    const expected = [ 7, 9, 11, 13, 15 ];
    // const vecExpected(expected, expected + sizeof(expected) / sizeof(int));

    const size = 4;

    Test("Test3", num, size, expected);
}

// 输入数组单调递减
function Test4()
{
    const num = [ 16, 14, 12, 10, 8, 6, 4 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    const expected = [ 16, 14, 12 ];
    // const vecExpected(expected, expected + sizeof(expected) / sizeof(int));

    const size = 5;

    Test("Test4", num, size, expected);
}

// 滑动窗口的大小为1
function Test5()
{
    const num = [ 10, 14, 12, 11 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    const expected = [ 10, 14, 12, 11 ];
    // const vecExpected(expected, expected + sizeof(expected) / sizeof(int));

    const size = 1;

    Test("Test5", num, size, expected);
}

// 滑动窗口的大小等于数组的长度
function Test6()
{
    const num = [ 10, 14, 12, 11 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    const expected = [ 14 ];
    // const vecExpected(expected, expected + sizeof(expected) / sizeof(int));

    const size = 4;

    Test("Test6", num, size, expected);
}

// 滑动窗口的大小为0
function Test7()
{
    const num = [ 10, 14, 12, 11 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    // const vecExpected;

    const size = 0;

    Test("Test7", num, size, null);
}

// 滑动窗口的大小大于输入数组的长度
function Test8()
{
    const num = [ 10, 14, 12, 11 ];
    // const vecNumbers(num, num + sizeof(num) / sizeof(int));

    // const vecExpected;

    const size = 5;

    Test("Test8", num, size, null);
}

// 输入数组为空
function Test9()
{
    // const vecNumbers;
    // const vecExpected;

    const size = 5;

    Test("Test9", [], size, null);
}

;(function main() {
    Test1();
    // Test2();
    // Test3();
    // Test4();
    // Test5();
    // Test6();
    // Test7();
    // Test8();
    // Test9();

    return 0;
})()
