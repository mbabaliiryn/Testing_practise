const isLowerCase = (char) => {
  const match = char.match(/^[a-z]$/);
  const result = match && char === match[0];
  return !!result;
};

const isUpperCase = (char) => {
  const match = char.match(/^[A-Z]$/);
  const result = match && char === match[0];
  return !!result;
};

const cipher = (str, shift) => {
  const chars = str.split('');
  const shifted = chars.map(char => {
    let aCodePt;
    if (isLowerCase(char)) {
      aCodePt = 'a'.codePointAt();
    } else if (isUpperCase(char)) {
      aCodePt = 'A'.codePointAt();
    } else {
      return char;
    }
    const charCodePt = char.codePointAt();
    const newCodePt = ((charCodePt - aCodePt + shift) % 26) + aCodePt;
    return String.fromCodePoint(newCodePt);
  });
  return shifted.join('');
};

export default cipher;
