let varA = "A";
let varB = "B";
let varC = "C";

console.log(varA, varB, varC);

let varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);
