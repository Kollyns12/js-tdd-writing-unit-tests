export function pointsForWord(word) {
  let points = 0;

  for (const char of word) {
    // Case-insensitive check for vowels
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }

  return points;
}

