/*
Family Tree
Description
Given a family tree represented by child-parent (c,p) relations in which c is a child of p. Perform queries about the family tree:
descendants <name>: return number of descendants of the given <name>
generation <name>: return the number of generations of the descendants of the given <name>

Note that: the total number of people in the family is less than or equal to 10
4
Input
Contains two blocks. The first block contains information about child-parent, including lines (terminated by a line containing ***), each line contains: <child> <parent> where <child> is a string represented the name of the child and <parent> is a string represented the name of the parent. The second block contains lines (terminated by a line containing ***), each line contains two string <cmd> and <param> where <cmd> is the command (which can be descendants or generation) and <param> is the given name of the person participating in the  query.
Output
Each line is the result of a corresponding query.
Example
Input
Peter Newman
Michael Thomas
John David
Paul Mark
Stephan Mark
Pierre Thomas
Mark Newman
Bill David
David Newman
Thomas Mark
***
descendants Newman
descendants Mark
descendants David
generation Mark
***
Output
10
5
2
2
*/
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

let familyTree = new FamilyTree();
let input = `Peter Newman
Michael Thomas
John David
Paul Mark
Stephan Mark
Pierre Thomas
Mark Newman
Bill David
David Newman
Thomas Mark
***
descendants Newman
descendants Mark
descendants David
generation Mark
***`;
function family(input) {
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