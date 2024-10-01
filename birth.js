const form = document.getElementById('form-birth');
const valor_A = document.getElementById('a'); 
const valor_B = document.getElementById('b'); 

function validaCampo (campoA, campoB) { 
    return campoB > campoA; 
};

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const valor_a = parseFloat(valor_A.value);
    const valor_b = parseFloat(valor_B.value);

    const mensagemSucesso = `O valor é válido porque: <b>${b.value}</b> é maior que <b>${a.value}</b>.<br>`;
    
        
    formEValido = validaCampo(a, b);
    
    if (formEValido)    {

        const containerMensagem = document.querySelector('.mensagem-sucesso'); 
        containerMensagem.innerHTML = mensagemSucesso; 
        containerMensagem.style.display = 'block'; 
        document.querySelector('.mensagem-erro').style.display = 'none';
    
        }

        
        else {

        dodocument.querySelector('.mensagem-erro').style.display = 'block';
        document.querySelector('.mensagem-sucesso').style.display = 'none';
        
    } 

    }
)


