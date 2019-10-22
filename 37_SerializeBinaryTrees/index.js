// Code passed at leetcode-cn.com
// 297. 二叉树的序列化与反序列化
const util = require('util')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let serialized = ''
  function core (currentRoot, result) {

    result = result + currentRoot.value + ','

    if (currentRoot.left) {
      result = core(currentRoot.left, result)
    } else {
      result = result + null + ','
    }

    
    if (currentRoot.right) {
      result = core(currentRoot.right, result)
    } else {
      result =  result + null + ','
    }
    return result
  }
  
  return core(root, serialized)
};

var build = function(data) {
  if (!data) return null

  const head = data.shift()
  if (!head || head === 'null') return null

  let node = new TreeNode(head)
  node.left = build(data)
  node.right = build(data)
  return node
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(',')
  let listHead = build(list)
  return listHead
};

// ==================== 辅助测试代码 ===================

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
function DestroyTree(list) {
  delete list
}
// ==================== Test Code ====================
function isSameTree(pRoot1, pRoot2)
{
    if(pRoot1 == null && pRoot2 == null)
        return true;

    if(pRoot1 == null || pRoot2 == null)
        return false;

    if(pRoot1.m_nValue != pRoot2.m_nValue)
        return false;

    return isSameTree(pRoot1.m_pLeft, pRoot2.m_pLeft) &&
        isSameTree(pRoot1.m_pRight, pRoot2.m_pRight);
}

function Test(testName, pRoot) {
    if(testName != null)
        console.log("%s begins: \n", testName);

    PrintTree(pRoot);

    let serialized = serialize(pRoot)
    PrintTree(serialized)

    let newRoot = deserialize(serialized)
    

    PrintTree(newRoot);

    if(isSameTree(pRoot, newRoot))
        console.log("The deserialized tree is same as the oritinal tree.\n\n");
    else
        console.log("The deserialized tree is NOT same as the oritinal tree.\n\n");

    DestroyTree(newRoot);
}

//            8
//        6      10
//       5 7    9  11
function Test1()
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

    Test("Test1", pNode8);

    DestroyTree(pNode8);
}

//            5
//          4
//        3
//      2
function Test2()
{
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode2 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNode5, pNode4, null);
    ConnectTreeNodes(pNode4, pNode3, null);
    ConnectTreeNodes(pNode3, pNode2, null);

    Test("Test2", pNode5);

    DestroyTree(pNode5);
}

//        5
//         4
//          3
//           2
function Test3()
{
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode4 = CreateBinaryTreeNode(4);
    const pNode3 = CreateBinaryTreeNode(3);
    const pNode2 = CreateBinaryTreeNode(2);

    ConnectTreeNodes(pNode5, null, pNode4);
    ConnectTreeNodes(pNode4, null, pNode3);
    ConnectTreeNodes(pNode3, null, pNode2);

    Test("Test3", pNode5);

    DestroyTree(pNode5);
}

function Test4()
{
    const pNode5 = CreateBinaryTreeNode(5);

    Test("Test4", pNode5);

    DestroyTree(pNode5);
}

function Test5()
{
    Test("Test5", null);
}

//        5
//         5
//          5
//         5
//        5
//       5 5
//      5   5
function Test6()
{
    const pNode1 = CreateBinaryTreeNode(5);
    const pNode2 = CreateBinaryTreeNode(5);
    const pNode3 = CreateBinaryTreeNode(5);
    const pNode4 = CreateBinaryTreeNode(5);
    const pNode5 = CreateBinaryTreeNode(5);
    const pNode61 = CreateBinaryTreeNode(5);
    const pNode62 = CreateBinaryTreeNode(5);
    const pNode71 = CreateBinaryTreeNode(5);
    const pNode72 = CreateBinaryTreeNode(5);

    ConnectTreeNodes(pNode1, null, pNode2);
    ConnectTreeNodes(pNode2, null, pNode3);
    ConnectTreeNodes(pNode3, pNode4, null);
    ConnectTreeNodes(pNode4, pNode5, null);
    ConnectTreeNodes(pNode5, pNode61, pNode62);
    ConnectTreeNodes(pNode61, pNode71, null);
    ConnectTreeNodes(pNode62, null, pNode72);

    Test("Test6", pNode1);

    DestroyTree(pNode1);
}

;(function main(){
    Test1();
    // Test2();
    // Test3();
    // Test4();
    // Test5();
    // Test6();

    return 0;
})()
