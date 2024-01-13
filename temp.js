//Tuần 1 bài 1
function sumArray(input) {
    let inputArray = input.split("\n");
    let n = parseInt(inputArray[0]);
    let arr = inputArray[1].split(" ").map(Number);
    return arr.reduce((a, b) => a + b, 0);
  }

//Tuần 1 bài 2
function listSequencOfInteger(input) {
    let n = parseInt(input);
    const arr = [];
    let i = 100;
    while (i < 1000) {
        if ( i%n === 0 ) {
            arr.push(i);
        }
        i++;
    }
    return arr.join(" ");
}

//Tuần 1 bài 3
function electricityPrices(input) {
    let kwh = parseInt(input);
    if (kwh < 0) return null;
    let current_cost = 0;
    const current_price = [1728, 1786, 2074, 2612, 2919, 3015];
    const current_level = [50, 50, 100, 100, 100]
    const current_amount = []
    for (let i = 0; i < current_level.length; i++) {
        current_amount[i] = current_level[i] * current_price[i];
    }
    if (kwh > 400) {
        current_cost = current_amount[4] + current_amount[3] + current_amount[2] + current_amount[1] + current_amount[0] + current_price[5]*(kwh - 400);
    } else if (kwh > 300) {
        current_cost = current_amount[3] + current_amount[2] + current_amount[1] + current_amount[0] + current_price[4]*(kwh - 300);
    } else if (kwh > 200) {
        current_cost = current_amount[2] + current_amount[1] + current_amount[0] + current_price[3]*(kwh - 200);
    } else if (kwh > 100) {
        current_cost = current_amount[1] + current_amount[0] + current_price[2]*(kwh - 100);
    } else if (kwh > 50) {
        current_cost = current_amount[0] + current_price[1]*(kwh - 50);
    } else {
        current_cost = current_price[0]*kwh;
    }
    
    let suggested_cost = 0;
    const suggested_price = [1728, 2074, 2612, 3111, 3457];
    const suggested_level = [100, 100, 200, 300]
    const suggested_amount = []
    for (let i = 0; i < suggested_level.length; i++) {
        suggested_amount[i] = suggested_level[i] * suggested_price[i];
    }
    if (kwh > 700) {
        suggested_cost = suggested_amount[3] + suggested_amount[2] + suggested_amount[1] + suggested_amount[0] + suggested_price[4]*(kwh - 700);
    } else if (kwh > 400) {
        suggested_cost = suggested_amount[2] + suggested_amount[1] + suggested_amount[0] + suggested_price[3]*(kwh - 400);
    } else if (kwh > 200) {
        suggested_cost = suggested_amount[1] + suggested_amount[0] + suggested_price[2]*(kwh - 200);
    } else if (kwh > 100) {
        suggested_cost = suggested_amount[0] + suggested_price[1]*(kwh - 100);
    } else {
        suggested_cost = suggested_price[0]*kwh;
    }

    let diff = 1.1 * (suggested_cost - current_cost);
    return diff.toFixed(2);
}

//Tuần 1 bài 4
function upperCase(input) {
    return input.toUpperCase();
}

//Tuần 1 bài 5
function extractYearMonthDay(line) {
    let status = 1;
    let check = '-';
    let subStrings = [];
    let subString = '';
    let count = 0;
    for (let c of line) {
        if (c === check) {
            subStrings.push(subString);
            subString = '';
            count++;
        } else {
            subString += c;
        }
    }
    subStrings.push(subString);
    if (count !== 2) {
        return "INCORRECT";
    } else {
        for (let str of subStrings) {
            if (str.length < 2) {
                status = 0;
                break;
            }
            for (let c of str) {
                if (isNaN(c)) {
                    status = 0;
                    break;
                }
            }
        }
        let year = parseInt(subStrings[0]);
        let month = parseInt(subStrings[1]);
        let day = parseInt(subStrings[2]);
        if (month < 1 || month > 12 || day < 1 || day > new Date(year, month, 0).getDate()) {
            status = 0;
        }
        if (status === 0) {
            return "INCORRECT";
        } else {
            return year + " " + month + " " + day;
        }
    }
}

//Tuần 1 bài 6
function listNumbersAndSquares(input) {
    let n = parseInt(input);
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i-1] = `${i} ${i*i}`;
    }
    return arr.join('\n');
}

