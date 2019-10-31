// function GetTranslationCount(number) {
//   if (number < 0) return 0

//   return GetTranslationCountCore(number)
// }

// function GetTranslationCountCore(number) {
//   const numberList = number.toString().split('')
//   const length = numberList.length
//   const counts = []
//   let count = 0

//   for (let i = length - 1; i >= 0; i--) {
//     count = 0

//     if (i < length - 1) {
//       count = counts[i + 1]
//     } else {
//       count = 1
//     }

//     if (i < length - 1) {
//       let digit1 = numberList[i] - '0' 
//       let digit2 = numberList[i + 1] - '0'
//       let converted = digit1 * 10 + digit2

//     console.log(digit1, digit2, converted)

//       if (converted >= 10 && converted <= 25) {
//         if (i < length - 2) {
//           count += counts[i + 2]
//         } else {
//           count += 1
//         }
//       }
//     }


//     counts[i] = count
//   }

//   count = counts[0]
//   return count
// }


function GetTranslationCount(number) {
  if (number < 0) return 0
  const numberList = number.toString().split('')
  const length = numberList.length
  let counts = []

  for (let i = length - 1; i >= 0; i--) {
    let count = 0
    if (i === length - 1) {
      count += 1
    } else {
      count = counts[i + 1]
    }


    if (i < length - 1) {
      let num1 = +numberList[i]
      let num2 = +numberList[i + 1]
      let num = num1 * 10 + num2

      if (num >= 10 && num <= 25) {
        if (i < length - 2) {
          count += counts[i + 2]
        } else {
          count += 1
        }
      }
    }

    counts[i] = count
  }
  
  return counts[0]

}
// ====================测试代码====================
function Test(testName, number, expected)
{
    const result = GetTranslationCount(number)
    console.log(`result=${result}; expect=${expected}`)
    if(result == expected)
        console.log(testName, " passed.");
    else
        console.log(testName, " FAILED.");
}

function Test1()
{
    const number = 0;
    const expected = 1;
    Test("Test1", number, expected);
}

function Test2()
{
    const number = 10;
    const expected = 2;
    Test("Test2", number, expected);
}

function Test3()
{
    const number = 125;
    const expected = 3;
    Test("Test3", number, expected);
}

function Test4()
{
    const number = 126;
    const expected = 2;
    Test("Test4", number, expected);
}

function Test5()
{
    const number = 426;
    const expected = 1;
    Test("Test5", number, expected);
}

function Test6()
{
    const number = 100;
    const expected = 2;
    Test("Test6", number, expected);
}

function Test7()
{
    const number = 101;
    const expected = 2;
    Test("Test7", number, expected);
}

function Test8()
{
    const number = 12258;
    const expected = 5;
    Test("Test8", number, expected);
}

function Test9()
{
    const number = -100;
    const expected = 0;
    Test("Test9", number, expected);
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