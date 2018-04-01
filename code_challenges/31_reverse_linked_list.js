function reverseList(node) {
  let nodeList = []
  while(node) {
    nodeList.push(node)
    node = node.next
  }
  nodeList.reverse()

  for(let i = 0; i < nodeList.length; i++) {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const NodeA = new Node('A');
const NodeB = new Node('B');
const NodeC = new Node('C');
const NodeD = new Node('D');

NodeA.next = NodeB;
NodeB.next = NodeC;
NodeC.next = NodeD;

reverseList(NodeA)

console.log('node D next:', NodeD.next)
console.log('node C next:', NodeC.next)
console.log('node B next:', NodeB.next)
console.log('node A next:', NodeA.next)
