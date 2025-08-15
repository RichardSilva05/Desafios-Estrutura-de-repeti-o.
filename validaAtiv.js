function procDesafio3(){
   i=0;
   salarioGp=0;
   contGrupoSalario=0;
   idadeMedia=0;
   contGrupoIdade=0;
   salarioFeminino=0;
   contSalarioFeminino=0;
   salarioMasculino=0;
   contSalarioMasculino=0;
   fim="Finalizar";

   while(true){
    let idade = parseFloat(prompt("Informe o sua idade :"));
    contGrupoIdade = idade + contGrupoIdade;
    idadeMedia = idade + idadeMedia;
    let sexo = parseFloat(prompt("Informe seu genero ( 1-Masculino & 2-Feminino ) :"));
    let salario = parseFloat(prompt("Informe sua renda : R$"));
    contGrupoSalario = salario + contGrupoSalario;
    contSalarioFeminino = salario + contSalarioFeminino;
    contSalarioMasculino = salario + contSalarioMasculino;
    salarioGp = salario + salarioGp;
    salarioFeminino = salario + salarioFeminino;
   salarioMasculino = salario + salarioFeminino;
    let fim = parseInt(prompt("Deseja encerrar o programa ? (Finalizar)"));
          while(sexo == "Opção invalida !")
         {
         if(sexo == 1){
            console.log("Masculino")
         }
         else if(sexo == 2){
            console.log("Feminino")
         }
         else{
            alert("Genero invalido digite novamente as informações !")
         }
         }
         if(fim == "Finalizar"){
            break;
         }
      }
         console.log("Média do salario do Grupo : R$"+salarioGp / contGrupoSalario );
         console.log("Média de idade do Grupo : R$"+idadeMedia / contGrupoIdade);
         console.log("Média do salario Feminino : R$"+salarioGp / salarioFeminino);
         console.log("Média do salario Masculino : R$"+salarioGp / salarioMasculino);
      return false;
   }
