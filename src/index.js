module.exports = function toReadable (number) {
  const from0to9 = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine'];
  const from10to20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const secondDigit = ['twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';

  function toReadableBefore100(num) {
    if (num < 10) {
      return from0to9[num];
    }

    if (num < 20){
      return from10to20[num - 10];
    }

    const firstDigitValue = num % 10;
    const secondDigitValue = Math.floor(num / 10);
    let str = (firstDigitValue === 0) ? 
      `${secondDigit[secondDigitValue - 2]}`:
      `${secondDigit[secondDigitValue - 2]} ${from0to9[firstDigitValue]}`;
    return str;
  }

  if (number < 100) {
    return toReadableBefore100(number);
  }

  let readableString = '';

  const thirdDigitValue = Math.floor(number / 100);
  const lastDigits = number % 100;
  readableString = lastDigits === 0 ? 
    `${from0to9[thirdDigitValue]} ${hundred}` :
    `${from0to9[thirdDigitValue]} ${hundred} ${toReadableBefore100(lastDigits)}`;

  return readableString;
}
