const form = document.querySelector("#fOrm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const ipeso = event.target.querySelector("#pesoo");
  const ialt = event.target.querySelector("#alturA");

  const peso = Number(ipeso.value);
  const alt = Number(ialt.value);

  if (!peso) {
    eventoclick("Peso invalido", false);
    p.classList.add("paragrafo-resultado");
    return;
  }
  if (!alt) {
    eventoclick("Altura invalido", false);
    return;
  }

  const imc = getImc(peso, alt);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu imc e ${imc} e voce esta ${nivelImc}`;

  eventoclick(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, alt) {
  const imc = peso / alt ** 2;
  return imc.toFixed(2);
}

function paraf() {
  const par = document.createElement("p");
  return par;
}

function eventoclick(msg, isValid) {
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = "";
  const p = paraf();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else if (!isValid) {
    p.classList.add("errorrr");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

const a = new Date();

console.log("dia", a.getDate());
console.log(a);

/*const formU = document.querySelector("#fOrm");
const alT = document.querySelector("#alturA");

formU.addEventListener("submit", function (event) {
  event.preventDefault();
  um(pes.value);
});

function um(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = document.createElement("p");
  p.classList.add("paragrafo-resultado");
  p.innerHTML = pes.value;
  p.innerHTML = alT.value;

  resultado.appendChild(p);
}
*/
