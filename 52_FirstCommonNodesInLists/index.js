function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) return null

  function nodeLength (node) {
    let count = 0
    let dummy = node
    while(dummy.next) {
      count++
      dummy = dummy.next
    }

    return count
  }

  let pHeadLong = pHead1
  let pHeadShort = pHead2
  let pLengthLong = nodeLength(pHeadLong) 
  let pLengthShort = nodeLength(pHeadShort)
  let diff = pLengthLong - pLengthShort
  if (pLengthLong < pLengthShort) {
    pHeadLong = pHead2
    pHeadShort = pHead1
    diff = pLengthShort - pLengthLong
  }

  while(diff > 0) {
    pHeadLong = pHeadLong.next
    diff--
  }

  for (let index = 0; index <= pLengthShort; index++) {

    if (pHeadShort.value === pHeadLong.value) {
      return pHeadShort
    }

    pHeadLong = pHeadLong.next
    pHeadShort = pHeadShort.next
  }

  return null
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

function Test(testName, pHead1, pHead2, pExpected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    let pResult = FindFirstCommonNode(pHead1, pHead2);
    console.log('pResult', pResult)
    pResult = pResult ? pResult.value : pResult
    pExpected = pExpected ? pExpected.value : pExpected
    if(pResult == pExpected)
        console.log("Passed.\n");
    else
        console.log("Failed.\n");
}

// 第一个公共结点在链表中间
// 1 - 2 - 3 \
//            6 - 7
//     4 - 5 /
function Test1()
{
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);
    const pNode6 = CreateListNode(6);
    const pNode7 = CreateListNode(7);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode6);
    ConnectListNodes(pNode4, pNode5);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    Test("Test1", pNode1, pNode4, pNode6);

    DestroyNode(pNode1);
    DestroyNode(pNode2);
    DestroyNode(pNode3);
    DestroyNode(pNode4);
    DestroyNode(pNode5);
    DestroyNode(pNode6);
    DestroyNode(pNode7);
}

// 没有公共结点
// 1 - 2 - 3 - 4
//            
// 5 - 6 - 7
function Test2()
{
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);
    const pNode6 = CreateListNode(6);
    const pNode7 = CreateListNode(7);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    Test("Test2", pNode1, pNode5, null);

    DestroyList(pNode1);
    DestroyList(pNode5);
}

// 公共结点是最后一个结点
// 1 - 2 - 3 - 4 \
//                7
//         5 - 6 /
function Test3()
{
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);
    const pNode6 = CreateListNode(6);
    const pNode7 = CreateListNode(7);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode7);
    ConnectListNodes(pNode5, pNode6);
    ConnectListNodes(pNode6, pNode7);

    Test("Test3", pNode1, pNode5, pNode7);

    DestroyNode(pNode1);
    DestroyNode(pNode2);
    DestroyNode(pNode3);
    DestroyNode(pNode4);
    DestroyNode(pNode5);
    DestroyNode(pNode6);
    DestroyNode(pNode7);
}

// 公共结点是第一个结点
// 1 - 2 - 3 - 4 - 5
// 两个链表完全重合   
function Test4()
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

    Test("Test4", pNode1, pNode1, pNode1);

    DestroyList(pNode1);
}

// 输入的两个链表有一个空链表
function Test5()
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

    Test("Test5", null, pNode1, null);

    DestroyList(pNode1);
}

// 输入的两个链表有一个空链表
function Test6()
{
    Test("Test6", null, null, null);
}

function DestroyNode(pNode)
{
    delete pNode;
    pNode = null;
}

;(function main(){
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();

    return 0;
})()

