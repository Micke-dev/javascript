const form = document.getElementById('form-birth');
const valor_A = document.getElementById('numero-a'); 
const valor_B = document.getElementById('numero-b'); 

function validaCampo (campoA, campoB) { 
    return campoB > campoA; 
};

form.addEventListener('submit', function(e)
    e.preventDefault(); 
    const valorA = parseFloat(valor_A.value);
    const valorB = parseFloat(valor_B.value);

    const messagesucess = `O valor é válido porque: <b>${valor_B.value}</b> é maior que <b>${valor_A.value}</b>.<br>`;
        
    formEValido = validaCampo(valorA, valorB);
    
    if (formEValido){
        const containerMensagem = document.querySelector('.success-message');
        containerMensagem.innerHTML = mensagemSucesso;
        containerMensagem.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';}

        
        else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
})
