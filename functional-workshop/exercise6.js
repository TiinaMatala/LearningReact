function countWords(inputWords) {
    var counting = {};
    inputWords.reduce(function (allCountWords, countWord) {
        if (!counting [countWord]) {
            counting [countWord] = 1;
        }
        else {
            counting [countWord]++;
        }
        return counting;

    }, null);
    return counting;
    // SOLUTION GOES HERE
  }

  module.exports = countWords