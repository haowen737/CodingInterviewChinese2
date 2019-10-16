const util = require('util')

// Note: This function failed in case 5
// function FindKthToTail(node, k) {
//   let prev = node
//   let next = node
//   let final = null

//   while(next) {
//     if (next.value - prev.value >= k) {
//       prev = prev.next
//     }

//     next = next.next
//   }

//   return 
// }

function FindKthToTail(pListHead, k) {
  if (!pListHead || !k) return null
  let ahead = pListHead
  let behind =  null
  for (let i = 0; i < k - 1; i++) {
    if (ahead && ahead.next) {
      ahead = ahead.next
    } else {
      return null
    }
  }

  behind = pListHead
  while(ahead.next) {
    ahead = ahead.next
    behind = behind.next
  }

  return behind ? behind.value : null
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
// 测试要找的结点在链表中间
function Test1()
{
    console.log("=====Test1 starts:=====\n");
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    console.log("expected result: 4.\n");
    const pNode = FindKthToTail(pNode1, 2);
    PrintListNode(pNode);

    DestroyList(pNode1);
}

// 测试要找的结点是链表的尾结点
function Test2()
{
    console.log("=====Test2 starts:=====\n");
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    console.log("expected result: 5.\n");
    const pNode = FindKthToTail(pNode1, 1);
    PrintListNode(pNode);

    DestroyList(pNode1);
}

// 测试要找的结点是链表的头结点
function Test3()
{
    console.log("=====Test3 starts:=====\n");
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    console.log("expected result: 1.\n");
    const pNode = FindKthToTail(pNode1, 5);
    PrintListNode(pNode);

    DestroyList(pNode1);
}

// 测试空链表
function Test4()
{
    console.log("=====Test4 starts:=====\n");
    console.log("expected result: null.\n");
    const pNode = FindKthToTail(null, 100);
    PrintListNode(pNode);
}

// 测试输入的第二个参数大于链表的结点总数
function Test5()
{
    console.log("=====Test5 starts:=====\n");
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    console.log("expected result: null.\n");
    const pNode = FindKthToTail(pNode1, 6);
    PrintListNode(pNode);

    DestroyList(pNode1);
}

// 测试输入的第二个参数为0
function Test6()
{
    console.log("=====Test6 starts:=====\n");
    const pNode1 = CreateListNode(1);
    const pNode2 = CreateListNode(2);
    const pNode3 = CreateListNode(3);
    const pNode4 = CreateListNode(4);
    const pNode5 = CreateListNode(5);

    ConnectListNodes(pNode1, pNode2);
    ConnectListNodes(pNode2, pNode3);
    ConnectListNodes(pNode3, pNode4);
    ConnectListNodes(pNode4, pNode5);

    console.log("expected result: null.\n");
    const pNode = FindKthToTail(pNode1, 0);
    PrintListNode(pNode);

    DestroyList(pNode1);
}

;(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();

    return 0;
})()

