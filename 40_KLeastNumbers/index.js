/**
 * GetLeastNumbers_Solution1 Code passed at leetcode-cn.cn
 */
function Partition2(numbers, start, end, k) {
  let index = start
  for (let i = start + 1; i <= end; i++) {
    if (numbers[i] < numbers[end]) {
      const dummy = numbers[i]
      numbers[i] = numbers[end]
      numbers[end] = dummy
 
      index++
    }

  }

  return index
}

function swap(numbers, left, right) {
  const dummy = numbers[right]
  numbers[right] = numbers[left]
  numbers[left] = dummy
}

function Partition(numbers, start, end, k) {
  while(start < end) {
    let r = end
    let l = start
    let s = numbers[l]
    while(l < r) {
      while(numbers[r] <= s && l < r) { r-- }
      numbers[l] = numbers[r]

      while(s < numbers[l] && l < r) { l++ }
      numbers[r] = numbers[l]
    }

    numbers[l] = s
    Partition(numbers, start, l - 1)
    start = l + 1
  }
}
function QuickSort(numbers, start, end, k) {
  Partition(numbers, start, end, k)
}

function GetLeastNumbers_Solution1(numbers, k) {
  if (!numbers || !numbers.length || !k) return null
  if (k > numbers.length) return null

  QuickSort(numbers, 0, numbers.length - 1)

}

function GetLeastNumbers_Solution2(numbers, k) {
  
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
  }
}

// ====================测试代码====================
function Test(testName, data, n, expectedResult, k) {
    if(testName != null)
        console.log("%s begins: \n", testName);

    let vectorData = [];
    for(let i = 0; i < n; ++ i)
        vectorData.push(data[i]);

    if(expectedResult == null)
        console.log("The input is invalid, we don't expect any result.\n");
    else
    {
        console.log("Expected result: \n", expectedResult);
    }

    console.log("Result for solution1:\n");
    // let output = [...new Array(k)];
    const output = GetLeastNumbers_Solution1(data, k);
    if(expectedResult != null)
    {
        console.log(output);
    }

    delete output;

    console.log("Result for solution2:\n");
    let leastNumbers;
    const output2 = GetLeastNumbers_Solution2(vectorData, leastNumbers, k);
    console.log("The actual output numbers are:\n");
    console.log(output2)
    // for(setIterator iter = leastNumbers.begin(); iter != leastNumbers.end(); ++iter)
        // console.log("%d\t", *iter);
    console.log("\n\n");
}

// k小于数组的长度
function Test1()
{
    const data = [4, 5, 1, 6, 2, 7, 3, 8];
    const expected = [1, 2, 3, 4];
    Test("Test1", data, data.length, expected, expected.length);
}

// k等于数组的长度
function Test2()
{
    const data = [4, 5, 1, 6, 2, 7, 3, 8];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    Test("Test2", data, data.length, expected, expected.length);
}

// k大于数组的长度
function Test3()
{
    const data = [4, 5, 1, 6, 2, 7, 3, 8];
    const expected = null;
    Test("Test3", data, data.length, expected, 10);
}

// k等于1
function Test4()
{
    const data = [4, 5, 1, 6, 2, 7, 3, 8];
    const expected = [1];
    Test("Test4", data, data.length, expected, expected.length);
}

// k等于0
function Test5()
{
    const data = [4, 5, 1, 6, 2, 7, 3, 8];
    const expected = null;
    Test("Test5", data, data.length, expected, 0);
}

// 数组中有相同的数字
function Test6()
{
    const data = [4, 5, 1, 6, 2, 7, 2, 8];
    const expected = [1, 2];
    Test("Test6", data, data.length, expected, expected.length);
}

// 输入空指针
function Test7()
{
    const expected = null;
    Test("Test7", null, 0, expected, 0);
}

function Test8() {
  Test('test8', [4,1,-1,2,-1,2,3], 7, [-1,-2], 2)
}

;(function main() {
    // Test1(); 
    // Test2();
    // Test3();
    // Test4();
    // Test5();
    // Test6();
    // Test7();
    Test8();

    return 0;
})()

