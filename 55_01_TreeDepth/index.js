function TreeDepth(pRoot) {
  if (!pRoot) return 0

  let left = TreeDepth(pRoot.pLeft)
  let right = TreeDepth(pRoot.pRight)

  const result = left > right ? left + 1 : right + 1
  return result
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
    const result = TreeDepth(pRoot);
    console.log('result=', result)
    if(expected == result)
        console.log("%s passed.\n", testName);
    else
        console.log("%s FAILED.\n", testName);
}

//            1
//         /      \
//        2        3
//       /\         \
//      4  5         6
//        /
//       7
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
    ConnectTreeNodes(pNode3, null, pNode6);
    ConnectTreeNodes(pNode5, pNode7, null);

    Test("Test1", pNode1, 4);

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
function Test2()
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

    Test("Test2", pNode1, 5);

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
function Test3()
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

    Test("Test3", pNode1, 5);

    DestroyTree(pNode1);
}

// 树中只有1个结点
function Test4()
{
    const pNode1 = CreateBinaryTreeNode(1);
    Test("Test4", pNode1, 1);

    DestroyTree(pNode1);
}

// 树中没有结点
function Test5()
{
    Test("Test5", null, 0);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();

    return 0;
})()

