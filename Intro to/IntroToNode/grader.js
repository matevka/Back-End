function average(scores){
    //add all scores together
var total = 0;
    scores.forEach(function(score){
        total += score;
    });
//divide by the total number of scores
var avg = total/scores.length;
//round average
return Math.round(avg);

var scores = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
// var scores = [90, 98, 89, 100, 100, 86, 94]
average(scores);