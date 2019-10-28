function FindGreatestSumOfSubArray(numbers) {
  if (!numbers || !numbers.length) return 0
  let sum = null
  let dummy = 0

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index]
    if (dummy <= 0) {
      dummy = number
    } else {
      dummy+= number
    }

    if (sum === null || sum < dummy) {
      sum = dummy
    }

  }
  return sum
}
// ====================测试代码====================
function Test(testName, pData, nLength, expected, expectedFlag)
{
    if(testName != null)
        console.log("%s begins: \n", testName);

    const result = FindGreatestSumOfSubArray(pData, nLength);
    if(result == expected)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");
}

// 1, -2, 3, 10, -4, 7, 2, -5
function Test1()
{
    const data = [1, -2, 3, 10, -4, 7, 2, -5];
    Test("Test1", data, data.length, 18, false);
}

// 所有数字都是负数
// -2, -8, -1, -5, -9
function Test2()
{
    const data = [-2, -8, -1, -5, -9];
    Test("Test2", data, data.length, -1, false);
}

// 所有数字都是正数
// 2, 8, 1, 5, 9
function Test3()
{
    const data = [2, 8, 1, 5, 9];
    Test("Test3", data, data.length, 25, false);
}

// 无效输入
function Test4()
{
    Test("Test4", null, 0, 0, true);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();

    return 0;
})()

