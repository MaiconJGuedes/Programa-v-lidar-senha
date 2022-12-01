function verificarSenha() {

  //criar referencia aos elementos da página

  let inSenha = document.getElementById('inSenha')
  let outResposta = document.getElementById('outResposta')

  let senha = inSenha.value
  let erros = [] //vetor com erros

  if (senha.length < 8 || senha.length > 15) {
    erros.push('Possui entre 8 e 15 caracteres.')
  }

  if (senha.match(/[0-9]/g) == null) {
    erros.push('Possuir números. (no mínimo 1)')
  }

  if (!senha.match(/[a-z]/g)) {
    erros.push('Possuir letras minúsculas. (no mínimo 1)')
  }

  if (!senha.match(/[A-Z]/g) || !senha.match(/[A-Z]/g).length == 1) {
    erros.push('Possuir letras maiúsculas. (no mínimo 2)')
  }

  if (!senha.match(/[\W/@#$%¨&*?]/g)) {
    erros.push('Possuir símbolos. (no mínimo 1)')
  }

  if (erros.length == 0) {
    outResposta.textContent = 'Senha do úsuario válida!!'
  } else {
    outResposta.textContent = 'erro... a senha deve ' + erros.join(',')
  }
}

let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarSenha)