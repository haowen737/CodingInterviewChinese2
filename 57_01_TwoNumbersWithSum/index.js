function FindNumbersWithSum(data, length, sum) {
  if (!data || !length) return [ null, null ]

  let left = 0
  let right = length - 1
  while (left < right) {
    const currentSum = data[left] + data[right]
    if (currentSum === sum) return [data[left], data[right]]
    if (currentSum > sum) right--
    if (currentSum < sum) left++
  }

  return [ null, null ]
}
// ====================测试代码====================
function Test(testName, data, length, sum, expectedReturn)
{
    if(testName != null)
        console.log("%s begins: ", testName);
    
    const [ num1, num2 ] = FindNumbersWithSum(data, length, sum);
    const result = !!(num1 && num2)
    if(result == expectedReturn)
    {
        if(result)
        {
            if(num1 + num2 == sum)
                console.log("Passed. \n");
            else
                console.log("FAILED. \n");
        }
        else
            console.log("Passed. \n");
    }
    else
        console.log("FAILED. \n");
}

// 存在和为s的两个数字，这两个数字位于数组的中间
function Test1()
{
    const data = [1, 2, 4, 7, 11, 15];
    Test("Test1", data, data.length, 15, true);
}

// 存在和为s的两个数字，这两个数字位于数组的两段
function Test2()
{
    const data = [1, 2, 4, 7, 11, 16];
    Test("Test2", data, data.length, 17, true);
}

// 不存在和为s的两个数字
function Test3()
{
    const data = [1, 2, 4, 7, 11, 16];
    Test("Test3", data, data.length, 10, false);
}

// 鲁棒性测试
function Test4()
{
    Test("Test4", null, 0, 0, false);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();

    return 0;
})()