function toRomanLazy(num) {
  let results = "";
  const romanMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
};
for (let key in romanMap){
  while(num >= romanMap[key]){
  if(num >= romanMap[key]){
    results += key;
    num -= romanMap[key];
    if(num === 0){
      return results;
    }
  }
}
}
}

function toRoman(num) {
  let results = "";
const romanMap = {
  'M': 1000,
  'CM': 900,  // <-- Add this!
  'D': 500,
  'CD': 400,  // <-- Add this!
  'C': 100,
  'XC': 90,   // <-- Add this!
  'L': 50,
  'XL': 40,   // <-- Add this!
  'X': 10,
  'IX': 9,    // <-- Add this!
  'V': 5,
  'IV': 4,    // <-- Add this!
  'I': 1
};

  for (let key in romanMap){
  while(num >= romanMap[key]){
  if(num >= romanMap[key]){
    results += key;
    num -= romanMap[key];
    if(num === 0){
      return results;
    }
  }
}
}
}

module.exports = { toRoman, toRomanLazy };
