function hasPath(matrix, rows, cols, str) {
  
}

//ABTG
//CFCS
//JDEH

//BFCE
const matrix1 = "ABTGCFCSJDEH";
const str1 = "BFCE";

console.log(hasPath(matrix1, 3, 4, str1) === true);

//ABCE
//SFCS
//ADEE

//SEE
const matrix2 = "ABCESFCSADEE";
const str2 = "SEE";

console.log(hasPath(matrix2, 3, 4, str2) === true);

//ABTG
//CFCS
//JDEH

//ABFB
const matrix3 = "ABTGCFCSJDEH";
const str3 = "ABFB";

console.log(hasPath(matrix3, 3, 4, str3) === false);

//ABCEHJIG
//SFCSLOPQ
//ADEEMNOE
//ADIDEJFM
//VCEIFGGS

//SLHECCEIDEJFGGFIE
const matrix4 = "ABCEHJIGSFCSLOPQADEEMNOEADIDEJFMVCEIFGGS";
const str4 = "SLHECCEIDEJFGGFIE";

console.log(hasPath(matrix4, 5, 8, str4) === true);

//ABCEHJIG
//SFCSLOPQ
//ADEEMNOE
//ADIDEJFM
//VCEIFGGS

//SGGFIECVAASABCEHJIGQEM
const matrix5 = "ABCEHJIGSFCSLOPQADEEMNOEADIDEJFMVCEIFGGS";
const str5 = "SGGFIECVAASABCEHJIGQEM";

console.log(hasPath(matrix5, 5, 8, str5) === true);

//ABCEHJIG
//SFCSLOPQ
//ADEEMNOE
//ADIDEJFM
//VCEIFGGS

//SGGFIECVAASABCEEJIGOEM
const matrix6 = "ABCEHJIGSFCSLOPQADEEMNOEADIDEJFMVCEIFGGS";
const str6 = "SGGFIECVAASABCEEJIGOEM";

console.log(hasPath(matrix6, 5, 8, str6) === false);

//ABCEHJIG
//SFCSLOPQ
//ADEEMNOE
//ADIDEJFM
//VCEIFGGS

//SGGFIECVAASABCEHJIGQEMS
const matrix7 = "ABCEHJIGSFCSLOPQADEEMNOEADIDEJFMVCEIFGGS";
const str7 = "SGGFIECVAASABCEHJIGQEMS";

console.log(hasPath(matrix7, 5, 8, str7) === false);

//AAAA
//AAAA
//AAAA

//AAAAAAAAAAAA
const matrix8 = "AAAAAAAAAAAA";
const str8 = "AAAAAAAAAAAA";

console.log(hasPath(matrix8, 3, 4, str8) === true);

//AAAA
//AAAA
//AAAA

//AAAAAAAAAAAAA
const matrix9 = "AAAAAAAAAAAA";
const str9 = "AAAAAAAAAAAAA";

console.log(hasPath(matrix9, 3, 4, str9) === false);

//A

//A
const matrix10 = "A";
const str10 = "A";

console.log(hasPath(matrix10, 1, 1, str10) === true);

//A

//B
const matrix11 = "A";
const str11 = "B";

console.log(hasPath(matrix11, 1, 1, str11) === false);

console.log(hasPath(null, nullptr, null) ===alse);