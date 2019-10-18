// Code passed at leetcode.cn
function MirrorRecursively(pNode) {
    if (pNode === null) return null

    const dummy = pNode.pLeft
    pNode.pLeft = pNode.pRight
    pNode.pRight = dummy

    if (pNode.pLeft) MirrorRecursively(pNode.pLeft)

    if (pNode.pRight) MirrorRecursively(pNode.pRight)
}
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
// 测试完全二叉树：除了叶子节点，其他节点都有两个子节点
//            8
//        6      10
//       5 7    9  11
function Test1()
{
    console.log("=====Test1 starts:=====\n");
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

    PrintTree(pNode8);

    console.log("=====Test1: MirrorRecursively=====\n");
    MirrorRecursively(pNode8);
    PrintTree(pNode8);

    console.log("=====Test1: MirrorIteratively=====\n");
    // MirrorIteratively(pNode8);
    PrintTree(pNode8);

    DestroyTree(pNode8);
}

// 测试二叉树：出叶子结点之外，左右的结点都有且只有一个左子结点
//            8
//          7   
//        6 
//      5
//    4
function Test2()
{
    console.log("=====Test2 starts:=====\n");
    const pNode8 = CreateBinaryTreeNode(8);
    const pNode7 = CreateBinaryTreeNode(7);
    const pNode6 = CreateBinaryTreeNode(6);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode4 = CreateBinaryTreeNode(4);

    ConnectTreeNodes(pNode8, pNode7, nullptr);
    ConnectTreeNodes(pNode7, pNode6, nullptr);
    ConnectTreeNodes(pNode6, pNode5, nullptr);
    ConnectTreeNodes(pNode5, pNode4, nullptr);

    PrintTree(pNode8);

    console.log("=====Test2: MirrorRecursively=====\n");
    MirrorRecursively(pNode8);
    PrintTree(pNode8);

    console.log("=====Test2: MirrorIteratively=====\n");
    MirrorIteratively(pNode8);
    PrintTree(pNode8);

    DestroyTree(pNode8);
}

// 测试二叉树：出叶子结点之外，左右的结点都有且只有一个右子结点
//            8
//             7   
//              6 
//               5
//                4
function Test3()
{
    console.log("=====Test3 starts:=====\n");
    const pNode8 = CreateBinaryTreeNode(8);
    const pNode7 = CreateBinaryTreeNode(7);
    const pNode6 = CreateBinaryTreeNode(6);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode4 = CreateBinaryTreeNode(4);

    ConnectTreeNodes(pNode8, nullptr, pNode7);
    ConnectTreeNodes(pNode7, nullptr, pNode6);
    ConnectTreeNodes(pNode6, nullptr, pNode5);
    ConnectTreeNodes(pNode5, nullptr, pNode4);

    PrintTree(pNode8);

    console.log("=====Test3: MirrorRecursively=====\n");
    MirrorRecursively(pNode8);
    PrintTree(pNode8);

    console.log("=====Test3: MirrorIteratively=====\n");
    MirrorIteratively(pNode8);
    PrintTree(pNode8);

    DestroyTree(pNode8);
}

// 测试空二叉树：根结点为空指针
function Test4()
{
    console.log("=====Test4 starts:=====\n");
    const pNode = nullptr;

    PrintTree(pNode);

    console.log("=====Test4: MirrorRecursively=====\n");
    MirrorRecursively(pNode);
    PrintTree(pNode);

    console.log("=====Test4: MirrorIteratively=====\n");
    MirrorIteratively(pNode);
    PrintTree(pNode);
}

// 测试只有一个结点的二叉树
function Test5()
{
    console.log("=====Test5 starts:=====\n");
    const pNode8 = CreateBinaryTreeNode(8);

    PrintTree(pNode8);

    console.log("=====Test4: MirrorRecursively=====\n");
    MirrorRecursively(pNode8);
    PrintTree(pNode8);

    console.log("=====Test4: MirrorIteratively=====\n");
    MirrorIteratively(pNode8);
    PrintTree(pNode8);
}

;(function main()
{
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();

    return 0;
})()

