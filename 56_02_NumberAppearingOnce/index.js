function FindNumberAppearingOnce(numbers, length) {
  const bitSum = new Array(32).fill(0)

  for (let i = 0; i < length; i++) {
    let number = numbers[i]
    let bitMask = 1
    for (let j = 0; j < bitSum.length; j++) {
      const bit = number & bitMask
      if (bit !== 0) {
        bitSum[j] += bit
      }
      bitMask = bitMask << 1
    }
  }

  for (let index = 0; index < bitSum.length; index++) {
    bitSum[index] = bitSum[index] % 3 ? 1 : 0
  }

  return parseInt(bitSum.reverse().join(''), 2)
}
// ====================测试代码====================
function Test(testName, numbers, length, expected)
{
    const result = FindNumberAppearingOnce(numbers, length);
    console.log('result=', result)
    if(result == expected)
        console.log("%s passed.\n", testName);
    else
        console.log("%s FAILED.\n", testName);
}

// 所有数字都是正数，唯一的数字是最小的
function Test1()
{
    const numbers = [ 1, 1, 2, 2, 2, 1, 3 ];
    const expected = 3;
    Test("Test1", numbers, numbers.length, expected);
}

// 所有数字都是正数，唯一的数字的大小位于中间
function Test2()
{
    const numbers = [ 4, 3, 3, 2, 2, 2, 3 ];
    const expected = 4;
    Test("Test2", numbers, numbers.length, expected);
}

// 所有数字都是正数，唯一的数字是最大的
function Test3()
{
    const numbers = [ 4, 4, 1, 1, 1, 7, 4 ];
    const expected = 7;
    Test("Test3", numbers, numbers.length, expected);
}

// 唯一的数字是负数
function Test4()
{
    const numbers = [ -10, 214, 214, 214 ];
    const expected = -10;
    Test("Test4", numbers, numbers.length, expected);
}

// 除了唯一的数字，其他数字都是负数
function Test5()
{
    const numbers = [ -209, 3467, -209, -209 ];
    const expected = 3467;
    Test("Test5", numbers, numbers.length, expected);
}

// 重复的数字有正数也有负数
function Test6()
{
    const numbers = [ 1024, -1025, 1024, -1025, 1024, -1025, 1023 ];
    const expected = 1023;
    Test("Test6", numbers, numbers.length, expected);
}

// 所有数字都是负数
function Test7()
{
    const numbers = [ -1024, -1024, -1024, -1023 ];
    const expected = -1023;
    Test("Test7", numbers, numbers.length, expected);
}

// 唯一的数字是0
function Test8()
{
    const numbers = [ -23, 0, 214, -23, 214, -23, 214 ];
    const expected = 0;
    Test("Test8", numbers, numbers.length, expected);
}

// 除了唯一的数字，其他数字都是0
function Test9()
{
    const numbers = [ 0, 3467, 0, 0, 0, 0, 0, 0 ];
    const expected = 3467;
    Test("Test9", numbers, numbers.length, expected);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();
    Test8();
    Test9();

    return 0;
})()
