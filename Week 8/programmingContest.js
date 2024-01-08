/*
Analyze Code Submission of a Programming Contest
Description
Data about submission of a programming contest consists a sequence of lines, each line has the following information:
                                                      <UserID> <ProblemID> <TimePoint> <Status> <Point>
in which the user <UserID> submits his/her code to solve the problem <ProblemID> at time-point <TimePoint>, and gets status <Status> and point <Point>
<UserID>: string of length from 3 to 10
<ProblemID>: string under the format Pxy where x, y are digits 0,1,...,9 (for example P03, P10)
<TimePoint>: string representing time-point with the format HH:MM:SS (for example, 09:45:20 means the time-point 9 hour 45 minutes 20 seconds)
<Status>: string with two cases (ERR, OK)
<Point>: integer from {0, 1, 2, ..., 10}

A user can submit the code for solving each problem several time. The point that the user gets for a problem is the maximal point among the submissions for that problem.

Perform a sequence of queries of following types:
?total_number_submissions: return the number of submissions of the contest
?number_error_submision: return the number of submissions having status ERR 
?number_error_submision_of_user <UserID>: return the number of submission having status ERR of user <UserID> 
?total_point_of_user <UserID>: return the total point of user <UserID> 
?number_submission_period <from_time_point> <to_time_point>: return the number of submissions in the period from <from_time_point> to <to_time_point> (inclusive)

Input
The input consists of two blocks of data:
The first block is the operational data, which is a sequence of lines (number of lines can be up to 100000), each line contains the information of a submission with above format .The first block is terminated with a line containing the character #
The second block is the query block, which is a sequence of lines (number of lines can be up to 100000), each line is a query described above. The second block is terminated with a line containing the character #

Output
Write in each line, the result of the corresponding query 

Example
Input
U001 P01 10:30:20 ERR 0
U001 P01 10:35:20 OK 10
U001 P02 10:40:20 ERR 0
U001 P02 10:55:20 OK 7
U002 P01 10:40:20 ERR 0
U001 P01 11:35:20 OK 8
U002 P02 10:40:20 OK 10
#
?total_number_submissions
?number_error_submision
?number_error_submision_of_user U002 
?total_point_of_user U001 
?number_submission_period 10:00:00 11:30:45
#


Output 
7
3
1
17
6
*/
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
