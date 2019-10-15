const util = require('util')
function DeleteDuplication(pHead) {
  if (!pHead) return

  let pPrevNode = null
  let pNode = pHead
  while(pNode) {
    let pNext = pNode.next
    let needDelete = false
    if (pNext && pNext.value === pNode.value) needDelete = true

    if (!needDelete) {
      pPrevNode = pNode
      pNode = pNode.next
    } else {
      let value = pNode.value
      let pToBeDel = pNode
      
      while(pToBeDel && pToBeDel.value === value) {
        pNext = pToBeDel.next
        pToBeDel = pNext
      }

      if (pPrevNode == null) {
        if (pNext) {
          pHead.value = pNext.value
          pHead.next = pNext.next
        } else {
          // delete whole pHead
        }
      } else {
        pPrevNode.next = pNext
      }
      pNode = pNext
    }

  }

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
function sizeof (s) {
  return s.length
}
function Test(testName, pHead, expectedValues, expectedLength)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    DeleteDuplication(pHead);

    let index = 0;
    let pNode = pHead;
    PrintList(pNode)
    while(pNode != null && index < expectedLength)
    {
        if(pNode.value != expectedValues[index])
            break;

        pNode = pNode.next;
        index++;
    }

    if(pNode == null && index == expectedLength)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

// 某些结点是重复的
function Test1()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);
    let pNode3 = CreateListNode(3);
    let pNode4 = CreateListNode(3);
    let pNode5 = CreateListNode(4);
    let pNode6 = CreateListNode(4);
    let pNode7 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    let pHead = pNode1;

    const expectedValues = [ 1, 2, 5 ];
    Test("Test1", pHead, expectedValues, sizeof(expectedValues));

    DestroyList(pHead);
}

// 没有重复的结点
function Test2()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);
    let pNode3 = CreateListNode(3);
    let pNode4 = CreateListNode(4);
    let pNode5 = CreateListNode(5);
    let pNode6 = CreateListNode(6);
    let pNode7 = CreateListNode(7);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    let pHead = pNode1;

    const expectedValues = [ 1, 2, 3, 4, 5, 6, 7 ];
    Test("Test2", pHead, expectedValues, sizeof(expectedValues));

    DestroyList(pHead);
}

// 除了一个结点之外其他所有结点的值都相同
function Test3()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(1);
    let pNode3 = CreateListNode(1);
    let pNode4 = CreateListNode(1);
    let pNode5 = CreateListNode(1);
    let pNode6 = CreateListNode(1);
    let pNode7 = CreateListNode(2);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    let pHead = pNode1;

    const expectedValues = [ 2 ];
    Test("Test3", pHead, expectedValues, sizeof(expectedValues));

    DestroyList(pHead);
}

// 所有结点的值都相同
function Test4()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(1);
    let pNode3 = CreateListNode(1);
    let pNode4 = CreateListNode(1);
    let pNode5 = CreateListNode(1);
    let pNode6 = CreateListNode(1);
    let pNode7 = CreateListNode(1);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    let pHead = pNode1;

    Test("Test4", pHead, null, 0);

    DestroyList(pHead);
}

// 所有结点都成对出现
function Test5()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(1);
    let pNode3 = CreateListNode(2);
    let pNode4 = CreateListNode(2);
    let pNode5 = CreateListNode(3);
    let pNode6 = CreateListNode(3);
    let pNode7 = CreateListNode(4);
    let pNode8 = CreateListNode(4);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);
    ConnectListNodes(pNode7, pNode8);

    let pHead = pNode1;

    Test("Test5", pHead, null, 0);

    DestroyList(pHead);
}

// 除了两个结点之外其他结点都成对出现
function Test6()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(1);
    let pNode3 = CreateListNode(2);
    let pNode4 = CreateListNode(3);
    let pNode5 = CreateListNode(3);
    let pNode6 = CreateListNode(4);
    let pNode7 = CreateListNode(5);
    let pNode8 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);
    ConnectListNodes(pNode7, pNode8);

    let pHead = pNode1;

    const expectedValues = [ 2, 4 ];
    Test("Test6", pHead, expectedValues, sizeof(expectedValues));

    DestroyList(pHead);
}

// 链表中只有两个不重复的结点
function Test7()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);

    ConnectListNodes(pNode1, pNode2);

    let pHead = pNode1;

    const expectedValues = [ 1, 2 ];
    Test("Test7", pHead, expectedValues, sizeof(expectedValues));

    DestroyList(pHead);
}

// 结点中只有一个结点
function Test8()
{
    let pNode1 = CreateListNode(1);

    ConnectListNodes(pNode1, null);

    let pHead = pNode1;

    const expectedValues = [ 1 ];
    Test("Test8", pHead, expectedValues, sizeof(expectedValues));

    DestroyList(pHead);
}

// 结点中只有两个重复的结点
function Test9()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(1);

    ConnectListNodes(pNode1, pNode2);

    let pHead = pNode1;

    Test("Test9", pHead, null, 0);

    DestroyList(pHead);
}

// 空链表
function Test10()
{
    let pHead = null;

    Test("Test10", pHead, null, 0);
}

(function main() {
    // Test1();
    // Test2();
    // Test3();
    // Test4();
    Test5();
    // Test6();
    // Test7();
    // Test8();
    // Test9();
    // Test10();

    return 0;
})()