//Tuần 1 bài 7
function countOddAndEven(input) {
    let inputArray = input.split("\n");
    let n = parseInt(inputArray[0]);
    let a = inputArray[1].split(" ").map(Number);
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < n; i++) {
      if (a[i] % 2 == 0) {
          evenCount++;
      } else {
          oddCount++;
      }
    }
    return oddCount + " " + evenCount;
    }

//Tuần 1 bài 8
function addSubtractMultiplicationDivision(input) {
    let array = input.split(' ');
    let a = parseInt(array[0]);
    let b = parseInt(array[1])
    const arr = [a+b, a-b, a*b, parseInt(a/b)];
    return arr.join(' ');
}

//Tuần 1 bài 9
function convertToSeconds(timeString) {
    let status = 1;
    let check = ':';
    let subStrings = [];
    let subString = '';
    let count = 0;
    for (let c of timeString) {
        if (c === check) {
            subStrings.push(subString);
            subString = '';
            count++;
        } else {
            subString += c;
        }
    }
    subStrings.push(subString);
    if (count !== 2) {
        return "INCORRECT";
    } else {
        for (let str of subStrings) {
            if (str.length !== 2) {
                status = 0;
                break;
            }
            for (let c of subString) {
                if (isNaN(c)) {
                    status = 0;
                    break;
                }
            }
        }
        let hour = parseInt(subStrings[0]);
        let minutes = parseInt(subStrings[1]);
        let second = parseInt(subStrings[2]);
        if (hour < 0 || hour > 23 || minutes < 0 || minutes > 59 || second < 0 || second > 59) {
            status = 0;
        }
        if (status === 0) {
            return "INCORRECT";
        } else {
            return hour*3600 + minutes*60 + second;
        }
    }
}

//Tuần 1 bài 10
function solveQuadraticEquation(input) {
    let arrayInput = input.split(' ');
    let a = parseFloat(arrayInput[0]);
    let b = parseFloat(arrayInput[1]);
    let c = parseFloat(arrayInput[2]);
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "NO SOLUTION";
    } else if (delta === 0) {
        let x0 = (-b / (2 * a)).toFixed(2);
        return x0;
    } else {
        let x1 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
        let x2 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
        return x1 + " " + x2;
    }
}

//Tuần 1 bài 11
function queriesOnArray(input) {
    let inputArray = input.split("\n");
    let n = parseInt(inputArray[0]);
    let arr = inputArray[1].split(" ").map(Number);
    let queries = inputArray.slice(3, inputArray.length - 1);
    let answer = [];
    for (let query of queries) {
        let parts = query.split(' ');
        switch (parts[0]) {
            case 'find-max':
                answer.push(Math.max(...arr));
                break;
            case 'find-min':
                answer.push(Math.min(...arr));
                break;
            case 'sum':
                answer.push(arr.reduce((a, b) => a + b, 0));
                break;
            case 'find-max-segment':
                let i = parseInt(parts[1]) - 1;
                let j = parseInt(parts[2]);
                answer.push(Math.max(...arr.slice(i, j)));
                break;
        }
    }
    return answer.join('\n');
}

//Tuần 1 bài 12
function kSubsequenceEven(input) {
    let inputArray = input.split("\n");
    let nk = inputArray[0].split(' ');
    let n = parseInt(nk[0]);
    let k = parseInt(nk[1]);
    let arr = inputArray[1].split(" ").map(Number);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (sum % 2 == 0) {
        count++;
    }
    
    for (let i = 0; i < n - k; i++) {
        sum = sum - arr[i] + arr[i + k];
    
        if (sum % 2 == 0) {
            count++;
        }
    }
    return count;
}

//Tuần 1 bài 13
function countWords(text) {
    let words = text.replace(/\s+/g, ' ').trim().split(' ');
    return words.length;
}

//Tuần 1 bài 14
function textReplacement(input) {
    let arrayInput = input.split('\n');
    let p1 = arrayInput[0];
    let p2 = arrayInput[1];
    let t = arrayInput[2];
    return t.replace(new RegExp(p1, 'g'), p2);
}

