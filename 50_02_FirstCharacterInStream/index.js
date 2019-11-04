class CharStatistics {
  constructor() {
    this.text = ''
    this.index = -1
    this.map = {}
    this.char = null
  }

  Insert(char) {
    this.text = this.text.concat(char)
  }

  FirstAppearingOnce() {
    const lastIndex = this.index + 1
    for (let index = lastIndex; index < this.text.length; index++) {
      this.index = index

      const char = this.text[index]
      if (this.map[char] === undefined) {
        this.map[char] = 1
        continue
      }

      this.map[char]++
    }

    for (let index = 0; index < this.text.length; index++) {
      const char = this.text[index]
      if (this.map[char] === 1) {
        this.char = char
        return char
      }
    }

    return null
  }
}

// ====================测试代码====================
function Test(testName, chars, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    if(chars.FirstAppearingOnce() == expected)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

;(function main() {
    const chars = new CharStatistics();

    Test("Test1", chars, null);

    chars.Insert('g');
    Test("Test2", chars, 'g');

    chars.Insert('o');
    Test("Test3", chars, 'g');

    chars.Insert('o');
    Test("Test4", chars, 'g');

    chars.Insert('g');
    Test("Test5", chars, null);

    chars.Insert('l');
    Test("Test6", chars, 'l');

    chars.Insert('e');
    Test("Test7", chars, 'l');

    return 0;
})()

