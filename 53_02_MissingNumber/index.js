function core(numbers, start, end) {
  if (start > end) return

  const middle = Math.floor((start + end) / 2)
  console.log(start, end, middle)

  if (numbers[middle] === middle) {
    if (middle === end) return middle + 1

    return core(numbers, middle + 1, end)
  }
  
  if (numbers[middle] > middle) {
    if (numbers[middle - 1] === middle - 1 || middle === 0) {
      return middle
    }
    return core(numbers, start, middle - 1)
  } 

  return -1
}

function GetMissingNumber2(numbers, length) {
  if (!numbers || !length) return -1

  return core(numbers, 0, length - 1)
}

function GetMissingNumber(numbers, length) {
  if (!numbers || !length) return -1
  
  let left = 0
  let right = length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (middle === numbers[middle]) {
      left = middle + 1
    } else {
      if (middle === 0 || numbers[middle - 1] === middle - 1) {
        return middle
      }
      right = middle - 1
    }
  }

  if (left === length) return left

  return -1
  
}

// ====================测试代码====================
function Test(testName, numbers, length, expected)
{
    if(testName != null) {

      const result = GetMissingNumber(numbers, length);

      console.log("%s begins: ", testName, 'result=', result, 'expected=', expected);

      if(result == expected)
          console.log("Passed.\n");
      else
          console.log("Failed.\n");
    }
}

// 缺失的是第一个数字0
function Test1()
{
    const numbers = [ 1, 2, 3, 4, 5 ];
    const expected = 0;
    Test("Test1", numbers, numbers.length, expected);
}

// 缺失的是最后一个数字
function Test2()
{
    const numbers = [ 0, 1, 2, 3, 4 ];
    const expected = 5;
    Test("Test2", numbers, numbers.length, expected);
}

// 缺失的是中间某个数字0
function Test3()
{
    const numbers = [ 0, 1, 2, 4, 5 ];
    const expected = 3;
    Test("Test3", numbers, numbers.length, expected);
}

// 数组中只有一个数字，缺失的是第一个数字0
function Test4()
{
    const numbers = [ 1 ];
    const expected = 0;
    Test("Test4", numbers, numbers.length, expected);
}

// 数组中只有一个数字，缺失的是最后一个数字1
function Test5()
{
    const numbers = [ 0 ];
    const expected = 1;
    Test("Test5", numbers, numbers.length, expected);
}

// 空数组
function Test6()
{
    const expected = -1;
    Test("Test6", null, 0, expected);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();

    return 0;
})()
