function accum(s) {
  const wordLenght = s;
  const result = [];


  for (let i = 0; i < wordLenght.length; i++) {
    let part = ''
    part = wordLenght[i].toUpperCase();
    for (let j = 0; j < i; j++) {
        part += wordLenght[i].toLowerCase();
    }
    result.push(part)
  }
  return result.join("-");
}

console.log(accum("ZpglnRxqenU"));
