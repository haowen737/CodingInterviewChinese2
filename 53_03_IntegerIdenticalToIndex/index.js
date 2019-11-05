function GetNumberSameAsIndex(numbers, length) {
  if (!numbers || !length) return -1

  let left = 0
  let right = length - 1

  while(left <= right) {
    const middle = left + right >> 1
    if (numbers[middle] === middle) {
      return middle
    } else {
      if (numbers[middle] > middle) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
  }

  return -1
}
// ====================测试代码====================
function Test(testName, numbers, length, expected)
{
    if(GetNumberSameAsIndex(numbers, length) == expected)
        console.log("%s passed.\n", testName);
    else
        console.log("%s FAILED.\n", testName);
}

function Test1()
{
    const numbers = [ -3, -1, 1, 3, 5 ];
    const expected = 3;
    Test("Test1", numbers, numbers.length, expected);
}

function Test2()
{
    const numbers = [ 0, 1, 3, 5, 6 ];
    const expected = 0;
    Test("Test2", numbers, numbers.length, expected);
}

function Test3()
{
    const numbers = [ -1, 0, 1, 2, 4 ];
    const expected = 4;
    Test("Test3", numbers, numbers.length, expected);
}

function Test4()
{
    const numbers = [ -1, 0, 1, 2, 5 ];
    const expected = -1;
    Test("Test4", numbers, numbers.length, expected);
}

function Test5()
{
    const numbers = [ 0 ];
    const expected = 0;
    Test("Test5", numbers, numbers.length, expected);
}

function Test6()
{
    const numbers = [ 10 ];
    const expected = -1;
    Test("Test6", numbers, numbers.length, expected);
}

function Test7()
{
    Test("Test7", null, 0, -1);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();

    return 0;
})()