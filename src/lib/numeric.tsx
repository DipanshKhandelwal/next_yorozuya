export const isNumeric = (value: string): boolean => {
  function onlyNumbers(value: string) {
    const ret = /^[0-9\.]*$/.test(value);
    return ret;
  }

  function countString(str: string, letter: string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == letter) {
        count += 1;
      }
    }
    return count;
  }

  if (value == "") return true;

  if (value.length > 10) return false;

  if (!onlyNumbers(value)) return false;

  if (countString(value, ".") > 1) return false;

  const numeric = parseFloat(value);
  if (isNaN(numeric)) return false;

  return true;
};
