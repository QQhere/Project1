/*
Citizen Data Analysis
Description
CITIZEN
Given a DataBase about citizen, perform queries over this DataBase.
Input
The input consists of two blocks: the first block is the DataBase and the second block is the list of queries. Two blocks are separated by a line containing a character *.
1. The first block (DataBase about citizen) consists of lines (number of lines can be upto 100000), each line is the information about a person and is under the format:
                                   <code>  <dat_of_birth>  <fathher_code>   <mother_code>  <is_alive>  <region_code>
in which:
 <code>: the code of the person which is a string of length 7
 <date_of_birth>: the date of birth of the person and has the format YYYY-MM-DD (for example 1980-02-23), <date_of_birth> is before 3000-12-31
 <fathher_code> and <mother_code> is the code of father and mother: they are also strings of length 7. If the code is 0000000, then the current person does not has information about his father or mother
 <is_alive>: a character with two values: ‘Y’ means that the person is still alive, and ‘N’ means tat the current person is died.
 <region_code>: the code of the region where the person lives

2. The second block is the list of queries (number of queries can be upto 100000) over the DataBase which consists of following commands:
 NUMBER_PEOPLE: return the number of people (number of lines of the DataBase)
 NUMBER_PEOPLE_BORN_AT <date>: return the number of people having date-of-birth is equal to <date>
 MOST_ALIVE_ANCESTOR <code>: find the most ancestor (farthest in term of generation distance) of the given person <code>. Return the generation distance between the ancestor found and the given person
 NUMBER_PEOPLE_BORN_BETWEEN <from_date> <to_date>: compute the number of people having date-of-birth between <from_date> and <to_date> (<from_date> and <to_date> are under the form YYYY-MM-DD, <to_date> is before 3000-12-31)
 MAX_UNRELATED_PEOPLE: find a subset of people in which two any people of the subset do not have father/mother-children and the size of the subset is maximal. Return the size of the subset found.
The second block is terminated by a line containing ***.
Output
 Each line presents the result of the corresponding query (described above).
Example
Input
0000001 1920-08-10 0000000 0000000 Y 00002
0000002 1920-11-03 0000000 0000000 Y 00003
0000003 1948-02-13 0000001 0000002 Y 00005
0000004 1946-01-16 0000001 0000002 Y 00005
0000005 1920-11-27 0000000 0000000 Y 00005
0000006 1920-02-29 0000000 0000000 Y 00004
0000007 1948-07-18 0000005 0000006 Y 00005
0000008 1948-07-18 0000005 0000006 Y 00002
0000009 1920-03-09 0000000 0000000 Y 00005
0000010 1920-10-16 0000000 0000000 Y 00005
*
NUMBER_PEOPLE
NUMBER_PEOPLE_BORN_AT 1919-12-10
NUMBER_PEOPLE_BORN_AT 1948-07-18
MAX_UNRELATED_PEOPLE
MOST_ALIVE_ANCESTOR 0000008
MOST_ALIVE_ANCESTOR 0000001
NUMBER_PEOPLE_BORN_BETWEEN 1900-12-19 1928-11-16
NUMBER_PEOPLE_BORN_BETWEEN 1944-08-13 1977-12-15
NUMBER_PEOPLE_BORN_BETWEEN 1987-01-24 1988-06-03
***
Output
10
0
2
6
1
0
6
4
0
*/
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

let input =`0000001 1920-08-10 0000000 0000000 Y 00002
0000002 1920-11-03 0000000 0000000 Y 00003
0000003 1948-02-13 0000001 0000002 Y 00005
0000004 1946-01-16 0000001 0000002 Y 00005
0000005 1920-11-27 0000000 0000000 Y 00005
0000006 1920-02-29 0000000 0000000 Y 00004
0000007 1948-07-18 0000005 0000006 Y 00005
0000008 1948-07-18 0000005 0000006 Y 00002
0000009 1920-03-09 0000000 0000000 Y 00005
0000010 1920-10-16 0000000 0000000 Y 00005
*
NUMBER_PEOPLE
NUMBER_PEOPLE_BORN_AT 1919-12-10
NUMBER_PEOPLE_BORN_AT 1948-07-18
MAX_UNRELATED_PEOPLE
MOST_ALIVE_ANCESTOR 0000008
MOST_ALIVE_ANCESTOR 0000001
NUMBER_PEOPLE_BORN_BETWEEN 1900-12-19 1928-11-16
NUMBER_PEOPLE_BORN_BETWEEN 1944-08-13 1977-12-15
NUMBER_PEOPLE_BORN_BETWEEN 1987-01-24 1988-06-03
***`
console.log(processCitizenData(input))