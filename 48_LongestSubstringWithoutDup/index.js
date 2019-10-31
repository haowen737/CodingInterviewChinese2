function hasDuplication(string) {
  const set = []
  for (i = 0; i < 26; i++) {
    set[i] = 0
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i].charCodeAt() - 97
    if (set[char]) {
      return true
    }

    set[char] = 1
  }

  return false
  
}
// 暴力
function longestSubstringWithoutDuplication_1(string) {
  if (!string) return 0
  if (string.length <= 1) return 1

  let longestLength = 0

  for (let start = 0; start < string.length; start++) {
    for (let end = 0; end < string.length; end++) {
      const str = string.slice(start, end)
      if (!hasDuplication(str) && str.length > longestLength) {
        longestLength = str.length
        longest = str
      }
    }
  }

  return longestLength
}

// 动态规划
function longestSubstringWithoutDuplication_2(string) {
  let curLength = 0
  let maxLength = 0

  let position = [...new Array(26)].map(() => -1)

  for (let i = 0; i < string.length; i++) {
    let char = string[i].charCodeAt() - 97
    let prevIndex = position[char]

    if (prevIndex < 0 || i - prevIndex > curLength) {
      ++curLength
    } else {
      if (curLength > maxLength) {
        maxLength = curLength
      }

      curLength = i - prevIndex
    }
    position[char] = i
  }

  if (curLength > maxLength) {
    maxLength = curLength
  }

  return maxLength
}
// ====================测试代码====================
function testSolution1(input, expected)
{
    console.log('s')
    const output = longestSubstringWithoutDuplication_1(input);
    console.log(`Solution 1 output=${output}, expected=${expected}`)
    if(output == expected)
        console.log("Solution 1 passed, with input: ", input);
    else
        console.log("Solution 1 FAILED, with input: ", input);
}

function testSolution2(input, expected)
{
    const output = longestSubstringWithoutDuplication_2(input);
    console.log(`Solution 2 output=${output}, expected=${expected}`)
    if(output == expected)
        console.log("Solution 2 passed, with input: ", input);
    else
        console.log("Solution 2 FAILED, with input: ", input);
}

function test(input, expected)
{
    testSolution1(input, expected);
    testSolution2(input, expected);
}

function test1()
{
    const input = "abcacfrar";
    const expected = 4;
    test(input, expected);
}

function test2()
{
    const input = "acfrarabc";
    const expected = 4;
    test(input, expected);
}

function test3()
{
    const input = "arabcacfr";
    const expected = 4;
    test(input, expected);
}

function test4()
{
    const input = "aaaa";
    const expected = 1;
    test(input, expected);
}

function test5()
{
    const input = "abcdefg";
    const expected = 7;
    test(input, expected);
}

function test6()
{
    const input = "aaabbbccc";
    const expected = 2;
    test(input, expected);
}

function test7()
{
    const input = "abcdcba";
    const expected = 4;
    test(input, expected);
}

function test8()
{
    const input = "abcdaef";
    const expected = 6;
    test(input, expected);
}

function test9()
{
    const input = "a";
    const expected = 1;
    test(input, expected);
}

function test10()
{
    const input = "";
    const expected = 0;
    test(input, expected);
}

;(function main() {
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
    test7();
    test8();
    test9();
    test10();

    return 0;
})()
