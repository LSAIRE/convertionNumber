function convertCharacterToInteger(character) {
  switch (character) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 'invalid';
  }
}

export default function convertRomanToInteger(nRoman) {
  if (typeof nRoman != "string") {
    return null;
  }
  let tmpRoman = nRoman.toLocaleUpperCase();
  let number = convertCharacterToInteger(tmpRoman.charAt(0));
  let previus;
  let current;

  for (let i = 1; i < tmpRoman.length; ++i) {
    current = convertCharacterToInteger(tmpRoman.charAt(i));
    previus = convertCharacterToInteger(tmpRoman.charAt(i - 1));

    if (current <= previus) {
      number += current;
    } else {
      number = number - previus * 2 + current;
    }
  }

  return number;
}
