function find(matrix, target) {
	let row = matrix[0].length - 1
	let column = 0
	while (row >= 0 && column < matrix.length) {
		const topRight = matrix[column][row]
		console.log(topRight, target, column, row)
		if (topRight > target) {
			row--
		}
		if (topRight < target) {
			column++
		}
		if (topRight === target) {
			return true
		}
	}
	return false
}
const m = [
	[1,2,8,9],
	[2,4,9,12],
	[4,7,10,13],
	[6,8,11,15],
]
console.log(find(m, 66))

// //  1   2   8   9
// //  2   4   9   12
// //  4   7   10  13
// //  6   8   11  15
// // 要查找的数在数组中
// void Test1()
// {
//     int matrix[][4] = {{1, 2, 8, 9}, {2, 4, 9, 12}, {4, 7, 10, 13}, {6, 8, 11, 15}};
//     Test("Test1", (int*)matrix, 4, 4, 7, true);
// }

