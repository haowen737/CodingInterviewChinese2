function FirstNotRepeatingChar(pString) {
  if (!pString) return null
  const map = {}
  for (let index = 0; index < pString.length; index++) {
    const char = pString[index]
    if (map[char] === undefined) {
      map[char] = 1
      continue
    }
    map[char]++
  }

  for (let index = 0; index < pString.length; index++) {
    const char = pString[index]
    if (map[char] === 1) {
      return char
    }
  }

  return null
}
// ====================测试代码====================
function Test(pString, expected)
{
    if(FirstNotRepeatingChar(pString) == expected)
        console.log("Test passed.\n");
    else
        console.log("Test failed.\n");
}

;(function main() {
    // 常规输入测试，存在只出现一次的字符
    Test("google", 'l');

    // 常规输入测试，不存在只出现一次的字符
    Test("aabccdbd", null);

    // 常规输入测试，所有字符都只出现一次
    Test("abcdefg", 'a');

    // 鲁棒性测试，输入nullptr
    Test(null, null);

    return 0;
})()
