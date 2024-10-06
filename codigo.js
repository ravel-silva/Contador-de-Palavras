const text = document.getElementById("box");
const quantidadeCaracteres = document.getElementById("caracters")

// captura e conferencia de caracteres encritos no input
text.addEventListener('input', function(){
    let caracteres = text.value.length;
    
    

    quantidadeCaracteres.innerText = `Quantidade de caracteres  ${caracteres}`;
})