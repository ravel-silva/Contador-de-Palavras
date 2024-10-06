const text = document.getElementById("box");
const quantidadeCaracteres = document.getElementById("caracters")

// captura e conferencia de caracteres escritos no input
text.addEventListener('input', function(){
    //quantidade de caracteres
    let caracteres = text.value.length;

    //quantidade de palavras
    let palavras = text.value.trim().split(/\s+/);
    const count = palavras.length;
    
  


    
})