const Classificador = require('../lib/Classificador'); 

const dados =  new Classificador() 

describe('Classificador', () => { 

test('idade criança', () => { 
       
   expect(dados.VerificaIdade(10)).toBe("crianca") 
    
}); 

test('idade adolescente', () => { 
       
    expect(dados.VerificaIdade(17)).toBe("adolescente") 
     
 }); 

 test('idade adulto', () => { 
       
    expect(dados.VerificaIdade(26)).toBe("adulto") 
     
 }); 

 test('idade idoso', () => { 
       
    expect(dados.VerificaIdade(65)).toBe("idoso") 
     
 }); 

 test('idade invalida', () => { 
       
    expect(() => {
        dados.validate(0)
    }).toThrow('idade invalida');
     
 }); 


     
});


