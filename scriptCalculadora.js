function insert(num)
{
        const numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('conversao').innerHTML = "";
}
function back()
{
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() //Botão de calculo "="
{
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
    }
    if(resultado)
    {
        document.getElementById('conversao').innerHTML = eval(resultado).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    }
    else
    {
        document.getElementById('conversao').innerHTML = "0";
    }
}
/*Funções dos botões de conversão das moedas*/ 
function converterValorUSD()
{
    const valor = document.getElementById('conversao').innerHTML = resultado.innerHTML / 5.42
    document.getElementById('conversao').innerHTML = valor.toLocaleString('pt-br',{style: 'currency', currency: 'USD'});
}
function converterValorAUD()
{
    const valor = document.getElementById('conversao').innerHTML = resultado.innerHTML / 4.25
    document.getElementById('conversao').innerHTML = valor.toLocaleString('pt-br',{style: 'currency', currency: 'AUD'}); 
}
function converterValorEUR()
{
    const valor = document.getElementById('conversao').innerHTML = resultado.innerHTML / 6.29
    document.getElementById('conversao').innerHTML = valor.toLocaleString('pt-br',{style: 'currency', currency: 'EUR'}); 
}
function converterValorGBP()
{
    const valor = document.getElementById('conversao').innerHTML = resultado.innerHTML / 7.28
    document.getElementById('conversao').innerHTML = valor.toLocaleString('pt-br',{style: 'currency', currency: 'GBP'}); 
}

// menu
// Calculadorazinha dentro da imagem, para também servir de atalho para a página de calculo
// Instruções de uso da calculadora