const form = document.getElementById('form-birth');

function validaNome(nome) {
    const nomeComoArray = nome.split(' ');
    return nomeComoArray.lenght >= 2;
}

form.addEventListener('submit', function(e) {
    formEValido = false;
    e.preventDefault();

    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');
    const mensagemSucesso=`Cadastro do funcionário ${nome.value} ${idade.value} realizado com sucesso`;

    formEValido = validaNome(nome.value)
    if (formEValido) {
        alert("mensagemSucesso");

        nome.value = '';
        idade.value= '';


    }
    else {
        alert("O nome não está completo");
    }

})

console.log(form);