function HasSubtree(pRoot1, pRoot2) {
  let result = false
  if (pRoot1 && pRoot2) {

    if (pRoot1.value === pRoot2.value) {
      result = DoesTree1HaveTree2(pRoot1, pRoot2)
    }

    if (!result) result = DoesTree1HaveTree2(pRoot1.pRight, pRoot2)

    if (!result) result = DoesTree1HaveTree2(pRoot1.pLeft, pRoot2)

  }

  return result
}

function DoesTree1HaveTree2(pRoot1, pRoot2) {
  if(pRoot2 == null) return true;

  if(pRoot1 == null) return false;
  // if (!pRoot1 || !pRoot2) return false
  if (pRoot1.value !== pRoot2.value) return false

  return DoesTree1HaveTree2(pRoot1.pLeft, pRoot2.pLeft) &&
    DoesTree1HaveTree2(pRoot1.pRight, pRoot2.pRight)
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
function Test(testName, pRoot1, pRoot2, expected)
{
    if(HasSubtree(pRoot1, pRoot2) == expected)
        console.log("%s passed.\n", testName);
    else
        console.log("%s failed.\n", testName);
}

// 树中结点含有分叉，树B是树A的子结构
//                  8                8
//              /       \           / \
//             8         7         9   2
//           /   \
//          9     2
//               / \
//              4   7
function Test1()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(8);
    const pNodeA3 = CreateBinaryTreeNode(7);
    const pNodeA4 = CreateBinaryTreeNode(9);
    const pNodeA5 = CreateBinaryTreeNode(2);
    const pNodeA6 = CreateBinaryTreeNode(4);
    const pNodeA7 = CreateBinaryTreeNode(7);

    ConnectTreeNodes(pNodeA1, pNodeA2, pNodeA3);
    ConnectTreeNodes(pNodeA2, pNodeA4, pNodeA5);
    ConnectTreeNodes(pNodeA5, pNodeA6, pNodeA7);

    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeB1, pNodeB2, pNodeB3);

    Test("Test1", pNodeA1, pNodeB1, true);

    DestroyTree(pNodeA1);
    DestroyTree(pNodeB1);
}

// 树中结点含有分叉，树B不是树A的子结构
//                  8                8
//              /       \           / \
//             8         7         9   2
//           /   \
//          9     3
//               / \
//              4   7
function Test2()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(8);
    const pNodeA3 = CreateBinaryTreeNode(7);
    const pNodeA4 = CreateBinaryTreeNode(9);
    const pNodeA5 = CreateBinaryTreeNode(3);
    const pNodeA6 = CreateBinaryTreeNode(4);
    const pNodeA7 = CreateBinaryTreeNode(7);

    ConnectTreeNodes(pNodeA1, pNodeA2, pNodeA3);
    ConnectTreeNodes(pNodeA2, pNodeA4, pNodeA5);
    ConnectTreeNodes(pNodeA5, pNodeA6, pNodeA7);

    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeB1, pNodeB2, pNodeB3);

    Test("Test2", pNodeA1, pNodeB1, false);

    DestroyTree(pNodeA1);
    DestroyTree(pNodeB1);
}

// 树中结点只有左子结点，树B是树A的子结构
//                8                  8
//              /                   / 
//             8                   9   
//           /                    /
//          9                    2
//         /      
//        2        
//       /
//      5
function Test3()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(8);
    const pNodeA3 = CreateBinaryTreeNode(9);
    const pNodeA4 = CreateBinaryTreeNode(2);
    const pNodeA5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNodeA1, pNodeA2, null);
    ConnectTreeNodes(pNodeA2, pNodeA3, null);
    ConnectTreeNodes(pNodeA3, pNodeA4, null);
    ConnectTreeNodes(pNodeA4, pNodeA5, null);

    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeB1, pNodeB2, null);
    ConnectTreeNodes(pNodeB2, pNodeB3, null);

    Test("Test3", pNodeA1, pNodeB1, true);

    DestroyTree(pNodeA1);
    DestroyTree(pNodeB1);
}

