// code passed at leetcode.cn
var isSymmetricalCore = function(pRoot1, pRoot2) {
  if (pRoot1 == null && pRoot2 == null) return true
  
  if (pRoot1 == null || pRoot2 == null) return false

  if (pRoot1.val !== pRoot2.val) return false

  return isSymmetricalCore(pRoot1.left, pRoot2.right) && isSymmetricalCore(pRoot1.right, pRoot2.left)
}

var isSymmetric = function(root) {
  return isSymmetricalCore(root, root)
};

// ====================辅助测试代码====================
class BinaryTreeNode {
  constructor(value) {
    this.value = null
    this.pLeft = null
    this.pRight = null
  }
}
function CreateBinaryTreeNode(dbValue)
{
    const pNode = new BinaryTreeNode();
    pNode.value = dbValue;
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
    // if(pRoot != null)
    // {
    //     BinaryTreeNode* pLeft = pRoot->m_pLeft;
    //     BinaryTreeNode* pRight = pRoot->m_pRight;

    //     delete pRoot;
    //     pRoot = null;

    //     DestroyTree(pLeft);
    //     DestroyTree(pRight);
    // }
}
// ====================测试代码====================
function Test(testName, pRoot, expected) {
    if(testName != null)
        console.log("%s begins: ", testName);

    if(isSymmetrical(pRoot) == expected)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

//            8
//        6      6
//       5 7    7 5
function Test1()
{
    const pNode8 = CreateBinaryTreeNode(8);
    const pNode61 = CreateBinaryTreeNode(6);
    const pNode62 = CreateBinaryTreeNode(6);
    const pNode51 = CreateBinaryTreeNode(5);
    const pNode71 = CreateBinaryTreeNode(7);
    const pNode72 = CreateBinaryTreeNode(7);
    const pNode52 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode8, pNode61, pNode62);
    ConnectTreeNodes(pNode61, pNode51, pNode71);
    ConnectTreeNodes(pNode62, pNode72, pNode52);

    Test("Test1", pNode8, true);

    DestroyTree(pNode8);
}

//            8
//        6      9
//       5 7    7 5
function Test2()
{
    const pNode8 = CreateBinaryTreeNode(8);
    const pNode61 = CreateBinaryTreeNode(6);
    const pNode9 = CreateBinaryTreeNode(9);
    const pNode51 = CreateBinaryTreeNode(5);
    const pNode71 = CreateBinaryTreeNode(7);
    const pNode72 = CreateBinaryTreeNode(7);
    const pNode52 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode8, pNode61, pNode9);
    ConnectTreeNodes(pNode61, pNode51, pNode71);
    ConnectTreeNodes(pNode9, pNode72, pNode52);

    Test("Test2", pNode8, false);

    DestroyTree(pNode8);
}

//            8
//        6      6
//       5 7    7
function Test3()
{
    const pNode8 = CreateBinaryTreeNode(8);
    const pNode61 = CreateBinaryTreeNode(6);
    const pNode62 = CreateBinaryTreeNode(6);
    const pNode51 = CreateBinaryTreeNode(5);
    const pNode71 = CreateBinaryTreeNode(7);
    const pNode72 = CreateBinaryTreeNode(7);

    ConnectTreeNodes(pNode8, pNode61, pNode62);
    ConnectTreeNodes(pNode61, pNode51, pNode71);
    ConnectTreeNodes(pNode62, pNode72, null);

    Test("Test3", pNode8, false);

    DestroyTree(pNode8);
}

//               5
//              / \
//             3   3
//            /     \
//           4       4
//          /         \
//         2           2
//        /             \
//       1               1
function Test4()
{
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode31 = CreateBinaryTreeNode(3);
    const pNode32 = CreateBinaryTreeNode(3);
    const pNode41 = CreateBinaryTreeNode(4);
    const pNode42 = CreateBinaryTreeNode(4);
    const pNode21 = CreateBinaryTreeNode(2);
    const pNode22 = CreateBinaryTreeNode(2);
    const pNode11 = CreateBinaryTreeNode(1);
    const pNode12 = CreateBinaryTreeNode(1);

    ConnectTreeNodes(pNode5, pNode31, pNode32);
    ConnectTreeNodes(pNode31, pNode41, null);
    ConnectTreeNodes(pNode32, null, pNode42);
    ConnectTreeNodes(pNode41, pNode21, null);
    ConnectTreeNodes(pNode42, null, pNode22);
    ConnectTreeNodes(pNode21, pNode11, null);
    ConnectTreeNodes(pNode22, null, pNode12);

    Test("Test4", pNode5, true);

    DestroyTree(pNode5);
}


