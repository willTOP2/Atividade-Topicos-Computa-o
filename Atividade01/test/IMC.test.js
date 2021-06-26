const IMCPessoa = require('../lib/IMCPessoa');


const dados = new IMCPessoa()

describe('IMCPessoa', () => {

    test(' teste de valor do imc', () => { 
       
   expect( dados.CalcIMC(69, 1.76)).toBe(22.275309917355372)  
    
    }); 


    test(' teste de classificacao abaixo do peso', () => { 
       
        expect(dados.VerificaIMC(13)).toBe("abaixo do peso")
         
     }); 
     
     test(' teste de classificacao abaixo do peso', () => { 
       
        expect(dados.VerificaIMC(24)).toBe("normal")
         
     }); 

     test(' teste de classificacao abaixo do peso', () => { 
       
        expect(dados.VerificaIMC(29)).toBe("acima do peso")
         
     }); 

     test(' teste de classificacao abaixo do peso', () => { 
       
        expect(dados.VerificaIMC(34)).toBe("obeso")
         
     }); 
     
     test('idade invalida', () => { 
       
        expect(() => {
            dados.validate(0,0)
        }).toThrow('peso e altura invalido');
         
     }); 
    
     


})
