function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const anoLivro = 2050 - ano;
  const frase = nome.toUpperCase() + " por " + autor;
  const objeto = {
    nome: nomeMaior,
    anoLivro,
    frase,
  };
  return objeto;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J.R.R.Tolkien");

console.log(livroRetorno.frase);
