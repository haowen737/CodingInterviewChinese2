function PrintMinNumber(numbers) {
  if (!numbers || !numbers.length) return

  const length = numbers.length

  let strNumbers = []
  for (let i = 0; i < length; i++) {
    strNumbers[i] = numbers[i].toString()
  }

  strNumbers.sort(compare)

  return strNumbers.join('')
}

function compare(strNumber1, strNumber2) {
  const str1 = strNumber1 + strNumber2
  const str2 = strNumber2 + strNumber1
  return str1 - str2
}

// ====================测试代码====================
function Test(testName, numbers, length, expectedResult)
{
    if(testName != null)
        console.log("%s begins:\n", testName);

    if(expectedResult != null)
        console.log("Expected result is: \t%s\n", expectedResult);

    
    const result = PrintMinNumber(numbers, length);
    console.log("Actual result is: \t", result);

    console.log("\n");
}

function Test1()
{
    const numbers = [3, 5, 1, 4, 2];
    Test("Test1", numbers, numbers.length, "12345");
}

function Test2()
{
    const numbers = [3, 32, 321];
    Test("Test2", numbers, numbers.length, "321323");
}

function Test3()
{
    const numbers = [3, 323, 32123];
    Test("Test3", numbers, numbers.length, "321233233");
}

function Test4()
{
    const numbers = [1, 11, 111];
    Test("Test4", numbers, numbers.length, "111111");
}

// 数组中只有一个数字
function Test5()
{
    const numbers = [321];
    Test("Test5", numbers, numbers.length, "321");
}

function Test6()
{
    Test("Test6", null, 0, "Don't print anything.");
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