//Tuần 2 bài 1
function fibonacci(input) {
    n = parseInt(input);
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

//Tuần 2 bài 2
function computeC_k_n(input) {
    let [k, n] = input.trim().split(" ").map(Number);
    let MOD = 1e9 + 7;
    let C = Array.from(Array(n+1), () => new Array(k+1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, k); j++) {
            if (j == 0 || j == i) {
                C[i][j] = 1;
            } else {
                C[i][j] = (C[i-1][j-1] + C[i-1][j]) % MOD;
            }
        }
    }

    return C[n][k];
}

//Tuần 2 bài 3
function binarySequences(input) {
    let n = parseInt(input);
    let result = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        let binary = i.toString(2);
        while (binary.length < n) {
            binary = "0" + binary;
        }
        result.push(binary);
    }
    return result.join("\n");
}

//Tuần 2 bài 4
function binarySequencesWithout11(input) {
    let n = parseInt(input);
    let result = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        let binary = i.toString(2);
        while (binary.length < n) {
            binary = "0" + binary;
        }
        if (!binary.includes("11")) {
            result.push(binary);
        }
    }
    return result.join("\n");
}

//Tuần 2 bài 5
function generatePermutations(input) {
    let n = parseInt(input);
    let result = [];
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    permute(nums, 0, n - 1, result);
    let answ = [];
    for (let i = 0; i < result.length; i++) {
    answ.push(result[i].join(' '));
    }
    return answ.join("\n");
}
    
function permute(nums, l, r, result) {
    if (l == r) {
    result.push(nums.slice());
    } else {
        for (let i = l; i <= r; i++) {
            swap(nums, l, i);
            permute(nums, l + 1, r, result);
            swap(nums, l, i);
        }
    }
}
    
function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

//Tuần 2 bài 6
function countSolutions(input) {
    let inputArray = input.split('\n');
    let partialBoard = [];
    for (let i = 0; i < inputArray.length; i++) {
        partialBoard.push(inputArray[i].split(' ').map(Number));
    }
    let solutions = 0;
  
    function solve(board, row, col) {
        if (row === 9) {
            solutions++;
            return;
        }
  
        if (col === 9) {
            solve(board, row + 1, 0);
            return;
        }
    
        if (board[row][col] !== 0) {
            solve(board, row, col + 1);
            return;
        }
    
        for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
            board[row][col] = num;
            solve(board, row, col + 1);
            board[row][col] = 0;
            }
        }
    }
  
    function isValid(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) {
                return false;
            }
            if (board[i][col] === num) {
                return false;
            }
            const subRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
            const subCol = Math.floor(col / 3) * 3 + (i % 3);
            if (board[subRow][subCol] === num) {
                return false;
            }
        }
        return true;
    }
  
    solve(partialBoard, 0, 0);
    return solutions;
}

//Tuần 3 bài 1
function simulateStack(input) {
    const stack = [];
    const output = [];
  
    input.split('\n').forEach((line) => {
        const [command, value] = line.split(' ');
    
        if (command === 'PUSH') {
            stack.push(parseInt(value));
        } else if (command === 'POP') {
            output.push(stack.pop() || 'NULL');
        }
    });
  
    return output.join('\n');
}

//Tuần 3 bài 2
function simulationQueue(input) {
    let queue = [];
    let output = [];
    let lines = input.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.startsWith("PUSH")) {
            let value = parseInt(line.split(" ")[1]);
            queue.push(value);
        } else if (line === "POP") {
            let value = queue.shift();
            if (value === undefined) {
                output.push("NULL");
            } else {
                output.push(value);
            }
        } else {
            break;
        }
    }
    return output.join("\n");
}

//Tuần 3 bài 3
function checkParenthesis(input) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
  
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (pairs[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (pairs[stack.pop()] !== char) {
            return 0;
            }
        }
    }
    return stack.length === 0 ? 1 : 0;
}

//Tuần 3 bài 4
function waterJugs(input) {
    let inputArray = input.split(' ').map(Number);
    let a = inputArray[0];
    let b = inputArray[1];
    let c = inputArray[2];
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
  
    if (c > b)
        return -1;
    
    if ((c % gcd(b, a)) !== 0)
        return -1;
    
    return Math.min(pour(b, a, c), pour(a, b, c));
}
    
