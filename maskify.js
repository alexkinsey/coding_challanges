function maskify(cc) {
  var phrase = cc.toString();
  var lengthToMask = phrase.length;

  if (lengthToMask > 4) {
    var positionsToMask = lengthToMask - 4;

    for (let i = 0; i < positionsToMask; i++) {
      phrase = phrase.replace(phrase.charAt(i), '#');
    }
  }
}

maskify(1234567);
