nome = window.prompt('informe seu nome')
disciplina = window.prompt('Informe a disciplina')
nota1 = Number(window.prompt('Informe o primeiro valor'))
nota2 = Number(window.prompt('Informe o segundo valor'))
nota3 = Number(window.prompt('Informe o terceiro valor'))
if((nota1+nota2+nota3) / 3 >= 8){
    c = nota1+nota2+nota3 / 3 
    alert('Parabéns ' + nome +' você foi aprovado!!')
}
if((nota1+nota2+nota3) / 3 < 8){
    c = nota1+nota2+nota3 / 3 
    alert('Parabéns ' + nome +' você foi reprovado :( ')
}
