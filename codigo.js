const text = document.getElementById("box");
const quantidadeCaracteres = document.getElementById("caracters");

// captura e conferencia de caracteres escritos no input
text.addEventListener("input", function () {
  //quantidade de caracteres
  const caracteres = text.value.length;

  //quantidade de palavras
  //remove caracteres especiais
  const textolimpo = text.value.replace(/[^\w\s]|[0-9]/g, '');
  //separa em array as palavras
  const palavras = textolimpo.trim().split(/\s+/);
  // verifica e conta as quantidades de palavras
  const count = textolimpo.trim() === "" ? 0 : palavras.length;
//atualiza a quantidade na tela
  quantidadeCaracteres.textContent = `Caracteres: ${caracteres} Palavaras: ${count}`;
  
});

//fução para limpar o conteudo da caixa de texto
function apagar(){
    text.value = "";
    quantidadeCaracteres.textContent = "Caracteres: 0 Palavaras: 0";
}