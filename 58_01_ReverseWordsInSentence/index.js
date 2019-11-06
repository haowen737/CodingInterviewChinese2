function ReverseSentence(pData) {
  if (!pData) return null

  const list = pData.split(' ')
  const result = new Array(list.length)
  for (let index = 0; index < list.length; index++) {
    let fragment = list[index]
console.log(fragment === '')
    if (fragment === '') continue

    result[result.length - 1 - index] = fragment  + ' '
  }

  const res = result.join('')
  return res.slice(0, res.length - 1)
}

// function reverseCore(data, start, end) {
//   let dummy = ''
//   while (start < end) {
//     dummy += data[end - 1]
//     end--
//   }
//   return dummy
// }

// function ReverseSentence(pData) {
//   const reversed = reverseCore(pData, 0, pData.length)
//   let char = reversed[0]
//   while(char !== )
// }
// ====================测试代码====================
function Test(testName, input, expectedResult)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    const result = ReverseSentence(input);
    console.log('result=', result, ';expectedResult=', expectedResult)
    if((input == null && expectedResult == null)
        || (input != null && result === expectedResult))
        console.log("Passed.\n\n");
    else
        console.log("Failed.\n\n");
}

// 功能测试，句子中有多个单词
function Test1()
{
    const input = "I am a student.";
    const expected = "student. a am I";

    Test("Test1", input, expected);
}

// 功能测试，句子中只有一个单词
function Test2()
{
    const input = "Wonderful";
    const expected = "Wonderful";

    Test("Test2", input, expected);
}

// 鲁棒性测试
function Test3()
{
    Test("Test3", null, null);
}

// 边界值测试，测试空字符串
function Test4()
{
    Test("Test4", "", "");
}

// 边界值测试，字符串中只有空格
function Test5()
{
    const input = "   ";
    const expected = "   ";
    Test("Test5", input, expected);
}

// Test from leetcode
function Test6()
{
    const input = "  hello world!  ";
    const expected = "world! hello";
    Test("Test5", input, expected);
}

;(function main() {
    // Test1();
    // Test2();
    // Test3();
    // Test4();
    // Test5();
    Test6();

    return 0;
})()

