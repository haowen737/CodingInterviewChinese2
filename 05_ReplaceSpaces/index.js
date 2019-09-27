// 相关题目
// 有两个排序的数组A1,A2, 实现一个函数，把A2中的所有数字插入A1中，并是排序的

function joininAndSort(arr1, arr2) {
	const total = arr1.length + arr2.length
	const container = [...new Array(total)]
	let index = total - 1
	let arr1Index = arr1.length - 1
	let arr2Index = arr2.length - 1

	while(arr1Index >= 0 || arr2Index >= 0 || index >= 0) {
		const a1 = arr1[arr1Index]
		const a2 = arr2[arr2Index]

		if (a1 && a2) {
			const max = Math.max(a1, a2)
			container[index] = max
			if (a1 === max) {
				arr1Index--
			}
			if (a2 === max) {
				arr2Index--
			}
		} else {
			if (a1 && !a2) {
				container[index] = a1
				arr1Index--
			}
			if (a2 && !a1) {
				container[index] = a2
				arr2Index--
			}
		}
		index--
		// const arr1Ele = arr1[arr1Index]
		// const arr2Ele = arr2[arr2Index]

		// if (arr1Ele && arr2Ele) {
		// 	const max = Math.max(arr1Ele, arr2Ele)
		// 	const min = Math.min(arr1Ele, arr2Ele)
		// 	container[index] = max
		// 	container[index - 1] = min
		// 	arr1Index--
		// 	arr2Index--
		// }

		// if (arr1Index) {

		// }
		// // const max = Math.max([arr1.length - 1], arr2[arr2.length - 1])
		// // const min = Math.min([arr1.length - 1], arr2[arr2.length - 1])
		// // max && (container[index] = max)
		// // min && (container[index - 1] = min)
		// // index -= 2
		// arr1Index--
		// arr2Index--
	}
	return container
}


console.log(joininAndSort(
	[1,3,5,7,8],
	[2,4,6,9]
))