function gcd(a, b) {
    if (b === 0)
        return a;
    return gcd(b, a % b);
}
  
function pour(fromJug, toJug, target) {
    let from = fromJug;
    let to = 0;
    let step = 1;
    
    while (from !== target && to !== target) {
        let temp = Math.min(from, toJug - to);
    
        to += temp;
        from -= temp;
        step++;
    
        if (from === target || to === target)
            break;
    
        if (from === 0) {
            from = fromJug;
            step++;
        }
    
        if (to === toJug) {
            to = 0;
            step++;
        }
    }
    return step;
}

//Tuần 3 bài 5
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

//Tuần 3 bài 6
function FamilyTree() {
    this.tree = {};
    this.descendants = function(name) {
        if (!this.tree[name]) {
            return 0;
        }
        let count = 0;
        for (let i = 0; i < this.tree[name].length; i++) {
            count += 1 + this.descendants(this.tree[name][i]);
        }
        return count;
    };
    this.generation = function(name) {
        if (!this.tree[name]) {
            return 0;
        }
        let maxGeneration = 0;
        for (let i = 0; i < this.tree[name].length; i++) {
            maxGeneration = Math.max(maxGeneration, this.generation(this.tree[name][i]));
        }
        return maxGeneration + 1;
    };
    this.addRelation = function(child, parent) {
        if (!this.tree[parent]) {
            this.tree[parent] = [];
        }
        this.tree[parent].push(child);
    };
}

function family(input) {
    let familyTree = new FamilyTree();
    let answer = [];
    let lines = input.split("\n");
    let i = 0;
    while (lines[i] !== "***") {
        let [child, parent] = lines[i].split(" ");
        familyTree.addRelation(child, parent);
        i++;
    }
    i++;
    while (i < lines.length && lines[i] !== "***") {
        let [cmd, name] = lines[i].split(" ");
        if (cmd === "descendants") {
            answer.push(familyTree.descendants(name));
        } else if (cmd === "generation") {
            answer.push(familyTree.generation(name));
        }
        i++;
    }
    return answer.join("\n");
}

//Tuần 3 bài 7
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
  
class BST {
    constructor() {
        this.root = null;
    }
  
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) {
            return;
            }
            if (value < current.value) {
            if (!current.left) {
                current.left = newNode;
                return;
            }
            current = current.left;
            } else {
            if (!current.right) {
                current.right = newNode;
                return;
            }
            current = current.right;
            }
        }
    }
  
    preOrderTraversal(node = this.root) {
        if (!node) {
            return '';
        }
        return `${node.value} ${this.preOrderTraversal(node.left)}${this.preOrderTraversal(node.right)}`;
    }
}
  
function preOrder(input) {
    const bst = new BST();
    const commands = input.split('\n');
    for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    if (command === '#') {
        break;
    }
    const value = parseInt(command.split(' ')[1]);
    bst.insert(value);
    }
    return(bst.preOrderTraversal().trim());
}

