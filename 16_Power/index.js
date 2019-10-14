function Power(base, exponent) {
  // let result = 1
  let dummyexponent = exponent
  dummyexponent = dummyexponent >= 0 ? dummyexponent : -dummyexponent

  if (base === 0 && exponent < 0) return 0

  // while(dummyexponent > 0) {
  //   result = result * base
  //   --dummyexponent
  // }
  let result = PowerCore(base, dummyexponent)

  return exponent > 0 ? result : (1 / result)
}

function PowerCore(base, exponent) {
  if (exponent === 0) return 1
  if (exponent === 1) return base
  let result = PowerCore(base, exponent >> 1)
  console.log(base, exponent, result)
  result = result * result

  if ((exponent % 2) === 1) {
    result = result * base
  }
  return result
}

// ====================测试代码====================
function Test(testName, base, exponent, expectedResult, expectedFlag)
{
    const result = Power(base, exponent);
    console.log('result-', result)
    if (result === expectedResult)
        console.log(testName, " passed");
    else
        console.log(testName, " FAILED");
}

;(function main()
{
    // 底数、指数都为正数
    Test("Test1", 2, 3, 8, false);

    // 底数为负数、指数为正数
    Test("Test2", -2, 3, -8, false);

    // 指数为负数
    Test("Test3", 2, -3, 0.125, false);

    // 指数为0
    Test("Test4", 2, 0, 1, false);

    // 底数、指数都为0
    Test("Test5", 0, 0, 1, false);

    // 底数为0、指数为正数
    Test("Test6", 0, 4, 0, false);

    // 底数为0、指数为负数
    Test("Test7", 0, -4, 0, true);

    return 0;
})();
