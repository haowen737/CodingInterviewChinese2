function find(array) {
	const dup = []
	for (let i = 0; i < array.length; i++) {
		let index = 0
		while (array[i] !== i) {
			if (array[i] === array[array[i]]) {
				console.log('hit', i, array[i], array[array[i]], array)
				dup.push(array[array[i]])
				break
				// return
			}	

			const temp = array[array[i]]
			array[array[i]] = array[i]
			array[i] = temp
		}
	}
	return dup
}


// 二分查找
function getDup(array) {
	let start = 1
	let end = array.length - 1

	function countRange(numbers, s, e) {
		let count = 0
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i] >= s && numbers[i] <= e) {
				++count
			}
		}
		return count
	}
	let iii = 0
	while (start <= end && iii < 10) {
		let middle = Math.ceil((end - start) / 2) + start
		const count = countRange(array, start, middle)
		
		if (count > (middle - start + 1)) {
			end = middle
		} else {
			start = middle + 1
		}

		if (start === end) {
			if (count > 1) return start
			else break;
		}
		iii++
	}

	return 
}

console.log(getDup([2,3,5,4,3,2,6,7]))