// 树中结点只有左子结点，树B不是树A的子结构
//                8                  8
//              /                   / 
//             8                   9   
//           /                    /
//          9                    3
//         /      
//        2        
//       /
//      5
function Test4()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(8);
    const pNodeA3 = CreateBinaryTreeNode(9);
    const pNodeA4 = CreateBinaryTreeNode(2);
    const pNodeA5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNodeA1, pNodeA2, null);
    ConnectTreeNodes(pNodeA2, pNodeA3, null);
    ConnectTreeNodes(pNodeA3, pNodeA4, null);
    ConnectTreeNodes(pNodeA4, pNodeA5, null);

    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(3);

    ConnectTreeNodes(pNodeB1, pNodeB2, null);
    ConnectTreeNodes(pNodeB2, pNodeB3, null);

    Test("Test4", pNodeA1, pNodeB1, false);

    DestroyTree(pNodeA1);
    DestroyTree(pNodeB1);
}

// 树中结点只有右子结点，树B是树A的子结构
//       8                   8
//        \                   \ 
//         8                   9   
//          \                   \
//           9                   2
//            \      
//             2        
//              \
//               5
function Test5()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(8);
    const pNodeA3 = CreateBinaryTreeNode(9);
    const pNodeA4 = CreateBinaryTreeNode(2);
    const pNodeA5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNodeA1, null, pNodeA2);
    ConnectTreeNodes(pNodeA2, null, pNodeA3);
    ConnectTreeNodes(pNodeA3, null, pNodeA4);
    ConnectTreeNodes(pNodeA4, null, pNodeA5);

    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeB1, null, pNodeB2);
    ConnectTreeNodes(pNodeB2, null, pNodeB3);

    Test("Test5", pNodeA1, pNodeB1, true);

    DestroyTree(pNodeA1);
    DestroyTree(pNodeB1);
}

// 树A中结点只有右子结点，树B不是树A的子结构
//       8                   8
//        \                   \ 
//         8                   9   
//          \                 / \
//           9               3   2
//            \      
//             2        
//              \
//               5
function Test6()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(8);
    const pNodeA3 = CreateBinaryTreeNode(9);
    const pNodeA4 = CreateBinaryTreeNode(2);
    const pNodeA5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNodeA1, null, pNodeA2);
    ConnectTreeNodes(pNodeA2, null, pNodeA3);
    ConnectTreeNodes(pNodeA3, null, pNodeA4);
    ConnectTreeNodes(pNodeA4, null, pNodeA5);

    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(3);
    const pNodeB4 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeB1, null, pNodeB2);
    ConnectTreeNodes(pNodeB2, pNodeB3, pNodeB4);

    Test("Test6", pNodeA1, pNodeB1, false);

    DestroyTree(pNodeA1);
    DestroyTree(pNodeB1);
}

// 树A为空树
function Test7()
{
    const pNodeB1 = CreateBinaryTreeNode(8);
    const pNodeB2 = CreateBinaryTreeNode(9);
    const pNodeB3 = CreateBinaryTreeNode(3);
    const pNodeB4 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeB1, null, pNodeB2);
    ConnectTreeNodes(pNodeB2, pNodeB3, pNodeB4);

    Test("Test7", null, pNodeB1, false);

    DestroyTree(pNodeB1);
}

// 树B为空树
function Test8()
{
    const pNodeA1 = CreateBinaryTreeNode(8);
    const pNodeA2 = CreateBinaryTreeNode(9);
    const pNodeA3 = CreateBinaryTreeNode(3);
    const pNodeA4 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNodeA1, null, pNodeA2);
    ConnectTreeNodes(pNodeA2, pNodeA3, pNodeA4);

    Test("Test8", pNodeA1, null, false);

    DestroyTree(pNodeA1);
}

// 树A和树B都为空
function Test9()
{
    Test("Test9", null, null, false);
}

;(function main(){
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();
    Test8();
    Test9();

    return 0;
})();

