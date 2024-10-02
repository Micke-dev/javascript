const form = document.getElementById('form-birth');
const valor_A = document.getElementById('a'); 
const valor_B = document.getElementById('b'); 

function validaCampo (campoA, campoB) { 
    return campoB > campoA; 
};

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const a = parseFloat(valor_A.value);
    const b = parseFloat(valor_B.value);

    const mensagemSucesso = `O valor é válido porque: <b>${b}</b> é maior que <b>${a}</b>.<br>`;
    const mensagemErro = `O valor não é válido porque: <b>${b}<b> não é maior que <b>${a}<b>.<br>`;
    
        
    formEValido = validaCampo(a, b);
    
    if (formEValido)   {

        const containerMensagem = document.querySelector('.mensagem-sucesso'); 
        containerMensagem.innerHTML = mensagemSucesso; 
        containerMensagem.style.display = 'block'; 
        document.querySelector('.mensagem-erro').style.display = 'none';
    } else   {

        const containerMensagem = document.querySelector('.mensagem-erro'); 
        containerMensagem.innerHTML = mensagemErro; 
        containerMensagem.style.display = 'block';
        document.querySelector('.mensagem-sucesso').style.display = 'none';
        
    } 
});


