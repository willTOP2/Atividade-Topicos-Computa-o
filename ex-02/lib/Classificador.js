class Classificador {

    validate(idade) {
        

        if (idade <= 0 || idade > 110)
            throw 'idade invalida';
    }


    VerificaIdade(idade){
        this.validate(idade);

      if(idade < 11) 
        var tipo = "" 
   
      if(idade <= 11) tipo = "crianca" 
      else 
      if(idade <= 18) tipo= "adolescente"
      else 
      if(idade <= 59) tipo = "adulto"
      else 
      tipo="idoso"
       

return tipo

    }


} 

module.exports = Classificador