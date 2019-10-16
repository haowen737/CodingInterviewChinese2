const util = require('util')

function ReverseList(pHead) {
  if (!pHead) return null

  let pNode = pHead
  let pPrev = null
  let reversedHead = null

  while(pNode) {
    const next = pNode.next
    if (!next) {
      reversedHead = pNode
    }

    pNode.next = pPrev

    pPrev = pNode
    pNode = next
  }

  return reversedHead
}

// ====================测试代码====================
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
function CreateListNode(value) {
  return new ListNode(value)
}
function ConnectListNodes(node1, node2) {
  node1.next = node2
}
function PrintList(node) {
  console.log(util.inspect(node, {showHidden: false, depth: null}))
}
function PrintListNode(node) {
  console.log(util.inspect(node, {showHidden: false, depth: 1}))
}
function DestroyList(list) {
  delete list
}
function Test(pHead)
{
    console.log("The original list is: \n");
    PrintList(pHead);

    const pReversedHead = ReverseList(pHead);

    console.log("The reversed list is: \n");
    PrintList(pReversedHead);

    return pReversedHead;
}

// 输入的链表有多个结点
function Test1()
{
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    const pReversedHead = Test(pNode1);

    DestroyList(pReversedHead);
}

// 输入的链表只有一个结点
function Test2()
{
    const pNode1 = CreateListNode(1);

    const pReversedHead = Test(pNode1);

    DestroyList(pReversedHead);
}

// 输入空链表
function Test3()
{
    Test(null);
}

;(function main(){
    Test1();
    Test2();
    Test3();

    return 0;
})()

