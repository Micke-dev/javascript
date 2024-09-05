const form = document.getElementById('form-aniversário');

function validaIdade(idade) {
    const idadeComoArray = idade.split(' ')
    return dataNasc>idade;
}

form.addEventListener('submit',function(e) {
    let formEValido = false;
    e.preventDefault();

    const dataNasc = document.getElementById('dataNasc');
    const idade = document.getElementById('idade')
    const mensagemSucesso = `Cadastro realizado com sucesso`${dataNasc.value};

    formEValido = validaIdade(dataNasc.value)
    if (formEValido)
    {   alert("mensagemSucesso");
        dataNasc.value = '';
        idade.value = '';
        }
    
    else    {
        alert("A idade é maior que a data de nascimento")
    }

})

console.log(form);