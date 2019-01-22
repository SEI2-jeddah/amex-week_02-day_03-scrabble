// Solution 1
var letterScores = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4,
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4
};

function getScore(word) {
  word = word.toUpperCase();
  var score = 0;

  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (letterScores[letter] !== undefined) {
      score += letterScores[letter];
    }
  }
  return score;
}

// --------------------------------------------- //

// Solution 2 - Thanks Majd!
// object that store values and their letters as array
var scores = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};

function getScore(word) {
  var result = 0; //initial val
  word = word.toUpperCase(); // to capitalize each letter
  for (var i = 0; i < word.length; i++) {
    for (var key in scores) {
      if (scores[key].includes(word[i])) {
        result += parseInt(key); // to pars property to integer val
      }
    }
  }
  return result;
}
