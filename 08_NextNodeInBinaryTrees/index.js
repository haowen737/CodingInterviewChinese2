class BinaryTreeNode {
	constructor({ value, left, right } = {}) {
		this.value = value
		this.left = left
    this.right = right
    this.parent = null
	}
}

function getNext(node) {
  let pNext = null

  if (node === null) return null

  // case1: 有右子树
  if (node.right !== null) {
    const right = node.right

    while(right.left !== null) {
      right = right.left
    }

    pNext = right
  }


  // case2: 无右子树
  // & 是父节点的左子节点 - return 父节点
  // & 是父节点的右子节点 - return 父节点的左子节点是当前节点
  if (node.parent) {
    // if (node === node.parent.left) {
    //   pNext = node.parent
    // } else {
    //   let p = node.parent
    //   while (p.parent && p.parent.left !== p) {
    //     p = p.parent
    //   }
    //   pNext = p.parent
    // }

    let pCurrent = node
    while(pCurrent.parent && pCurrent.parent.right === pCurrent) {
      pCurrent = p.parent
    }

    pNext = pCurrent
  }

  return pNext
}

// const r = getNext()
