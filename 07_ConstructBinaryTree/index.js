// 面试题7：重建二叉树
// 题目：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输
// 入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,
// 2, 4, 7, 3, 5, 6, 8}和中序遍历序列{4, 7, 2, 1, 5, 3, 8, 6}，则重建出
// 图2.6所示的二叉树并输出它的头结点。

class BinaryTreeNode {
	constructor({ value, left, right } = {}) {
		this.value = value
		this.left = left
		this.right = right
	}
}

function build(preorder, inorder) {
	const rootValue = preorder[0]

	const root = new BinaryTreeNode()
	root.value = rootValue
	root.left = root.right = null

	if (!preorder.length && !inorder.length) {
		return root
	}

	let leftIndex = 0
	while(inorder[leftIndex] !== rootValue) {
		++leftIndex
	}

	// left  inorder.length - i
	if (leftIndex) {
		root.left = build(preorder.slice(1, leftIndex + 1), inorder.slice(0,leftIndex))
	}
	if (inorder.length - leftIndex > 0) {
		root.right = build(preorder.slice(leftIndex + 1, inorder.length), inorder.slice(leftIndex + 1, inorder.length))
	}

	return root
}

const r = build(
	[1, 2, 4, 7, 3, 5, 6, 8],
	[4, 7, 2, 1, 5, 3, 8, 6]
)

console.dir(r)