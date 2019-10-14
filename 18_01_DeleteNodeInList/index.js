const util = require('util')

function DeleteNode(pListHead, pToBeDeleted) {

  if (!pListHead || !pToBeDeleted) return

  if (pToBeDeleted.next) {
    const next = pToBeDeleted.next
    pToBeDeleted.value = next.value
    pToBeDeleted.next = next.next

  }

  // case 头等于尾
  if (pListHead === pToBeDeleted) {
    delete pToBeDeleted
  }

  // case pToBeDeleted是尾节点
  if (!pToBeDeleted.next) {
    let node = pListHead
    while (pToBeDeleted === node.next) {
      node = node.next
    }

    node.next = null
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
function Test(pListHead, pNode)
{
    console.log("The original list is: \n");
    PrintList(pListHead);

    console.log("The node to be deleted is: \n");
    PrintListNode(pNode);

    DeleteNode(pListHead, pNode);
    
    console.log("The result list is: \n");
    PrintList(pListHead);
}

// 链表中有多个结点，删除中间的结点
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

    Test(pNode1, pNode3);

    DestroyList(pNode1);
}

// 链表中有多个结点，删除尾结点
function Test2()
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

    Test(pNode1, pNode5);

    DestroyList(pNode1);
}

// 链表中有多个结点，删除头结点
function Test3()
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

    Test(pNode1, pNode1);

    DestroyList(pNode1);
}

// 链表中只有一个结点，删除头结点
function Test4()
{
    const pNode1 = CreateListNode(1);

    Test(pNode1, pNode1);
}

// 链表为空
function Test5()
{
    Test(null, null);
}

(function main() {
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();

    return 0;
})();

