enum Score {
  ZERO,
  GOOD = 'GOODV',
  BAD = 'BADV',
  Five = 5,
  Six,
}

//  当value为数字时,可以根据数字找到 Key 若数字value在Enum类型中找不到， 返回undefined
//  当value为string时，不可以根据value 找key
console.log(Score[0]); // Zero
console.log(Score['GOOD']) // GOODV
console.log(Score['GOODV']) // undefind
console.log(Score[5]); // Five
console.log(Score[1]); // undefined
console.log(Score[6]) // Six
