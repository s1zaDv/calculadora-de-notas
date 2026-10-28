let nome = prompt(`Qual o nome do aluno(a)?`);
let turma = prompt(`Qual a turma dele(a)`);
let materia = prompt(`Qual a disciplina que você deseja calcular as notas?`);
let nota1 = parseFloat(prompt(`Qual a primeria nota dele(a)?`));
let nota2 = parseFloat(prompt(`Qual a segunda nota dele(a)?`));
let nota3 = parseFloat(prompt(`Qual a terceira nota dele(a)?`));
let nota4 = parseFloat(prompt(`Qual a quarta nota dele(a)?`));
let media1 = parseFloat((nota1 + nota2) / 2);
let media2 = parseFloat((nota3 + nota4) / 2);
let mediaGeral = parseFloat((nota1 + nota2 + nota3 + nota4) / 4);
let resultado = mediaGeral >= 5 ? `Aprovado!` : `Reprovado!`;

alert(
  `NOME: ${nome}. \nTURMA: ${turma}. \nNOTA 1° SEMESTRE: ${nota1}. \nNOTA 2° SEMESTRE: ${nota2}. \nNOTA 3° SEMESTRE: ${nota3}. \nNOTA 4° SEMESTRE: ${nota4}. \nMEDIA 1° BIMESTRE: ${media1}. \nMEDIA 2° BIMESTRE: ${media2}. \nMEDIA GERAL: ${mediaGeral}. \n\nRESULTADO: ${resultado}`
);
