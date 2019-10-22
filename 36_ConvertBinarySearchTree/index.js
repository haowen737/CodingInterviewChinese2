const util = require('util')

function Convert(pRootOfTree) {
  let pLastNodeInList = null
  ConvertNode(pRootOfTree, pLastNodeInList)

  let pHeadOfList = pLastNodeInList
  while(pHeadOfList && pHeadOfList.left) {
    pHeadOfList = pHeadOfList.left
  }

  return pHeadOfList
}

function ConvertNode(pNode, pLastNodeInList) {
  if (!pNode) return null
  const current = pNode

  if (current.left) ConvertNode(current.left, pLastNodeInList)

  current.left = pLastNodeInList

  if (pLastNodeInList) pLastNodeInList.right = current

  pLastNodeInList = current
  if (current.right) ConvertNode(current.right, pLastNodeInList)
}

// ====================测试代码====================
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
function CreateBinaryTreeNode(value) {
  return new TreeNode(value)
}
function ConnectTreeNodes(root, left, right) {
  root.left = left
  root.right = right
}
function PrintTree(node) {
  console.log(util.inspect(node, {showHidden: false, depth: null}))
}
function DestroyList(list) {
  delete list
}
function PrintDoubleLinkedList(pHeadOfList) {
    let pNode = pHeadOfList;

    console.log("The nodes from left to right are:\n");
    while(pNode != null)
    {
        console.log("%d\t", pNode.value);

        if(pNode.right == null)
            break;
        pNode = pNode.right;
    }

    console.log("\nThe nodes from right to left are:\n");
    while(pNode != null)
    {
        console.log("%d\t", pNode.value);

        if(pNode.left == null)
            break;
        pNode = pNode.left;
    }

    console.log("\n");
}

function DestroyList(pHeadOfList)
{
    let pNode = pHeadOfList;
    while(pNode != null)
    {
        let pNext = pNode.right;

        delete pNode;
        pNode = pNext;
    }
}

function Test(testName, pRootOfTree)
{
    if(testName != null)
        console.log("%s begins:\n", testName);

    PrintTree(pRootOfTree);

    let pHeadOfList = Convert(pRootOfTree);

    PrintDoubleLinkedList(pHeadOfList);
}

//            10
//         /      \
//        6        14
//       /\        /\
//      4  8     12  16
function Test1()
{
    let pNode10 = CreateBinaryTreeNode(10);
    let pNode6 = CreateBinaryTreeNode(6);
    let pNode14 = CreateBinaryTreeNode(14);
    let pNode4 = CreateBinaryTreeNode(4);
    let pNode8 = CreateBinaryTreeNode(8);
    let pNode12 = CreateBinaryTreeNode(12);
    let pNode16 = CreateBinaryTreeNode(16);

    ConnectTreeNodes(pNode10, pNode6, pNode14);
    ConnectTreeNodes(pNode6, pNode4, pNode8);
    ConnectTreeNodes(pNode14, pNode12, pNode16);

    Test("Test1", pNode10);

    DestroyList(pNode4);
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
function Test2()
{
    let pNode5 = CreateBinaryTreeNode(5);
    let pNode4 = CreateBinaryTreeNode(4);
    let pNode3 = CreateBinaryTreeNode(3);
    let pNode2 = CreateBinaryTreeNode(2);
    let pNode1 = CreateBinaryTreeNode(1);

    ConnectTreeNodes(pNode5, pNode4, null);
    ConnectTreeNodes(pNode4, pNode3, null);
    ConnectTreeNodes(pNode3, pNode2, null);
    ConnectTreeNodes(pNode2, pNode1, null);

    Test("Test2", pNode5);

    DestroyList(pNode1);
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
    let pNode1 = CreateBinaryTreeNode(1);
    let pNode2 = CreateBinaryTreeNode(2);
    let pNode3 = CreateBinaryTreeNode(3);
    let pNode4 = CreateBinaryTreeNode(4);
    let pNode5 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode1, null, pNode2);
    ConnectTreeNodes(pNode2, null, pNode3);
    ConnectTreeNodes(pNode3, null, pNode4);
    ConnectTreeNodes(pNode4, null, pNode5);

    Test("Test3", pNode1);

    DestroyList(pNode1);
}

// 树中只有1个结点
function Test4()
{
    let pNode1 = CreateBinaryTreeNode(1);
    Test("Test4", pNode1);

    DestroyList(pNode1);
}

// 树中没有结点
function Test5()
{
    Test("Test5", null);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();

    return 0;
})()