//Tuần 3 bài 8
class Node1 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function linkedListManipulation(input) {
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
                head.next = new Node1(value);
            }
        }
      }
      
    function addFirst(head, value) {
        if (check(head, value)) {
            return head;
        } else {
            let node = new Node1(value);
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

//Tuần 4 bài 1
function storeSearchString(input) {
    let inputArray = input.split('\n');
    let keys = [];
    let actions = [];
    let i = 0
    for (i; inputArray[i] !== '*'; i++) {
        keys.push(inputArray[i])
    }
    for (i; inputArray[i] !== '***'; i++) {
        actions.push(inputArray[i])
    }
    let db = new Set(keys);
    let results = [];
    for (let i = 0; i < actions.length; i++) {
        let [cmd, key] = actions[i].split(" ");
        if (cmd === "find") {
            results.push(db.has(key) ? 1 : 0);
        } else if (cmd === "insert") {
            let size = db.size;
            db.add(key);
            results.push(db.size > size ? 1 : 0);
        }
    }
    return results.join('\n');
}

//Tuần 4 bài 2
function hashOverStrings(input) {
    function hash(s, m) {
        let k = s.length;
        let h = 0;
        for (let i = 0; i < k; i++) {
            h += s.charCodeAt(i) * Math.pow(256, k - i - 1);
        }
        return h % m;
    }
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let arr = [];
    for (let i = 1; i < inputArray.length; i++) {
        arr.push(hash(inputArray[i], m));
    }
    return arr.join('\n');
}

//Tuần 4 bài 3
function checkAppears(input) {
    let inputArray = input.split('\n');
    let n = parseInt(inputArray[0]);
    let arr = inputArray[1].split(' ').map(Number);
    let occurrence = new Array(n).fill(0);
    let set = new Set();
    for (let i = 0; i < n; i++) {
        if (set.has(arr[i])) {
            occurrence[i] = 1;
        }
        set.add(arr[i]);
    }
    return occurrence.join('\n');
}

//Tuần 4 bài 4
function countPairs(input) {
    let inputArray = input.trim().split('\n');
    let [n, M] = inputArray[0].split(' ').map(Number);
    let arr = inputArray[1].split(' ').map(Number);
    let count = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(M - arr[i])) {
            count += map.get(M - arr[i]);
        }
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return count;
}

//Tuần 5 bài 1
function kruskal(input) {
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let edges = [];
    for (let i = 1; i <= m; i++) {
        let sub = inputArray[i].split(' ').map(Number);
        edges.push(sub);
    }
    let parent = [];
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }
    edges.sort((a, b) => a[2] - b[2]);
    let result = 0;
    for (let i = 0; i < m; i++) {
        let [u, v, w] = edges[i];
        let parentU = find(u);
        let parentV = find(v);
        if (parentU !== parentV) {
            parent[parentU] = parentV;
            result += w;
        }
    }
    return result;
    function find(node) {
        if (parent[node] === node) {
            return node;
        }
        parent[node] = find(parent[node]);
        return parent[node];
    }
}

