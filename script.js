let clubes = [] //Declara array global

function adicionarClube() {
  //Cria referência aos elementos da página
  let inClube = document.getElementById('inClube')

  let clube = inClube.value.toUpperCase() //Obtem conteúdo dos campos de entrada

  //Se clube não for preenchido
  if (clube == '') {
    alert('Insira os dados corretamente')
    inClube.focus
    return
  }
  //Adiciona dados ao array de objetos
  clubes.push({nome: clube
  })

  //Limpa campos e adiciona array em inClube
  inClube.value = ''
  inClube.focus()

  listarClubes() //Chama function que lista os clubes
}
//Cria referência ao btAdicionar e associa function ao evento click deste botão
let btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarClube)

function listarClubes() {
  //Verifica se array está vazio
  if (clubes.length ==0) {
    alert('Não há clubes na lista')
    return
  }
  let lista = '' //Concatena lista de clubes

  //Percorre os elementos do array
  for (let i = 0; i < clubes.length; i++) {
    lista += (i + 1) + ' . ' + clubes[i].nome  + '\n'
  }
  //Exibe a lista (em uma única instrução)
  document.getElementById('outLista').textContent = lista
}
let btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarClubes)

function montarTabela () {

  let jogos = ''
  let ultimoClube = clubes[clubes.length - 1]

  if ((clubes.length % 2) !== 0 || clubes.length ==0) {
    alert('Adicione mais um clube para montar a tabela de jogos!')
    inputClube.focus()
    return
}
  for (let i = 0; i < (clubes.length - 1) / 2; i++) {
    jogos += clubes[i] + 'x' + ultimoClube - i + '\n'
  }

  outLista.textContent = jogos
}

let btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarTabela)