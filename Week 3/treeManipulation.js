/*
Tree manipulation & Traversal
Description
Mỗi nút trên cây có trường id (identifier) là một số nguyên (id của các nút trên cây đôi một khác nhau)
Thực hiện 1 chuỗi các hành động sau đây bao gồm các thao tác liên quan đến xây dựng cây và duyệt cây
· MakeRoot u: Tạo ra nút gốc u của cây
· Insert u v: tạo mới 1 nút u và chèn vào cuối danh sách nút con của nút v (nếu nút có id bằng v không tồn tại hoặc nút có id bằng u đã tồn tại thì không chèn thêm mới)
· PreOrder: in ra thứ tự các nút trong phép duyệt cây theo thứ tự trước
· InOrder: in ra thứ tự các nút trong phép duyệt cây theo thứ tự giữa
· PostOrder: in ra thứ tự các nút trong phép duyệt cây theo thứ tự sau
Dữ liệu: bao gồm các dòng, mỗi dòng là 1 trong số các hành động được mô tả ở trên, dòng cuối dùng là * (đánh dấu sự kết thúc của dữ liệu).
Kết quả: ghi ra trên mỗi dòng, thứ tự các nút được thăm trong phép duyệt theo thứ tự trước, giữa, sau của các hành động PreOrder, InOrder, PostOrder tương ứng đọc được từ dữ liệu đầu vào
Ví dụ
Dữ liệu
MakeRoot 10
Insert 11 10
Insert 1 10
Insert 3 10
InOrder
Insert 5 11
Insert 4 11
Insert 8 3
PreOrder
Insert 2 3
Insert 7 3
Insert 6 4
Insert 9 4
InOrder
PostOrder
*
Kết quả
11 10 1 3
10 11 5 4 1 3 8
5 11 6 4 9 10 1 8 3 2 7
5 6 9 4 11 1 8 2 7 3 10
*/
function treeManipulation(input) {
  const tree = {};
  let root = null;
  let answer = [];

  const makeRoot = (u) => {
    root = u;
    tree[root] = { children: [] };
  };

  const insert = (u, v) => {
    if (!tree[u]) {
      tree[u] = { children: [] };
    }
    if (!tree[v]) {
      tree[v] = { children: [] };
    }
    if (!tree[u].parent) {
      tree[u].parent = v;
      tree[v].children.push(u);
    }
  };

  const preOrder = (u) => {
    let result = u + ' ';
    if (tree[u].children.length > 0) {
      for (let i = 0; i < tree[u].children.length; i++) {
        result += preOrder(tree[u].children[i]);
      }
    }
    return result;
  };

  const inOrder = (u) => {
    let result = '';
    if (tree[u].children.length > 0) {
      result += inOrder(tree[u].children[0]);
      result += u + ' ';
      for (let i = 1; i < tree[u].children.length; i++) {
        result += inOrder(tree[u].children[i]);
      }
    } else {
      result += u + ' ';
    }
    return result;
  };

  const postOrder = (u) => {
    let result = '';
    if (tree[u].children.length > 0) {
      for (let i = 0; i < tree[u].children.length; i++) {
        result += postOrder(tree[u].children[i]);
      }
      result += u + ' ';
    } else {
      result += u + ' ';
    }
    return result;
  };

  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(' ');
    const command = line[0];
    const u = parseInt(line[1]);
    const v = parseInt(line[2]);
    if (command === 'MakeRoot') {
      makeRoot(u);
    } else if (command === 'Insert') {
      insert(u, v);
    } else if (command === 'PreOrder') {
      answer.push(preOrder(root));
    } else if (command === 'InOrder') {
      answer.push(inOrder(root));
    } else if (command === 'PostOrder') {
      answer.push(postOrder(root));
    }
  }
  return answer.join('\n');
}