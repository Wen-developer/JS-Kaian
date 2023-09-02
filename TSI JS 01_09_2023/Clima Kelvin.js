/*1-A previsão do tempo para hoje é de 293 Kelvin. Para começar, crie uma variável
chamada "kelvin" e atribua a ela o valor 293. O valor armazenado na variável
"kelvin" permanecerá constante. Escolha o tipo de variável que é mais adequado
para manter esse valor constante. */

var Kelvin = 293
console.log(Kelvin)

/*2-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */

console.log(" uma variavel foi cirada usando o let e foi adicionado o valor 293 a ela")

/*3-Celsius é similar a Kelvin — a única diferença é que Celsius é 273 graus menor
que Kelvin. Vamos converter Kelvin para Celsius subtraindo 273 da variável
"kelvin". Armazene o resultado em outra variável, chamada "celsius". */

var Celsius = Kelvin - 273
console.log(celsius)

/*4-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */

console.log("criou uma variavel com nome de celsius e diminuiu 273 da variavel kelvin")

/*5-Use a seguinte fórmula para calcular Fahrenheit, e então armazene o resultado
em uma variável chamada "fahrenheit". A fórmula é: Fahrenheit = Celsius * (9/5)
+ 32. No próximo passo, iremos arredondar o número salvo na variável
"fahrenheit". Escolha o tipo de variável que permite que você altere seu valor. */

var Fahrenheit = Celsius * (9/5) + 32
console.log(Fahrenheit)

/*6-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

console.log("criou a variavel fahrenheit e calculou usando sua formula e o valor de celsius")

/*7-Quando você converte de Celsius para Fahrenheit, geralmente obtém um
número decimal. Use o método .floor() do objeto Math para arredondar para
baixo a temperatura em Fahrenheit. Salve o resultado na variável "fahrenheit". */

 Fahrenheit = Math.floor(Fahrenheit)
 console.log(Fahrenheit)

/*8-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */

console.log("foi utilizada a função math.floor para arredondar para o numero inteiro mais baixo")

/*9-Use console.log e interpolação de string para registrar no console a
temperatura em Fahrenheit da seguinte forma: "A temperatura é TEMPERATURA
graus Fahrenheit". Use a interpolação de string para substituir "TEMPERATURA"
pelo valor armazenado na variável "fahrenheit". */

var Temperatura = Fahrenheit
console.log(`A temperatura é ${Temperatura} fahrenheit`)

/*11-Ao usar variáveis, seu programa deve funcionar para qualquer temperatura
em Kelvin — basta alterar o valor de "kelvin" e executar o programa novamente.
Qual seria a temperatura correspondente a 0 Kelvin em Fahrenheit? */

let kelvin_Fahrenheit = (Kelvin) => (Kelvin - 273.15) * 9/5 + 32;

let kelvin = 0;
let fahrenheit = kelvin_Fahrenheit(Kelvin);

console.log(`A temperatura de ${Kelvin} Kelvin é igual a ${Fahrenheit} Fahrenheit.`);
 

/*12-Ótimo trabalho! Agora Kelvin pode publicar suas previsões tanto em Celsius
quanto em Fahrenheit. Se você quiser praticar um pouco mais, tente fazer o
seguinte: Converta Celsius para a escala Newton usando a equação abaixo:
Newton = Celsius * (33/100). Arredonde a temperatura em Newton para baixo
usando o método .floor(). Use console.log e interpolação de string para registrar
no console a temperatura em Newton. */

var Newton = Celsius * (33/100)
Newton = Math.floor(Newton)
console.log(`A temperatura em newton é ${Newton}`)

