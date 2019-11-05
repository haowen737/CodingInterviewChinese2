function KthNode(pRoot, k) {
  if (!pRoot || !k) return null

  function findNext(node, k) {
    let target = null

    if (node.pLeft) {
      target = findNext(node.pLeft, k)
    }

    if (!target) {
      if (k == 1) {
        target = pRoot
      }
      k--
    }

    if (!target && node.pRight) {
      target = findNext(node.pRight, k)
    }
    // console.log('-', node)

    return target
  }

  return findNext(pRoot, k)
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
function Test(testName, pRoot, k, isNull, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    const pTarget = KthNode(pRoot, k);
    console.log('result=', pTarget, 'expected=', expected)
    if((isNull && pTarget == null) || (!isNull && pTarget.m_nValue == expected))
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

//            8
//        6      10
//       5 7    9  11
function TestA()
{
    const pNode8 = CreateBinaryTreeNode(8);
    const pNode6 = CreateBinaryTreeNode(6);
    const pNode10 = CreateBinaryTreeNode(10);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode7 = CreateBinaryTreeNode(7);
    const pNode9 = CreateBinaryTreeNode(9);
    const pNode11 = CreateBinaryTreeNode(11);

    ConnectTreeNodes(pNode8, pNode6, pNode10);
    ConnectTreeNodes(pNode6, pNode5, pNode7);
    ConnectTreeNodes(pNode10, pNode9, pNode11);

    Test("TestA0", pNode8, 0, true, -1);
    Test("TestA1", pNode8, 1, false, 5);
    Test("TestA2", pNode8, 2, false, 6);
    Test("TestA3", pNode8, 3, false, 7);
    Test("TestA4", pNode8, 4, false, 8);
    Test("TestA5", pNode8, 5, false, 9);
    Test("TestA6", pNode8, 6, false, 10);
    Test("TestA7", pNode8, 7, false, 11);
    Test("TestA8", pNode8, 8, true, -1);

    DestroyTree(pNode8);

    console.log("\n\n");
}

//               5
//              /
//             4
//            /
//           3
//          /
//         2
//        /
//       1
function TestB()
{
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode2 = CreateBinaryTreeNode(2);
    const pNode1 = CreateBinaryTreeNode(1);

    ConnectTreeNodes(pNode5, pNode4, null);
    ConnectTreeNodes(pNode4, pNode3, null);
    ConnectTreeNodes(pNode3, pNode2, null);
    ConnectTreeNodes(pNode2, pNode1, null);

    Test("TestB0", pNode5, 0, true, -1);
    Test("TestB1", pNode5, 1, false, 1);
    Test("TestB2", pNode5, 2, false, 2);
    Test("TestB3", pNode5, 3, false, 3);
    Test("TestB4", pNode5, 4, false, 4);
    Test("TestB5", pNode5, 5, false, 5);
    Test("TestB6", pNode5, 6, true, -1);

    DestroyTree(pNode5);

    console.log("\n\n");
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
function TestC()
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

    Test("TestC0", pNode1, 0, true, -1);
    Test("TestC1", pNode1, 1, false, 1);
    Test("TestC2", pNode1, 2, false, 2);
    Test("TestC3", pNode1, 3, false, 3);
    Test("TestC4", pNode1, 4, false, 4);
    Test("TestC5", pNode1, 5, false, 5);
    Test("TestC6", pNode1, 6, true, -1);

    DestroyTree(pNode1);

    console.log("\n\n");
}

// There is only one node in a tree
function TestD()
{
    const pNode1 = CreateBinaryTreeNode(1);

    Test("TestD0", pNode1, 0, true, -1);
    Test("TestD1", pNode1, 1, false, 1);
    Test("TestD2", pNode1, 2, true, -1);

    DestroyTree(pNode1);

    console.log("\n\n");
}

// empty tree
function TestE()
{
    Test("TestE0", null, 0, true, -1);
    Test("TestE1", null, 1, true, -1);

    console.log("\n\n");
}

;(function main() {
    TestA();
    // TestB();
    // TestC();
    // TestD();
    // TestE();
})()
