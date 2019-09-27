function printListInReversedOrder(listNode) {
	let node = listNode
	const stack = []
	while (node.next) {
		stack.unshift(node.value)
		node = node.next
	}
	stack.unshift(node.value)

	return stack
}


const list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null
		}
	}
}

console.log(printListInReversedOrder(list))

