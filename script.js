
function verificarSenha() {
    const SENHA_CORRETA = 6;
    const campoSenha = document.getElementById("campoSenha1");
    const feedback = document.getElementById("feedback1");
    const imagemCadeado = document.getElementById("cadeado-principal");
    const botao = document.querySelector("button");

    const entradaNumerica = parseInt(campoSenha.value.trim());
    if (entradaNumerica === SENHA_CORRETA) {
        imagemCadeado.src = "open.png"; 
        feedback.textContent = "CORRETO! Você abriu o cadeado principal. Avance para o próximo passo.";
        feedback.style.color = "gold";
        campoSenha.disabled = true;
        botao.disabled = true;
    } else {
        feedback.textContent = "ERRO! Senha incorreta. Pista: Pense no número de letras, não na palavra.";
        feedback.style.color = "red";
        campoSenha.value = '';

    }
}