const form = document.getElementById('form-birth');
const valor_A = document.getElementById('numero-a'); 
const valor_B = document.getElementById('numero-b'); 

function numbervalid (campoA, campoB) { 
    return campoB > campoA; 
};

form.addEventListener('submit', function(e)
    e.preventDefault(); 
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);

    const messagesucess = 'formulario enviado com sucesso! Verificando: <b> ValorA menor que ValorB!</B>';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA.value = '';
        ValB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
        
})
