function Partition(numbers, start, end) {
  let small = start
  for (let i = start; i < end; i++) {
    if (numbers[i] > numbers[end]) {
      const temp = numbers[end]
      numbers[end] = numbers[i]
      numbers[i] = temp

      small++
    }
  }

  return small
}
function MoreThanHalfNum_Solution1(numbers) {
  if (!numbers) return 0

  let start = 0
  let end = numbers.length
  let middle = end >> 1
  let index = Partition(numbers, start, end)

  while(index !== middle) {
    if(index > middle) {
      end = index - 1;
      index = Partition(numbers, start, end);
    } else {
      start = index + 1;
      index = Partition(numbers, start, end);
    }
  }

  if (!CheckMoreThanHalf(numbers, middle, numbers[middle])) return 0
  return numbers[middle]
}

function MoreThanHalfNum_Solution2(numbers) {

  if (!numbers) return 0

  let result = numbers[0]
  let middle = numbers.length >> 2
  let times = 1
  for (let i = 1; i < numbers.length; i++) {
    if (times === 0) {
      result = numbers[i]
      times = 1
    } else if (numbers[i] === result) {
      times++
    } else {
      times--
    }
  }

  if (!CheckMoreThanHalf(numbers, middle, result)) return 0
  return result
}

function CheckMoreThanHalf(numbers, middle, result)  {
  let times = 0

  for (let i = 0; i < numbers.length; i++) {
    if (result === numbers[i]) times++
  }

  return times > numbers.length >> 2
}

// ====================测试代码====================
function Test(testName, numbers, length, expectedValue, expectedFlag) {
    if(testName != null)
        console.log("%s begins: \n", testName);

    const copy = [...new Array(length)];
    for(let i = 0; i < length; ++i)
        copy[i] = numbers[i];

    console.log("Test for solution1: ");
    let result = MoreThanHalfNum_Solution1(numbers, length);
    if(result == expectedValue)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");

    console.log("Test for solution2: ");
    result = MoreThanHalfNum_Solution2(copy, length);
    if(result == expectedValue)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");

    delete copy;
}

// 存在出现次数超过数组长度一半的数字
function Test1()
{
    const numbers = [1, 2, 3, 2, 2, 2, 5, 4, 2];
    Test("Test1", numbers, numbers.length, 2, false);
}

// 不存在出现次数超过数组长度一半的数字
function Test2()
{
    const numbers = [1, 2, 3, 2, 4, 2, 5, 2, 3];
    Test("Test2", numbers, numbers.length, 0, true);
}

// 出现次数超过数组长度一半的数字都出现在数组的前半部分
function Test3()
{
    const numbers = [2, 2, 2, 2, 2, 1, 3, 4, 5];
    Test("Test3", numbers, numbers.length, 2, false);
}

// 出现次数超过数组长度一半的数字都出现在数组的后半部分
function Test4()
{
    const numbers = [1, 3, 4, 5, 2, 2, 2, 2, 2];
    Test("Test4", numbers, numbers.length, 2, false);
}

// 输入空指针
function Test5()
{
   const numbers = [1];
   Test("Test5", numbers, 1, 1, false);
}

// 输入空指针
function Test6()
{
    Test("Test6", null, 0, 0, true);
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

