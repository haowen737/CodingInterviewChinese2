function match(str, pattern) {
  if(str == null || pattern == null) return false

  return matchCore(str, pattern, 0, 0)
}

function matchCore(string, pattern, stringIndex, patternIndex) {
  if (stringIndex === string.length && patternIndex === pattern.length) return true
  if (stringIndex < string.length && patternIndex == pattern.length) return false

  const currentString = string[stringIndex]
  const currentPattern = pattern[patternIndex]
  const nextPattern = pattern[patternIndex + 1]
  if (nextPattern === '*') {
    // 匹配一个.(任意字符) 或 string 完全匹配当前 pattern
    if (currentPattern === currentString || (currentPattern === '.' && currentString)) {
      // 进入有限状态机的下一个状态
      return matchCore(string, pattern, stringIndex + 1, patternIndex + 2)
      // 继续留在有限状态机的当前状态
      || matchCore(string, pattern, stringIndex + 1, patternIndex)
      // 略过一个'*' 
      || matchCore(string, pattern, stringIndex, patternIndex + 2)

    } else {// 匹配 *
      return matchCore(string, pattern, stringIndex, patternIndex + 2)
    }
  }

  if (currentString === currentPattern || (currentPattern === '.' && currentString)) {
    return matchCore(string, pattern, stringIndex + 1, patternIndex + 1)
  }

  return false
}

// ====================测试代码====================
function Test(testName, string, pattern, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    if(match(string, pattern) == expected)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

;(function main(){
    Test("Test01", "", "", true);
    Test("Test02", "", ".*", true);
    Test("Test03", "", ".", false);
    Test("Test04", "", "c*", true);
    Test("Test05", "a", ".*", true);
    Test("Test06", "a", "a.", false);
    Test("Test07", "a", "", false);
    Test("Test08", "a", ".", true);
    Test("Test09", "a", "ab*", true);
    Test("Test10", "a", "ab*a", false);
    Test("Test11", "aa", "aa", true);
    Test("Test12", "aa", "a*", true);
    Test("Test13", "aa", ".*", true);
    Test("Test14", "aa", ".", false);
    Test("Test15", "ab", ".*", true);
    Test("Test16", "ab", ".*", true);
    Test("Test17", "aaa", "aa*", true);
    Test("Test18", "aaa", "aa.a", false);
    Test("Test19", "aaa", "a.a", true);
    Test("Test20", "aaa", ".a", false);
    Test("Test21", "aaa", "a*a", true);
    Test("Test22", "aaa", "ab*a", false);
    Test("Test23", "aaa", "ab*ac*a", true);
    Test("Test24", "aaa", "ab*a*c*a", true);
    Test("Test25", "aaa", ".*", true);
    Test("Test26", "aab", "c*a*b", true);
    Test("Test27", "aaca", "ab*a*c*a", true);
    Test("Test28", "aaba", "ab*a*c*a", false);
    Test("Test29", "bbbba", ".*a*a", true);
    Test("Test30", "bcbbabab", ".*a*a", false);

    return 0;
})()

