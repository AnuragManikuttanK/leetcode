/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
       const aliceStart = new Date(`2023-${arriveAlice}`);
    const aliceEnd = new Date(`2023-${leaveAlice}`);
    const bobStart = new Date(`2023-${arriveBob}`);
    const bobEnd = new Date(`2023-${leaveBob}`);

    const start = new Date(Math.max(aliceStart, bobStart));
    const end = new Date(Math.min(aliceEnd, bobEnd));

    if (start > end) {
        return 0;
    }

    return Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
};