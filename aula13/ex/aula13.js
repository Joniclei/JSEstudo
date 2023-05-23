//const aleatorio = Math.random() * (10 - 1) + 1;

//console.log(aleatorio);

const getnumber = Number(prompt("Escreva um numero"));
const numYou = document.getElementById("numyou");
const text = document.getElementById("text");

numyou.innerHTML = getnumber;

text.innerHTML += `<p> Raiz cubica: ${getnumber ** (1 / 3)}</p>`;
text.innerHTML += `<p> Raiz cubica: ${getnumber ** (1 / 3)}</p>`;