//               5
//              / \
//             3   3
//            /     \
//           4       4
//          /         \
//         6           2
//        /             \
//       1               1
function Test5()
{
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode31 = CreateBinaryTreeNode(3);
    const pNode32 = CreateBinaryTreeNode(3);
    const pNode41 = CreateBinaryTreeNode(4);
    const pNode42 = CreateBinaryTreeNode(4);
    const pNode6 = CreateBinaryTreeNode(6);
    const pNode22 = CreateBinaryTreeNode(2);
    const pNode11 = CreateBinaryTreeNode(1);
    const pNode12 = CreateBinaryTreeNode(1);

    ConnectTreeNodes(pNode5, pNode31, pNode32);
    ConnectTreeNodes(pNode31, pNode41, null);
    ConnectTreeNodes(pNode32, null, pNode42);
    ConnectTreeNodes(pNode41, pNode6, null);
    ConnectTreeNodes(pNode42, null, pNode22);
    ConnectTreeNodes(pNode6, pNode11, null);
    ConnectTreeNodes(pNode22, null, pNode12);

    Test("Test5", pNode5, false);

    DestroyTree(pNode5);
}

//               5
//              / \
//             3   3
//            /     \
//           4       4
//          /         \
//         2           2
//                      \
//                       1
function Test6()
{
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode31 = CreateBinaryTreeNode(3);
    const pNode32 = CreateBinaryTreeNode(3);
    const pNode41 = CreateBinaryTreeNode(4);
    const pNode42 = CreateBinaryTreeNode(4);
    const pNode21 = CreateBinaryTreeNode(2);
    const pNode22 = CreateBinaryTreeNode(2);
    const pNode12 = CreateBinaryTreeNode(1);

    ConnectTreeNodes(pNode5, pNode31, pNode32);
    ConnectTreeNodes(pNode31, pNode41, null);
    ConnectTreeNodes(pNode32, null, pNode42);
    ConnectTreeNodes(pNode41, pNode21, null);
    ConnectTreeNodes(pNode42, null, pNode22);
    ConnectTreeNodes(pNode21, null, null);
    ConnectTreeNodes(pNode22, null, pNode12);

    Test("Test6", pNode5, false);

    DestroyTree(pNode5);
}

// 只有一个结点
function Test7()
{
    const pNode1 = CreateBinaryTreeNode(1);
    Test("Test7", pNode1, true);

    DestroyTree(pNode1);
}

// 没有结点
function Test8()
{
    Test("Test8", null, true);
}

// 所有结点都有相同的值，树对称
//               5
//              / \
//             5   5
//            /     \
//           5       5
//          /         \
//         5           5
function Test9()
{
    const pNode1 = CreateBinaryTreeNode(5);
    const pNode21 = CreateBinaryTreeNode(5);
    const pNode22 = CreateBinaryTreeNode(5);
    const pNode31 = CreateBinaryTreeNode(5);
    const pNode32 = CreateBinaryTreeNode(5);
    const pNode41 = CreateBinaryTreeNode(5);
    const pNode42 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode1, pNode21, pNode22);
    ConnectTreeNodes(pNode21, pNode31, null);
    ConnectTreeNodes(pNode22, null, pNode32);
    ConnectTreeNodes(pNode31, pNode41, null);
    ConnectTreeNodes(pNode32, null, pNode42);
    ConnectTreeNodes(pNode41, null, null);
    ConnectTreeNodes(pNode42, null, null);

    Test("Test9", pNode1, true);

    DestroyTree(pNode1);
}

// 所有结点都有相同的值，树不对称
//               5
//              / \
//             5   5
//            /     \
//           5       5
//          /       /
//         5       5
function Test10()
{
    const pNode1 = CreateBinaryTreeNode(5);
    const pNode21 = CreateBinaryTreeNode(5);
    const pNode22 = CreateBinaryTreeNode(5);
    const pNode31 = CreateBinaryTreeNode(5);
    const pNode32 = CreateBinaryTreeNode(5);
    const pNode41 = CreateBinaryTreeNode(5);
    const pNode42 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode1, pNode21, pNode22);
    ConnectTreeNodes(pNode21, pNode31, null);
    ConnectTreeNodes(pNode22, null, pNode32);
    ConnectTreeNodes(pNode31, pNode41, null);
    ConnectTreeNodes(pNode32, pNode42, null);
    ConnectTreeNodes(pNode41, null, null);
    ConnectTreeNodes(pNode42, null, null);

    Test("Test10", pNode1, false);

    DestroyTree(pNode1);
}

function main(int argc, char* argv[])
{
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();
    Test8();
    Test9();
    Test10();
}
