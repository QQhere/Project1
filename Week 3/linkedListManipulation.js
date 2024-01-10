/*
Linked List Manipulation
Description
Viết chương trình thực hiện công việc sau:
Xây dựng danh sách liên kết với các khóa được cung cấp ban đầu là dãy a
1
, a
2
, …, a
n
, sau đó thực hiện các thao tác trên danh sách bao gồm: thêm 1 phần tử vào đầu, vào cuối danh sách, hoặc vào trước, vào sau 1 phần tử nào đó trong danh sách, hoặc loại bỏ 1 phần tử nào đó trong danh sách

Input
Dòng 1: ghi số nguyên dương n (1 <= n <= 1000)
Dòng 2: ghi các số nguyên dương a
1
, a
2
, …, a
n
.
Các dòng tiếp theo lần lượt là các lệnh để thao tác (kết thúc bởi ký hiệu #) với các loại sau:
addlast  k: thêm phần tử có key bằng k vào cuối danh sách (nếu k chưa tồn tại)
addfirst  k: thêm phần tử có key bằng k vào đầu danh sách (nếu k chưa tồn tại)
addafter  u  v: thêm phần tử có key bằng u vào sau phần tử có key bằng v trên danh sách (nếu v đã tồn tại trên danh sách và u chưa tồn tại)
addbefore  u  v: thêm phần tử có key bằng  u vào trước phần tử có key bằng v trên danh sách (nếu v đã tồn tại trên danh sách và u của tồn tại)
remove  k: loại bỏ phần tử có key bằng k khỏi danh sách
reverse: đảo ngược thứ tự các phần tử của danh sách (không được cấp phát mới các phần tử, chỉ được thay đổi mối nối liên kết)
Output
Ghi ra dãy khóa của danh sách thu được sau 1 chuỗi các lệnh thao tác đã cho

Example
Input
5
5 4 3 2 1
addlast 3
addlast 10
addfirst 1
addafter 10 4
remove 1
#

Output
5 4 3 2 10 
*/
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

function findNode(head, value) {
  if (head.value == value) {
      return head;
  } else if (head.next == null) {
      return null;
  } else {
      return findNode(head.next, value);
  }
}

function findNodeBefore(head, value) {
  if (head.value == value) {
      return null;
  } else if (head.next.value == value) {
      return head;
  } else if (head.next == null) {
      return null;
  } else {
      return findNodeBefore(head.next, value);
  }
}

function check(head, value) {
  if (head.value == value) {
      return true;
  } else if (head.next == null) {
      return false;
  } else {
      return check(head.next, value);
  }
}

function addLast(head, value) {
  if (check(head, value)) {
      return head;
  } else {
      if (head.next != null) {
          addLast(head.next, value);
      } else {
          head.next = new Node(value);
      }
  }
}

function addFirst(head, value) {
  if (check(head, value)) {
      return head;
  } else {
      let node = new Node(value);
      node.next = head.next;
      head.next = node;
      return head;
  }
}

function addAfter(head, value, x) {
  if (head.value == null && head.next == null) {
      addLast(head, value);
  } else {
      let node = findNode(head, x);
      let newNode = new Node(value);
      newNode.next = node.next;
      node.next = newNode;
  }
}

function addBefore(head, value, x) {
  if (head.value == null && head.next == null) {
      addLast(head, value);
  } else {
      let newNode = new Node(value);
      let node = findNodeBefore(head, x);
      newNode.next = node.next;
      node.next = newNode;
  }
}

function remove(head, value) {
  if (check(head, value)) {
      let node = findNodeBefore(head, value);
      node.next = node.next.next;
  }
}

function reverse(head) {
  let newHead = new Node(null);
  while (head.next != null) {
      newHead = addFirst(newHead, head.next.value);
      head = head.next;
  }
  return newHead;
}

function printList(head) {
    if (head.next != null) {
        return head.value + ' ' + printList(head.next);
    } else {
        return head.value;
    }
}

function linkedListManipulation(input) {
  let inputArray = input.split('\n');
  const n = parseInt(inputArray[0]);
  const arr = inputArray[1].split(' ').map(Number);
  let head = new Node(null);
  for (let value of arr) {
    addLast(head, value);
  }
  for (let i = 2; inputArray[i] !== '#'; i++) {
    let sub = inputArray[i].split(' ');
    if (sub[0] === 'addlast') {
      addLast(head, parseInt(sub[1]));
    } else if (sub[0] === 'addfirst') {
      head = addFirst(head, parseInt(sub[1]));
    } else if (sub[0] === 'addafter') {
      if (check(head, parseInt(sub[1])) == false && check(head, parseInt(sub[2])) == true) {
        addAfter(head, parseInt(sub[1]), parseInt(sub[2]));
      } 
    } else if (sub[0] === 'addbefore') {
      if (check(head, parseInt(sub[1])) == false && check(head, parseInt(sub[2])) == true) {
        addBefore(head, parseInt(sub[1]), parseInt(sub[2]));
      }
    } else if (sub[0] === 'remove') {
      remove(head, parseInt(sub[1]));
    } else if (sub[0] == 'reverse') {
      head = reverse(head);
    }
  }
  return printList(head.next);
}