//Tuần 5 bài 2
function DFS(input) {
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let edges = [];
    for (let i = 1; i <= m; i++) {
        let sub = inputArray[i].split(' ').map(Number);
        edges.push(sub);
    }
    let graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    for (let i = 0; i < m; i++) {
        let [u, v] = edges[i];
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    for (let [key, value] of graph) {
        value.sort((a, b) => a - b);
    }
    let visited = new Set();
    let result = [];
    function dfs(node) {
        visited.add(node);
        result.push(node);
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    dfs(1);
    return result.join(" ");
}

//Tuần 5 bài 3
function BFS(input) {
    var graph = inputToGraph(input);
    var visited = [];
    var queue = [1];

    while(queue.length > 0) {
        var node = queue.shift(); 
        if(!visited.includes(node)) {
            visited.push(node);
            var neighbours = graph[node]; 
            neighbours.sort((a, b) => a - b);
            queue.push(...neighbours);
        }

        if(queue.length === 0) {
            for(var i = 1; i <= Object.keys(graph).length; i++) {
                if(!visited.includes(i)) {
                    queue.push(i);
                    break;
                }
            }
        }
    }
    return visited.join(" ");
}

function inputToGraph(input) {
    var lines = input.split('\n');
    var graph = {};
    for(var i = 1; i < lines.length; i++) {
        var [u, v] = lines[i].split(' ').map(Number);
        if(!graph[u]) {
            graph[u] = [];
        }
        if(!graph[v]) {
            graph[v] = [];
        }
        graph[u].push(v);
        graph[v].push(u);
    }
    return graph;
}

//Tuần 5 bài 4
function isHamiltonian(n, m, edges) {
    let graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    for (let i = 0; i < m; i++) {
        let [u, v] = edges[i];
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    let visited = new Set();
    let path = [];
    function dfs(node) {
        visited.add(node);
        path.push(node);
        if (path.length === n) {
            if (graph.get(node).includes(path[0])) {
                return true;
            }
            path.pop();
            visited.delete(node);
            return false;
        }
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }
        path.pop();
        visited.delete(node);
        return false;
    }
    for (let i = 1; i <= n; i++) {
        if (dfs(i)) {
            return 1;
        }
    }
    return 0;
}

function hamiltonian(input) {
    let answer = [];
    let inputArray = input.split('\n');
    let t = Number(inputArray[0]);
    let index = 1;
    for (let i = 0; i < t; i++) {
        let [n, m] = inputArray[index++].split(' ').map(Number);
        let edges = [];
        for (let j = 0; j < m; j++) {
            let [u, v] = inputArray[index++].split(' ').map(Number);
            edges.push([u, v]);
        }
        answer.push(isHamiltonian(n, m, edges));
    }
    return answer.join('\n');
}

//Tuần 6 bài 1
function maxFlow(input) {
    function bfs(residual, source, sink) {
        let n = residual.length;
        let pred = Array(n).fill(-1);
        let queue = [source];
        pred[source] = source;
        while (queue.length > 0) {
            let u = queue.shift();
            for (let v = 0; v < n; v++) {
                if (pred[v] == -1 && residual[u][v] > 0) {
                    pred[v] = u;
                    if (v == sink) return getPath(pred, source, sink);
                    queue.push(v);
                }
            }
        }
        return null;
    }
    let lines = input.trim().split('\n');
    let [N, M] = lines[0].split(' ').map(Number);
    let [s, t] = lines[1].split(' ').map(Number);
    let capacity = Array.from({length: N}, () => Array(N).fill(0));
    for (let i = 2; i < M + 2; i++) {
        let [u, v, c] = lines[i].split(' ').map(Number);
        capacity[u - 1][v - 1] = c;
    }
    let residual = capacity.map(row => row.slice());
    let n = residual.length;
    let maxFlow = 0;
    let path = bfs(residual, s - 1, t - 1);
    while (path != null) {
        let flow = Infinity;
        for (let i = 0; i < path.length - 1; i++) {
            let u = path[i], v = path[i + 1];
            flow = Math.min(flow, residual[u][v]);
        }
        maxFlow += flow;
        for (let i = 0; i < path.length - 1; i++) {
            let u = path[i], v = path[i + 1];
            residual[u][v] -= flow;
            residual[v][u] += flow;
        }
        path = bfs(residual, s - 1, t - 1);
    }
    return maxFlow;
}
  
function getPath(pred, source, sink) {
    let path = [sink];
    while (path[path.length - 1] != source) {
        path.push(pred[path[path.length - 1]]);
    }
    return path.reverse();
}

//Tuần 6 bài 2
function shortestPathBetween2Nodes(input) {
    function shortestPath(n, m, edges, s, t) {
        const graph = Array.from({ length: n }, () => []);
        for (let i = 0; i < m; i++) {
            const [u, v, w] = edges[i];
            graph[u - 1].push([v - 1, w]);
        }
        const dist = Array.from({ length: n }, () => Infinity);
        dist[s - 1] = 0;
        const pq = [[0, s - 1]];
        while (pq.length) {
            const [d, u] = pq.shift();
            if (d > dist[u]) continue;
            for (const [v, w] of graph[u]) {
                if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push([dist[v], v]);
                }
            }
        }
        return dist[t - 1] === Infinity ? -1 : dist[t - 1];
    }
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const edges = lines.slice(1, m + 1).map(line => line.split(' ').map(Number));
    const [s, t] = lines[m + 1].split(' ').map(Number);
    return shortestPath(n, m, edges, s, t);
}

//Tuần 6 bài 3
function allPairShortestPaths(input) {
    function shortestPaths(n, m, edges) {
        let answer = [];
        let dist = [];
        for (let i = 1; i <= n; i++) {
            dist[i] = [];
            for (let j = 1; j <= n; j++) {
                if (i === j) {
                    dist[i][j] = 0;
                } else {
                    dist[i][j] = Infinity;
                }
            }
        }
        for (let i = 0; i < m; i++) {
            let [u, v, w] = edges[i];
            dist[u][v] = w;
        }
        for (let k = 1; k <= n; k++) {
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= n; j++) {
                    if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
        for (let i = 1; i <= n; i++) {
            sub = dist[i].map(d => d === Infinity ? -1 : d).join(" ");
            answer.push(sub);
        }
        return answer.join('\n')
    }
    let inputArray = input.split('\n');
    let [n, m] = inputArray[0].split(' ').map(Number);
    let edges = [];
    for (let i = 1; i <= m; i++) {
        let [u, v, w] = inputArray[i].split(' ').map(Number);
        edges.push([u, v, w]);
    }
    return shortestPaths(n, m, edges)
}

//Tuần 7 bài 1
function processBankTransactions(input) {
    function numberTransactions(transactions) {
        return transactions.length;
    }
    
    function totalMoneyTransaction(transactions) {
        let total = 0;
        for (const transaction of transactions) {
            total += parseInt(transaction[2]);
        }
        return total;
    }
    
    function listSortedAccounts(transactions) {
        const accounts = new Set();
        for (const transaction of transactions) {
            accounts.add(transaction[0]);
            accounts.add(transaction[1]);
        }
        return [...accounts].sort().join(' ');
    }
    
    function totalMoneyTransactionFrom(transactions, account) {
        let total = 0;
        for (const transaction of transactions) {
            if (transaction[0] === account) {
                total += parseInt(transaction[2]);
            }
        }
        return total;
    }
    
    function inspectCycle(transactions, account, k) {
        const visited = new Set();
        return dfs(account, account, k, visited, transactions);
    }
    
    function dfs(start, current, k, visited, transactions) {
        if (k === 0) {
            return start === current;
        }
        visited.add(current);
        for (const transaction of transactions) {
            if (transaction[0] === current && !visited.has(transaction[1])) {
                if (dfs(start, transaction[1], k - 1, visited, transactions)) {
                    return true;
                }
            }
        }
        visited.delete(current);
        return false;
    }
    const data = input.split('\n');
    const transactions = [];
    let i = 0;
    while (data[i] !== '#') {
        transactions.push(data[i].split(' '));
        i++;
    }
    i++;
    const queries = [];
    while (data[i] !== '#') {
        queries.push(data[i]);
        i++;
    }
    let result = '';
    for (const query of queries) {
        if (query === '?number_transactions') {
            result += numberTransactions(transactions) + '\n';
        } else if (query === '?total_money_transaction') {
            result += totalMoneyTransaction(transactions) + '\n';
        } else if (query === '?list_sorted_accounts') {
            result += listSortedAccounts(transactions) + '\n';
        } else if (query.startsWith('?total_money_transaction_from')) {
            const account = query.split(' ')[1];
            result += totalMoneyTransactionFrom(transactions, account) + '\n';
        } else if (query.startsWith('?inspect_cycle')) {
            const [account, k] = query.split(' ').slice(1);
            result += inspectCycle(transactions, account, parseInt(k)) ? '1\n' : '0\n';
        }
    }
    return result;
}

//Tuần 7 bài 2
function analyzeSalesOrder(input) {
    const data = input.split('\n');
    const orders = [];
    let i = 0;
    while (data[i] !== '#') {
        orders.push(data[i].split(' '));
        i++;
    }
    i++;
    const queries = [];
    while (data[i] !== '#') {
        queries.push(data[i]);
        i++;
    }
    let result = '';
    for (const query of queries) {
        if (query === '?total_number_orders') {
            result += orders.length + '\n';
        } else if (query === '?total_revenue') {
            let total = 0;
            for (const order of orders) {
                total += parseInt(order[2]);
            }
            result += total + '\n';
        } else if (query.startsWith('?revenue_of_shop')) {
            const shopID = query.split(' ')[1];
            let total = 0;
            for (const order of orders) {
                if (order[3] === shopID) {
                    total += parseInt(order[2]);
                }
            }
            result += total + '\n';
        } else if (query.startsWith('?total_consume_of_customer_shop')) {
            const [customerID, shopID] = query.split(' ').slice(1);
            let total = 0;
            for (const order of orders) {
                if (order[0] === customerID && order[3] === shopID) {
                    total += parseInt(order[2]);
                }
            }
            result += total + '\n';
        } else if (query.startsWith('?total_revenue_in_period')) {
            const [fromTime, toTime] = query.split(' ').slice(1);
            let total = 0;
            for (const order of orders) {
                if (order[4] >= fromTime && order[4] <= toTime) {
                    total += parseInt(order[2]);
                }
            }
            result += total + '\n';
        }
    }
    return result;
}

//Tuần 8 bài 1
function programmingContest(input) {
    const data = input.split('\n');
    const submissions = [];
    let i = 0;
    while (data[i] !== '#') {
        submissions.push(data[i].split(' '));
        i++;
    }
    i++;
    const queries = [];
    while (data[i] !== '#') {
        queries.push(data[i]);
        i++;
    }
    let result = '';
    for (const query of queries) {
        if (query === '?total_number_submissions') {
            result += submissions.length + '\n';
        } else if (query === '?number_error_submision') {
            let count = 0;
            for (const submission of submissions) {
                if (submission[3] === 'ERR') {
                    count++;
                }
            }
            result += count + '\n';
        } else if (query.startsWith('?number_error_submision_of_user')) {
            const userID = query.split(' ')[1];
            let count = 0;
            for (const submission of submissions) {
                if (submission[0] === userID && submission[3] === 'ERR') {
                    count++;
                }
            }
            result += count + '\n';
        } else if (query.startsWith('?total_point_of_user')) {
            const userID = query.split(' ')[1];
            let total = 0;
            const maxPoints = {};
            for (const submission of submissions) {
                if (submission[0] === userID) {
                    if (maxPoints[submission[1]] === undefined || maxPoints[submission[1]] < parseInt(submission[4])) {
                        maxPoints[submission[1]] = parseInt(submission[4]);
                    }
                }
            }
            for (const problemID in maxPoints) {
                total += maxPoints[problemID];
            }            
            result += total + '\n';
        } else if (query.startsWith('?number_submission_period')) {
            const [fromTime, toTime] = query.split(' ').slice(1);
            let count = 0;
            for (const submission of submissions) {
                if (submission[2] >= fromTime && submission[2] <= toTime) {
                    count++;
                }
            }
            result += count + '\n';
        }
    }
    return result;
}

//Tuần 8 bài 2
function processCitizenData(input) {
    let data = input.split('\n');
    let people = [];
    let i = 0;
    while (data[i] !== '*') {
        people.push(data[i].split(' '));
        i++;
    }
    i++;
    let queries = [];
    while (data[i] !== '***') {
        queries.push(data[i]);
        i++;
    }
    let result = '';
    for (let query of queries) {
        if (query === 'NUMBER_PEOPLE') {
            result += people.length + '\n';
        } else if (query.startsWith('NUMBER_PEOPLE_BORN_AT')) {
            let date = query.split(' ')[1];
            let count = 0;
            for (let person of people) {
                if (person[1] === date) {
                    count++;
                }
            }
            result += count + '\n';
        } else if (query.startsWith('MOST_ALIVE_ANCESTOR')) {
            let code = query.split(' ')[1];
            let person = people.find(p => p[0] === code);
            let generation = 0;
            while (person[2] !== '0000000' || person[3] !== '0000000') {
                generation++;
                if (person[2] !== '0000000') {
                    person = people.find(p => p[0] === person[2]);
                } else {
                    person = people.find(p => p[0] === person[3]);
                }
            }
            result += generation + '\n';
        } else if (query.startsWith('NUMBER_PEOPLE_BORN_BETWEEN')) {
            let [fromDate, toDate] = query.split(' ').slice(1);
            let count = 0;
            for (let person of people) {
                if (person[1] >= fromDate && person[1] <= toDate) {
                    count++;
                }
            }
            result += count + '\n';
        } else if (query === 'MAX_UNRELATED_PEOPLE') {
            let peopleWithoutParents = people.filter(p => p[2] === '0000000' && p[3] === '0000000');
            let graph = {};
            for (let person of peopleWithoutParents) {
                graph[person[0]] = [];
            }
            for (let person of peopleWithoutParents) {
                for (let otherPerson of peopleWithoutParents) {
                    if (person[0] !== otherPerson[0] && person[2] !== otherPerson[0] && person[3] !== otherPerson[0]) {
                        graph[person[0]].push(otherPerson[0]);
                    }
                }
            }
            let maxSubsetSize = 0;
            for (let person of peopleWithoutParents) {
                let visited = new Set();
                let queue = [person[0]];
                let subsetSize = 0;
                while (queue.length > 0) {
                    let currentPerson = queue.shift();
                    if (!visited.has(currentPerson)) {
                        visited.add(currentPerson);
                        subsetSize++;
                        for (let otherPerson of graph[currentPerson]) {
                            queue.push(otherPerson);
                        }
                    }
                }
                maxSubsetSize = Math.max(maxSubsetSize, subsetSize);
            }
            result += maxSubsetSize + '\n';
        }
    }
    return result;
}