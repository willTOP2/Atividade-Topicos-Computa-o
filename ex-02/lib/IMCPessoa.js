class IMCPessoa{ 


       validate(peso, altura){

        if (peso <= 0 || altura <= 0)
        throw 'peso e altura invalido';


       }


     
        CalcIMC(peso, altura){ 
            
            this.validate(peso,altura) 

            return  peso / (altura * altura) 
        
            
        }
     
        VerificaIMC(imc){   
            
            var classificacao = ""
         
            
            if(imc < 18.5)
            classificacao = "abaixo do peso";
            else if(imc < 25)
            classificacao = "normal";
            else if(imc < 30)
            classificacao = "acima do peso";
            else
            classificacao = "obeso";

        return classificacao
        }
     
    
     }


module.exports = IMCPessoa


