
const util = require('util')
function Merge(pHead1, pHead2) {
  if (!pHead2) return pHead1
  if (!pHead1) return pHead2

  let merged = null

  if (pHead1.value > pHead2.value) {
    merged = pHead2
    merged.next = Merge(pHead1, pHead2.next)
  } else {
    merged = pHead1
    merged.next = Merge(pHead1.next, pHead2)
  }

  return merged
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
function Test(testName, pHead1, pHead2)
{
    if(testName != null)
        console.log("%s begins:\n", testName);

    console.log("The first list is:\n");
    PrintList(pHead1);

    console.log("The second list is:\n");
    PrintList(pHead2);

    console.log("The merged list is:\n");
    const pMergedHead = Merge(pHead1, pHead2);
    PrintList(pMergedHead);
    
    console.log("\n\n");

    return pMergedHead;
}

// list1: 1->3->5
// list2: 2->4->6
function Test1()
{
    const pNode1 = CreateListNode(1);
    const pNode3 = CreateListNode(3);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode3);
    ConnectListNodes(pNode3, pNode5);

    const pNode2 = CreateListNode(2);
    const pNode4 = CreateListNode(4);
    const pNode6 = CreateListNode(6);

    ConnectListNodes(pNode2, pNode4);
    ConnectListNodes(pNode4, pNode6);

    const pMergedHead = Test("Test1", pNode1, pNode2);

    DestroyList(pMergedHead);
}

// 两个链表中有重复的数字
// list1: 1->3->5
// list2: 1->3->5
function Test2()
{
    const pNode1 = CreateListNode(1);
    const pNode3 = CreateListNode(3);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode3);
    ConnectListNodes(pNode3, pNode5);

    const pNode2 = CreateListNode(1);
    const pNode4 = CreateListNode(3);
    const pNode6 = CreateListNode(5);

    ConnectListNodes(pNode2, pNode4);
    ConnectListNodes(pNode4, pNode6);

    const pMergedHead = Test("Test2", pNode1, pNode2);

    DestroyList(pMergedHead);
}

// 两个链表都只有一个数字
// list1: 1
// list2: 2
function Test3()
{
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);

    const pMergedHead = Test("Test3", pNode1, pNode2);

    DestroyList(pMergedHead);
}

// 一个链表为空链表
// list1: 1->3->5
// list2: 空链表
function Test4()
{
    const pNode1 = CreateListNode(1);
    const pNode3 = CreateListNode(3);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode3);
    ConnectListNodes(pNode3, pNode5);

    const pMergedHead = Test("Test4", pNode1, null);

    DestroyList(pMergedHead);
}

// 两个链表都为空链表
// list1: 空链表
// list2: 空链表
function Test5()
{
    const pMergedHead = Test("Test5", null, null);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();

    return 0;
})()

