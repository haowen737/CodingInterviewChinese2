function ReorderOddEven_1(numbers, length) {
  let begin = 0
  let end = length - 1

  while(begin < end) {
    while (begin < end && (!isEven(numbers[begin]))) {
      begin++
    }

    while(begin < end && (isEven(numbers[end]))) {
      end --
    }

    if (begin < end) {
      const beginData = numbers[begin]
      const endData = numbers[end]
      numbers[begin] = endData
      numbers[end] = beginData
    }
  }
  
}
function isEven(n) {
  return (n & 1) === 0
}
function ReorderOddEven_2() {}

// ====================测试代码====================
function PrintArray(arr) {
  console.log(arr ? arr.join(',') : 'null')
}
function sizeof(arr) {
  return arr.length
}
// function PrintArray(numbers, length)
// {
//     if(length < 0)
//         return;

//     for(let i = 0; i < length; ++i)
//         console.log("%d\t", numbers[i]);

//     console.log("\n");
// }

function Test(testName, numbers, length)
{
    if(testName != null)
        console.log("%s begins:\n", testName);

    // int* copy = new int[length];
    let copy = new Array(length)
    for(let i = 0; i < length; ++i)
    {
        copy[i] = numbers[i];
    }

    console.log("Test for solution 1:\n");
    PrintArray(numbers, length);
    ReorderOddEven_1(numbers, length);
    PrintArray(numbers, length);

    // console.log("Test for solution 2:\n");
    // PrintArray(copy, length);
    // ReorderOddEven_2(copy, length);
    // PrintArray(copy, length);

    // delete[] copy;
}

function Test1()
{
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    Test("Test1", numbers, sizeof(numbers));
}

function Test2()
{
    const numbers = [2, 4, 6, 1, 3, 5, 7];
    Test("Test2", numbers, sizeof(numbers));
}

function Test3()
{
    const numbers = [1, 3, 5, 7, 2, 4, 6];
    Test("Test3", numbers, sizeof(numbers));
}

function Test4()
{
    const numbers = [1];
    Test("Test4", numbers, sizeof(numbers));
}

function Test5()
{
    const numbers = [2];
    Test("Test5", numbers, sizeof(numbers));
}

function Test6()
{
    Test("Test6", null, 0);
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

