const util = require('util')

// clone dummy
// clone sibling
function CloneNext (pHead) {
  let pNode = pHead
  while(pNode) {
    const dummy = CreateNode(pNode.value)
    dummy.next = pNode.next

    pNode.next = dummy
    pNode = dummy.next
  }

}

function CloneSibling(pHead) {
  let pNode = pHead
  while(pNode) {
    const clonedPNode = pNode.next
    if (pNode.sibling) {
      clonedPNode.sibling = pNode.sibling.next
    }

    pNode = clonedPNode.next
  }

}
function ReconnectNode(pHead) {
  let pNode = pHead
  let pCloneHead = dummy = null

  if (pNode) {
    pCloneHead = dummy = pNode.next
    pNode.next = dummy.next
    pNode = dummy.next
  }

  while(pNode) {
    const cloned = pNode.next
    if (!dummy) {
      dummy = cloned
    } else {
      dummy.next = cloned
      dummy = dummy.next
    }

    pNode.next = cloned.next
    pNode = pNode.next
  }
  return pCloneHead
}
function Clone(pHead) {
  CloneNext(pHead)
  CloneSibling(pHead)
  return ReconnectNode(pHead)
}
// ====================测试代码====================
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.sibling = null
  }
}
function CreateNode(value) {
  return new ListNode(value)
}
function BuildNodes(pNode1, next, sibling) {
  pNode1.next = next
  pNode1.sibling = sibling
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
function Test(testName, pHead) {
    if(testName != null)
        console.log("%s begins:\n", testName);

    console.log("The original list is:\n");
    PrintList(pHead);

    const pClonedHead = Clone(pHead);

    console.log("The cloned list is:\n");
    PrintList(pClonedHead);
}

//          -----------------
//         \|/              |
//  1-------2-------3-------4-------5
//  |       |      /|\             /|\
//  --------+--------               |
//          -------------------------
function Test1()
{
    const pNode1 = CreateNode(1);
    const pNode2 = CreateNode(2);
    const pNode3 = CreateNode(3);
    const pNode4 = CreateNode(4);
    const pNode5 = CreateNode(5);

    BuildNodes(pNode1, pNode2, pNode3);
    BuildNodes(pNode2, pNode3, pNode5);
    BuildNodes(pNode3, pNode4, null);
    BuildNodes(pNode4, pNode5, pNode2);

    Test("Test1", pNode1);
}

// m_pSibling指向结点自身
//          -----------------
//         \|/              |
//  1-------2-------3-------4-------5
//         |       | /|\           /|\
//         |       | --             |
//         |------------------------|
function Test2()
{
    const pNode1 = CreateNode(1);
    const pNode2 = CreateNode(2);
    const pNode3 = CreateNode(3);
    const pNode4 = CreateNode(4);
    const pNode5 = CreateNode(5);

    BuildNodes(pNode1, pNode2, null);
    BuildNodes(pNode2, pNode3, pNode5);
    BuildNodes(pNode3, pNode4, pNode3);
    BuildNodes(pNode4, pNode5, pNode2);

    Test("Test2", pNode1);
}

// m_pSibling形成环
//          -----------------
//         \|/              |
//  1-------2-------3-------4-------5
//          |              /|\
//          |               |
//          |---------------|
function Test3()
{
    const pNode1 = CreateNode(1);
    const pNode2 = CreateNode(2);
    const pNode3 = CreateNode(3);
    const pNode4 = CreateNode(4);
    const pNode5 = CreateNode(5);

    BuildNodes(pNode1, pNode2, null);
    BuildNodes(pNode2, pNode3, pNode4);
    BuildNodes(pNode3, pNode4, null);
    BuildNodes(pNode4, pNode5, pNode2);

    Test("Test3", pNode1);
}

// 只有一个结点
function Test4()
{
    const pNode1 = CreateNode(1);
    BuildNodes(pNode1, null, pNode1);

    Test("Test4", pNode1);
}

// 鲁棒性测试
function Test5()
{
    Test("Test5", null);
}

;(function main()
{
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();

    return 0;
})()

