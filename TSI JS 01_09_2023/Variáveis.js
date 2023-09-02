/*1) No contexto da programação em JavaScript, quando queremos armazenar
algum valor para uso futuro, usamos o conceito de "variáveis". Uma variável pode
ser declarada usando a palavra-chave "var". Então, como uma tarefa prática,
declare uma variável chamada "favoriteFood" usando a palavra-chave "var" e
atribua a ela a string 'pizza'. */

var favoriteFood = "pizza"

/*2) Continuando a praticar a declaração de variáveis, agora declare uma outra
variável chamada "numOfSlices". Novamente, utilize a palavra-chave "var" e
desta vez atribua a ela o número 8. Isto simboliza, por exemplo, o número de
fatias que uma pizza poderia ter. */

var numOfSlices = 8

/* 3) Agora que você tem duas variáveis declaradas ("favoriteFood" e
"numOfSlices"), vamos imprimi-las para verificar se estão armazenando os
valores corretamente. No JavaScript, usamos o comando "console.log()" para
isso. Primeiro, imprima o valor armazenado em "favoriteFood". Lembre-se,
"console.log()" é uma maneira de visualizar a saída de seu código no console do
seu navegador ou ambiente de desenvolvimento. */

console.log(favoriteFood)

/*4)Agora, da mesma forma que você imprimiu "favoriteFood", use o comando
"console.log()" para imprimir o valor armazenado em "numOfSlices". Isso ajudará
você a verificar se a variável "numOfSlices" está armazenando corretamente o
valor que você atribuiu a ela. */

console.log(numOfSlices)

/*5)Você usou a palavra-chave "var" para declarar variáveis até agora, mas
JavaScript também fornece outras duas palavras-chave para declaração de
variáveis - "let" e "const". Pesquise e explique a diferença entre "var" e "let". A
diferença entre esses dois é crucial para entender o escopo das variáveis em
JavaScript.*/

console.log("Uma variavel declarada com vartem o escopo global no código e uma variavel declarada com let possui um escopo de bloco")

/*6)Vamos praticar a declaração de variáveis com "let" agora. Declare uma variável
chamada "changeMe" usando a palavra-chave "let" e atribua a ela o valor
booleano "true". Os booleanos são um tipo de dados em JavaScript que
representam verdadeiro (true) ou falso (false). */

let changeMe = true

/* 7)Em seguida, na linha após a declaração de "changeMe", reatribua o valor de
"changeMe" para o booleano "false". A palavra-chave "let" permite que você
reatribua valores às variáveis declaradas por ela, o que será útil quando o valor
que uma variável precisa armazenar muda ao longo do tempo. */

 changeMe = false

/*8)Para verificar se "changeMe" foi reatribuído com sucesso, imprima o valor salvo
em "changeMe" no console usando "console.log()". Essa é uma boa prática para
garantir que suas reatribuições de variáveis estão funcionando conforme
esperado. */

console.log(changeMe)

/*9)Agora, vamos explorar a declaração de variáveis com "const". Declare uma
variável constante chamada "entree" e atribua a ela a string 'Enchiladas'. "const"
é uma palavra-chave que declara uma variável cujo valor não pode ser reatribuído
depois. */

const entree = "Enchiladas"

/*10)Para verificar se você salvou o valor de 'Enchiladas' em "entree" corretamente,
imprima o valor de "entree" no console usando "console.log()". */

console.log(entree)

/*11)Vamos testar a imutabilidade de variáveis declaradas com "const". Tente
reatribuir um valor diferente à variável "entree". Isso deve gerar um erro, pois
uma variável "const" não pode ser reatribuída após a sua declaração inicial. Este
é um importante conceito em JavaScript que ajuda a prevenir erros indesejados
de reatribuição. */

// const entree = "senac"

/*12)No JavaScript, temos operadores de atribuição que nos permitem atualizar
rapidamente o valor de uma variável com base em seu valor atual. Por exemplo,
o operador "+=" adiciona o valor à direita ao valor atual da variável. Utilize o
operador "+=" para aumentar o valor armazenado em uma variável "levelUp" por
5. */

let levelUp = 1
console.log(levelUp += 5)

/*13)Da mesma forma, o operador "-=" subtrai o valor à direita do valor atual da
variável. Use o operador "-=" para diminuir o valor armazenado em uma variável
"powerLevel" por 100. */

let powerLevel = 200
console.log(powerLevel -= 100)

/*14)O operador “*=“ multiplica o valor atual da variável pelo valor à direita do
operador. Use o operador “*=“ para multiplicar o valor armazenado em uma
variável "multiplyMe" por 11. */

let multiplyMe = 20
console.log(multiplyMe *= 11)

/*15)O operador "/=" divide o valor atual da variável pelo valor à direita do
operador. Use o operador "/=" para dividir o valor armazenado em uma variável
"quarterMe" por 4. */

let quarterMe = 50
console.log(quarterMe /= 4)

/*  16)O operador "++" é conhecido como operador de incremento. Ele aumenta o
valor da variável em 1. Usando o operador de incremento, aumente o valor de
uma variável "gainedDollar" que inicialmente é declarada valendo 1. */
let gainedDollar = 100
console.log(++gainedDollar)


/*17)De maneira semelhante, o operador "--" é o operador de decremento. Ele
diminui o valor da variável em 1. Usando o operador de decremento, diminua o
valor de uma variável "lostDollar". */

let lostDollar = 100
console.log(--lostDollar)

/*18)No JavaScript, podemos usar "template literals" para incorporar expressões
dentro de strings de texto. Isso é útil quando queremos inserir o valor de uma
variável dentro de uma string. Use um único "template literal" para interpolar
suas variáveis na frase "My name is NAME. My favorite city is CITY." Substitua
"NAME" e "CITY" na string acima interpolando os valores salvos em variáveis
"myName" e "myCity". Use "console.log()" */


const faculdade = "Senac"
let texto = `eu estudo no ${faculdade}`
console.log(texto)

/*19)O operador "typeof" em JavaScript retorna uma string indicando o tipo de
dado de uma variável. Use "console.log()" para imprimir o tipo de uma variável
"newVariable". Isso pode ser útil para debugar seu código se você não tem
certeza do tipo de uma variável em algum momento. */

let newVariable = false
console.log(typeof newVariable)