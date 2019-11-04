function GetNumberOfK1(data, length, k) {
  if (!data) return 0

  function core(numbers, start, end) {
    if (end === start) return 0
    if (start < 0 || end > numbers.length) return 0

    const middle = Math.floor((end + start) / 2)
    console.log(start, end, middle, k, numbers[middle])

    if (numbers[middle] === k) {
      let s = middle - 1
      let e = middle + 1
      let count = 1

      while(numbers[s] === k && s >= 0) {
        count++
        s--
      }

      while(numbers[e] === k && e < numbers.length) {
        count++
        e++
      }

      return count
    } else {
      if (end - start > 2) {
        if (numbers[middle] > k) {
          return core(numbers, middle + 1, end)
        } else {
          return core(numbers, start, middle + 1)
        }
      } else {
        return 0
      }
    }
  }

  return core(data, 0, length)
}

function getLastK(numbers, length, start, end, k) {
  if (start > end) return -1

  let middle = Math.floor((start + end) / 2)
  let middleData = numbers[middle]

  if(middleData === k) {
    if ((middle > 0 && numbers[middle + 1] !== k) || middle == length - 1) {
      return middle
    } else {
      start = middle + 1
    }
  } else if (middleData > k){
    end = middle - 1
  } else {
    start = middle + 1
  }

  return getLastK(numbers, length, start, end, k)
}

function getFirstK(numbers, length, start, end, k) {
  if (start > end) return -1

  let middle = Math.floor((start + end) / 2)
  let middleData = numbers[middle]

  if(middleData === k) {
    if ((middle > 0 && numbers[middle - 1] !== k) || middle == 0) {
      return middle
    } else {
      end = middle - 1
    }
  } else if (middleData < k){
    start = middle + 1
  } else {
    end = middle - 1
  }

  return getFirstK(numbers, length, start, end, k)
}

function GetNumberOfK(data, length, k) {
  if (!data) return 0

  const first = getFirstK(data, length, 0, length - 1, k)
  const end = getLastK(data, length,  0, length - 1, k)

  let count = 0
  if (first > -1 && end > -1) count = end - first + 1

  return count
}

// ====================测试代码====================
function Test(testName, data, length, k, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    const result = GetNumberOfK(data, length, k);
    console.log(`result=${result}; expected=${expected}`)
    if(result == expected)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");
}

// 查找的数字出现在数组的中间
function Test1()
{
    const data = [1, 2, 3, 3, 3, 3, 4, 5];
    Test("Test1", data, data.length, 3, 4);
}

// 查找的数组出现在数组的开头
function Test2()
{
    const data = [3, 3, 3, 3, 4, 5];
    Test("Test2", data, data.length, 3, 4);
}

// 查找的数组出现在数组的结尾
function Test3()
{
    const data = [1, 2, 3, 3, 3, 3];
    Test("Test3", data, data.length, 3, 4);
}

// 查找的数字不存在
function Test4()
{
    const data = [1, 3, 3, 3, 3, 4, 5];
    Test("Test4", data, data.length, 2, 0);
}

// 查找的数字比第一个数字还小，不存在
function Test5()
{
    const data = [1, 3, 3, 3, 3, 4, 5];
    Test("Test5", data, data.length, 0, 0);
}

// 查找的数字比最后一个数字还大，不存在
function Test6()
{
    const data = [1, 3, 3, 3, 3, 4, 5];
    Test("Test6", data, data.length, 6, 0);
}

// 数组中的数字从头到尾都是查找的数字
function Test7()
{
    const data = [3, 3, 3, 3];
    Test("Test7", data, data.length, 3, 4);
}

// 数组中的数字从头到尾只有一个重复的数字，不是查找的数字
function Test8()
{
    const data = [3, 3, 3, 3];
    Test("Test8", data, data.length, 4, 0);
}

// 数组中只有一个数字，是查找的数字
function Test9()
{
    const data = [3];
    Test("Test9", data, data.length, 3, 1);
}

// 数组中只有一个数字，不是查找的数字
function Test10()
{
    const data = [3];
    Test("Test10", data, data.length, 4, 0);
}

// 鲁棒性测试，数组空指针
function Test11()
{
    Test("Test11", null, 0, 0, 0);
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
    Test10();
    Test11();

    return 0;
})()

