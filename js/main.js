

let result = document.querySelector('.result-message');

function criptografar() {
    let texto = document.querySelector('#texto').value
    if(/[A-ZÀ-ÖØ-Þ]/.test(texto)){
        alert("Erro: O texto não pode conter letras maiúsculas.");
    } else if(/[À-ÖØ-Þà-öø-ÿ]/.test(texto)){
        alert("Erro: O texto não pode conter caracteres acentuados");
    } else {
        result.innerHTML = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        let botao = document.querySelector('.copia');
        botao.style.display = 'block';
    }
}

function descriptografar() {
    let texto = document.querySelector('#texto').value;
    result.innerHTML = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

function copiar() {
    let result = document.querySelector('.result-message');
    let resultText = result.innerText;
    navigator.clipboard.writeText(resultText);
}