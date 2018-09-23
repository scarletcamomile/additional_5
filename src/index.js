module.exports = function check(str, bracketsConfig) {
  let opened = [],
    count = 0;
  str.split("").map((el) => {
    for (i in bracketsConfig) {
      if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
        if (bracketsConfig[i][0] == el) {
          if (opened[opened.length - 1] != el) {
            opened.push(el);
            count += +i + 1;
          } else {
            opened.pop(el);
            count -= +i + 1;
          }
        }
      } else if (el == bracketsConfig[i][0]) {
        opened.push(el);
        count += +i + 1;
      } else if (el == bracketsConfig[i][1]) {
        if (bracketsConfig[i][0] == opened[opened.length - 1]) opened.pop();
        count -= +i + 1;
      }
    }
    if (count < 0) opened.length+=1;
  });
  return opened.length == 0 && count == 0 ? true : false;
};