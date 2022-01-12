/**
 * Fazer uma função que receba um vetor e um valor numérico.
 * A função deve retornar o próprio vetor informado.
 * Em caso de erro, a função deve retornar um erro, a seguir:
 * 
 * se os parâmetros não forem informados, lançar um erro do tipo ReferenceError
 * se o vetor não for do tipo 'object', lançar um erro do tipo TypeError
 * se o valor numérico não for do tipo 'Number', lançar um erro do tipo TypeError
 * se o tamanho do vetor for diferente do valor numérico enviado, lançar um erro do tipo RangeError
 * 
 * Usar a estrutura try..catch
 * Usar o operador instanceof para filtrar as chamadas de erro 
 */

function verificaDados(vvetor, vtamanho){
    try {
        if(!vvetor && !vtamanho) throw new ReferenceError("Argumentos vazios.");
        if(typeof vvetor !== 'object') throw new TypeError("Vetor não é um objeto.");
        if(typeof vtamanho !== 'number') throw new TypeError("Valor numérico não é um número.");
        if(vvetor.length != vtamanho) throw new RangeError("Tamanho do vetor e valor informado não correspondem.");
        
        return vvetor;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log(e.message);
        }
    }
}


let arr = [1,2,3];
let arr2 = new Array(1,2,3)
let n1 = 3;

console.log(verificaDados(null,null));

console.log(verificaDados(arr.toString(),2));

console.log(verificaDados(arr,n1.toString()));

console.log(verificaDados(arr2,2));

console.log(verificaDados(arr2,n1));