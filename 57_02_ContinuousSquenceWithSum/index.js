function FindContinuousSequence(nums) {
  if (!nums || !nums.length) return null

	function count(arr) {
		return arr.reduce((a,b) => a + b, 0)
	}

	let left = 0
	let map = {}
	while (left < nums.length) {
		map[left] = [nums[left]]

		let right = left + 1

		while (right < nums.length) {

			map[left].push(nums[right])
			const currentCount = count(map[left])
			if (currentCount == k) break

			if (currentCount > k) {
				delete map[left]
				break
			}

			right++
		}

		left++
	}

	return Object.values(map)
}
// ====================测试代码====================
function Test(testName, sum)
{
    if(testName != null)
        console.log("%s for %d begins: \n", testName, sum);

    const result = FindContinuousSequence(sum);
    console.log('result=', result)
}

;(function main() {
    Test("test1", 1);
    Test("test2", 3);
    Test("test3", 4);
    Test("test4", 9);
    Test("test5", 15);
    Test("test6", 100);

    return 0;
})()

