export default function listGifts(letter) {
  return letter
    .split(" ")
    .filter((gift) => gift != false && !gift.startsWith("_"))
    .reduce((acc, gift) => {
      acc[gift] = acc[gift] ? acc[gift] + 1 : 1;
      return acc;
    }, {});
}
