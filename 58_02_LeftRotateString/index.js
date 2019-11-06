// THIS IS CHEATING
function LeftRotateString2(pStr, n) {
  if (!pStr) return pStr

  const dummy = pStr.slice(0, n)
  return pStr.slice(n, pStr.length) + dummy
}

// THIS IS FOR REAL
function reverse(list, start, end) {
  while(start < end) {
    const dummy = list[start]
    list[start] = list[end]
    list[end] = dummy
    start++
    end--
  }

  return list
}

function LeftRotateString(pStr, n) {
  if (!pStr) return pStr

  const list = pStr.split('')
  const list1 = list.slice(0, n)
  const list2 = list.slice(n, list.length)

  const reversedList1 = reverse(list1, 0, list1.length - 1)
  const reversedList2 = reverse(list2, 0, list2.length - 1)
  const reversed = reversedList1.concat(reversedList2)
  
  return reverse(reversed, 0, reversed.length).join('')
}

// ====================测试代码====================
function Test(testName, input, num, expectedResult)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    const result = LeftRotateString(input, num);
    console.log('result=', result, 'expected=', expectedResult)
    if((input == null && expectedResult == null)
        || (input != null && result === expectedResult))
        console.log("Passed.\n\n");
    else
        console.log("Failed.\n\n");
}

// 功能测试
function Test1()
{
    const input = "abcdefg";
    const expected = "cdefgab";

    Test("Test1", input, 2, expected);
}

// 边界值测试
function Test2()
{
    const input = "abcdefg";
    const expected = "bcdefga";

    Test("Test2", input, 1, expected);
}

// 边界值测试
function Test3()
{
    const input = "abcdefg";
    const expected = "gabcdef";

    Test("Test3", input, 6, expected);
}

// 鲁棒性测试
function Test4()
{
    Test("Test4", null, 6, null);
}

// 鲁棒性测试
function Test5()
{
    const input = "abcdefg";
    const expected = "abcdefg";

    Test("Test5", input, 0, expected);
}

// 鲁棒性测试
function Test6()
{
    const input = "abcdefg";
    const expected = "abcdefg";

    Test("Test6", input, 7, expected);
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
