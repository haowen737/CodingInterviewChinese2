// leetcode-cn.com 
// 946.验证栈序列
// Code passed at leetcode-cn.com
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// var validateStackSequences = function(pushed, popped) {
//   if (!pushed || !popped) return false
//   let dummy = []
//     let j = 0
//     for(let i = 0; i < pushed.length; i++) {
//         dummy.push(pushed[i])
        
//         while(dummy.length > 0 && dummy[dummy.length - 1] === popped[j]) {
//             dummy.pop()
//             j++
//         }
//     }
//     return dummy.length === 0
// };

var validateStackSequences = function(pushed, popped) {
  if (!pushed || !popped) return false
  
  let j = 0
  let dummy = []
  for (let i = 0; i < popped.length; i++) {
    dummy.push(pushed[i])
    while (dummy.length && dummy[dummy.length - 1] === popped[j]) {
      dummy.pop()
      j++
    }
  }

  return dummy.length === 0
};


var IsPopOrder = validateStackSequences


// ====================测试代码====================
function Test(testName, pPush, pPop, nLength, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    if(IsPopOrder(pPush, pPop, nLength) == expected)
        console.log("Passed.\n");
    else
        console.log("failed.\n");
}

function Test1()
{
    const nLength = 5;
    const push = [1, 2, 3, 4, 5];
    const pop = [4, 5, 3, 2, 1];
    
    Test("Test1", push, pop, nLength, true);
}

function Test2()
{
    const nLength = 5;
    const push = [1, 2, 3, 4, 5];
    const pop = [3, 5, 4, 2, 1];
    
    Test("Test2", push, pop, nLength, true);
}

function Test3()
{
    const nLength = 5;
    const push = [1, 2, 3, 4, 5];
    const pop = [4, 3, 5, 1, 2];
    
    Test("Test3", push, pop, nLength, false);
}

function Test4()
{
    const nLength = 5;
    const push = [1, 2, 3, 4, 5];
    const pop = [3, 5, 4, 1, 2];
    
    Test("Test4", push, pop, nLength, false);
}

// push和pop序列只有一个数字
function Test5()
{
    const nLength = 1;
    const push = [1];
    const pop = [2];

    Test("Test5", push, pop, nLength, false);
}

function Test6()
{
    const nLength = 1;
    const push = [1];
    const pop = [1];

    Test("Test6", push, pop, nLength, true);
}

function Test7()
{
    Test("Test7", null, null, 0, false);
}
 
;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();

    return 0;
})()
