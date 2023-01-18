var Score;
(function (Score) {
    Score[Score["ZERO"] = 0] = "ZERO";
    Score["GOOD"] = "GOODV";
    Score["BAD"] = "BADV";
    Score[Score["Five"] = 5] = "Five";
    Score[Score["Six"] = 6] = "Six";
})(Score || (Score = {}));
console.log(Score[0]); // undefined
console.log(Score['GOOD']); // GOODV
console.log(Score['GOODV']); // undefind
console.log(Score[5]);
console.log(Score[1]);
console.log(Score[6]);
