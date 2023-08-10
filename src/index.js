import cipher from './cipher.js';

console.log(cipher);

let msgEntrada = document.querySelector("#texto-inicial"); 
let chaveDeslocamento = document.querySelector("#chave-deslocamento").innerHTML; 
let botaoProx = document.querySelector("#btn-proximo"); 
let botaoAnter = document.querySelector("#btn-anterior"); 
let botaoEncriptar = document.querySelector(".btn-codif"); 
let botaoDescriptar = document.querySelector(".btn-descriptar")
let textoFinal = document.querySelector("#texto-final");
let botaoCopiar = document.querySelector(".btn-copiar"); 



const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

botaoEncriptar.addEventListener("click", encriptar); 
botaoAnter.addEventListener("click", anterior); 
botaoProx.addEventListener("click", proximo); 
botaoDescriptar.addEventListener("click", descriptar); 
botaoCopiar.addEventListener("click", copiar); 

function anterior() {
  if(chaveDeslocamento > 1) {
    chaveDeslocamento--; 
    document.querySelector("#chave-deslocamento").innerHTML = chaveDeslocamento; 
  }
}
function proximo() {
  if(chaveDeslocamento < 25) {
    chaveDeslocamento++; 
    document.querySelector("#chave-deslocamento").innerHTML = chaveDeslocamento; 
  }
}

function encriptar() {
  const mensagem = msgEntrada.value.toUpperCase();
  const chaveEncrip = parseInt(chaveDeslocamento); 
  let resultado = ""; 
    
  for(let i = 0; i < mensagem.length; i++) {
    const posicaoLetra = mensagem.charCodeAt(i)-64; 
    let letraComDeslocamento = (posicaoLetra + chaveEncrip)%26; 

    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento;

    resultado += alfabeto[letraComDeslocamento-1]; 
  }
  textoFinal.innerHTML = resultado;
}   

function descriptar() {
  const mensagem = msgEntrada.value.toUpperCase();
  const chaveEncrip = parseInt(chaveDeslocamento); 
  let resultado = ""; 

  for(let i = 0; i < mensagem.length; i++) {
    const posicaoLetra = mensagem.charCodeAt(i)-64; 
    let letraComDeslocamento = (posicaoLetra - chaveEncrip)%26; 

    letraComDeslocamento = letraComDeslocamento < 0 ? (26 + letraComDeslocamento) : letraComDeslocamento;

    resultado += alfabeto[letraComDeslocamento-1]; 
        
  }
  textoFinal.innerHTML = resultado;
}


function copiar() {
  let textoCopiado = textoFinalTeste.value; 
  textoCopiado.select(); 
  Document.execCommand("copy"); 
  alert("o texto copiado é: " + textoCopiado); 
}

