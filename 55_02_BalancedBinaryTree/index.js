function TreeDepth(node) {
  if (!node) return 0

  let left = TreeDepth(node.pLeft)
  let right = TreeDepth(node.pRight)

  const result = left > right ? left + 1 : right + 1
  return result
}

function IsBalanced_Solution1(pRoot) {
  if (!pRoot) return true
  const left = TreeDepth(pRoot.pLeft)
  const right = TreeDepth(pRoot.pRight)
  const diff = left - right
  if (diff > 1 || diff < -1) return false

  return IsBalanced_Solution1(pRoot.pLeft) && IsBalanced_Solution1(pRoot.pRight)
}


// FIXME: 实现c++ 引用 & 指针
// function IsBalanced_Solution2(pRoot) {
//   let deep = 0

//   let left = 0
//   let right = 0

//   function core(node, deep) {
//     if (!node) {
//       return true
//     }
  
//     if (core(node.pLeft, left) && core(node.pRight, right)) {
//       const diff = left - right
//       // if (diff . )
//       console.log(left, right)
//     }
//   }

//   return core(pRoot, deep)
// }

function IsBalanced_Solution2(pRoot) {
  if (!pRoot) return true

  function depth(root) {
    if (!root) return 0

    let left = depth(root.pLeft)
    if (left == -1) return -1

    let right = depth(root.pRight)
    if (right == -1) return -1

    if (left - right > 1 || left - right < -1) {
      return -1
    }

    return Math.max(left, right) + 1
  }

  const result = depth(pRoot)
  return result !== -1
}
// ====================辅助测试代码====================
class BinaryTreeNode {
  constructor(value) {
    this.m_nValue = null
    this.pLeft = null
    this.pRight = null
  }
}
function CreateBinaryTreeNode(dbValue)
{
    const pNode = new BinaryTreeNode();
    pNode.m_nValue = dbValue;
    pNode.pLeft = null;
    pNode.pRight = null;

    return pNode;
}

function ConnectTreeNodes(pParent, pLeft, pRight)
{
    if(pParent != null)
    {
        pParent.pLeft = pLeft;
        pParent.pRight = pRight;
    }
}

function DestroyTree(pRoot)
{
  delete pRoot
}
// ====================测试代码====================
function Test(testName, pRoot, expected)
{
    if(testName != null)
        console.log("%s begins:\n", testName);

    // console.log("Solution1 begins: ");
    // if(IsBalanced_Solution1(pRoot) == expected)
    //     console.log("Passed.\n");
    // else
    //     console.log("Failed.\n");

    console.log("Solution2 begins: ");
    if(IsBalanced_Solution2(pRoot) == expected)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");
}

// 完全二叉树
//             1
//         /      \
//        2        3
//       /\       / \
//      4  5     6   7
function Test1()
{
    const pNode1 = CreateBinaryTreeNode(1);
    const pNode2 = CreateBinaryTreeNode(2);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode6 = CreateBinaryTreeNode(6);
    const pNode7 = CreateBinaryTreeNode(7);

    ConnectTreeNodes(pNode1, pNode2, pNode3);
    ConnectTreeNodes(pNode2, pNode4, pNode5);
    ConnectTreeNodes(pNode3, pNode6, pNode7);

    Test("Test1", pNode1, true);

    DestroyTree(pNode1);
}

// 不是完全二叉树，但是平衡二叉树
//             1
//         /      \
//        2        3
//       /\         \
//      4  5         6
//        /
//       7
function Test2()
{
    const pNode1 = CreateBinaryTreeNode(1);
    const pNode2 = CreateBinaryTreeNode(2);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode6 = CreateBinaryTreeNode(6);
    const pNode7 = CreateBinaryTreeNode(7);

    ConnectTreeNodes(pNode1, pNode2, pNode3);
    ConnectTreeNodes(pNode2, pNode4, pNode5);
    ConnectTreeNodes(pNode3, null, pNode6);
    ConnectTreeNodes(pNode5, pNode7, null);

    Test("Test2", pNode1, true);

    DestroyTree(pNode1);
}

// 不是平衡二叉树
//             1
//         /      \
//        2        3
//       /\         
//      4  5        
//        /
//       6
function Test3()
{
    const pNode1 = CreateBinaryTreeNode(1);
    const pNode2 = CreateBinaryTreeNode(2);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode6 = CreateBinaryTreeNode(6);

    ConnectTreeNodes(pNode1, pNode2, pNode3);
    ConnectTreeNodes(pNode2, pNode4, pNode5);
    ConnectTreeNodes(pNode5, pNode6, null);

    Test("Test3", pNode1, false);

    DestroyTree(pNode1);
}


//               1
//              /
//             2
//            /
//           3
//          /
//         4
//        /
//       5
function Test4()
{
    const pNode1 = CreateBinaryTreeNode(1);
    const pNode2 = CreateBinaryTreeNode(2);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode1, pNode2, null);
    ConnectTreeNodes(pNode2, pNode3, null);
    ConnectTreeNodes(pNode3, pNode4, null);
    ConnectTreeNodes(pNode4, pNode5, null);

    Test("Test4", pNode1, false);

    DestroyTree(pNode1);
}

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
function Test5()
{
    const pNode1 = CreateBinaryTreeNode(1);
    const pNode2 = CreateBinaryTreeNode(2);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode1, null, pNode2);
    ConnectTreeNodes(pNode2, null, pNode3);
    ConnectTreeNodes(pNode3, null, pNode4);
    ConnectTreeNodes(pNode4, null, pNode5);

    Test("Test5", pNode1, false);

    DestroyTree(pNode1);
}

// 树中只有1个结点
function Test6()
{
    const pNode1 = CreateBinaryTreeNode(1);
    Test("Test6", pNode1, true);

    DestroyTree(pNode1);
}

// 树中没有结点
function Test7()
{
    Test("Test7", null, true);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();

    return 0;
})()

