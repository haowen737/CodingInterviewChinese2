function MeetingNode(pHead) {
  if (!pHead) return null
  let pSlow = pHead.next
  let pFast = pHead

  if (!pSlow) return null

  pFast = pSlow.next
  while (pSlow && pFast) {

    if (pSlow.value === pFast.value) {
      return pFast
    }

    pSlow = pSlow.next
    pFast = pFast.next

    if (pFast !== null) pFast = pFast.next
  }

  return null
}
function EntryNodeOfLoop(pHead) {

  // 存在环 
  const pMeet = MeetingNode(pHead)
  if (!pMeet) return null
  // count
  let countNode = pMeet.next
  let index = 1
  while(countNode.value !== pMeet.value) {
    index++
    countNode = countNode.next
  }

  let pAhead = pHead
  let pBehind = pHead
  for (let i = 0; i < index; i++) {
    pAhead = pAhead.next
  }

  while(pAhead.value !== pBehind.value) {
    pBehind = pBehind.next
    pAhead = pAhead.next
  }

  return pBehind
}

// ==================== Test Code ====================
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
function Test(testName, pHead, entryNode)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    if(EntryNodeOfLoop(pHead) == entryNode)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}

// A list has a node, without a loop
function Test1()
{
    let pNode1 = CreateListNode(1);

    Test("Test1", pNode1, null);

    DestroyList(pNode1);
}

// A list has a node, with a loop
function Test2()
{
    let pNode1 = CreateListNode(1);
    ConnectListNodes(pNode1, pNode1);

    Test("Test2", pNode1, pNode1);

    delete pNode1;
    pNode1 = null;
}

// A list has multiple nodes, with a loop 
function Test3()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);
    let pNode3 = CreateListNode(3);
    let pNode4 = CreateListNode(4);
    let pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode3);

    Test("Test3", pNode1, pNode3);

    delete pNode1;
    pNode1 = null;
    delete pNode2;
    pNode2 = null;
    delete pNode3;
    pNode3 = null;
    delete pNode4;
    pNode4 = null;
    delete pNode5;
    pNode5 = null;
}

// A list has multiple nodes, with a loop 
function Test4()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);
    let pNode3 = CreateListNode(3);
    let pNode4 = CreateListNode(4);
    let pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode1);

    Test("Test4", pNode1, pNode1);

    delete pNode1;
    pNode1 = null;
    delete pNode2;
    pNode2 = null;
    delete pNode3;
    pNode3 = null;
    delete pNode4;
    pNode4 = null;
    delete pNode5;
    pNode5 = null;
}

// A list has multiple nodes, with a loop 
function Test5()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);
    let pNode3 = CreateListNode(3);
    let pNode4 = CreateListNode(4);
    let pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode5);

    Test("Test5", pNode1, pNode5);

    delete pNode1;
    pNode1 = null;
    delete pNode2;
    pNode2 = null;
    delete pNode3;
    pNode3 = null;
    delete pNode4;
    pNode4 = null;
    delete pNode5;
    pNode5 = null;
}

// A list has multiple nodes, without a loop 
function Test6()
{
    let pNode1 = CreateListNode(1);
    let pNode2 = CreateListNode(2);
    let pNode3 = CreateListNode(3);
    let pNode4 = CreateListNode(4);
    let pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    Test("Test6", pNode1, null);

    DestroyList(pNode1);
}

// Empty list
function Test7()
{
    Test("Test7", null, null);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();

    return 0;
})()