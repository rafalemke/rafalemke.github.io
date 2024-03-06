## Questão 1
Observe o trecho de código abaixo:

  int INDICE = 13, SOMA = 0, K = 0;

  enquanto K < INDICE faça

  {

  K = K + 1;

  SOMA = SOMA + K;

  }

  imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

### Resposta
91
```
i = 13
soma = 0
k = 0

while k < i:
  k += 1
  soma += k
print(soma)

# RESPOSTA 91
```

## Questão 2

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e
retorne uma mensagem avisando se o número informado pertence ou não a sequência.

### Resposta
```
def pertence_fibonacci(numero):
    n1, n2 = 0, 1
    while n1 <= numero:
        if n1 == numero:
            return True
        n1, n2 = n2, n1 + n2
    return False

# Número a ser verificado na sequência de Fibonacci
numero_informado = int(input("Informe um número para verificar se pertence à sequência de Fibonacci: "))

if pertence_fibonacci(numero_informado):
    print(f"O número {numero_informado} pertence à sequência de Fibonacci.")
else:
    print(f"O número {numero_informado} não pertence à sequência de Fibonacci.")

```

## Questão 3
 Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, [9] <br>
  x = x + 2

b) 2, 4, 8, 16, 32, 64, [128] <br>
 x = x*2

c) 0, 1, 4, 9, 16, 25, 36, [49] <br>
  x = i^2   cada numero representa o quadrado de seu indice

d) 4, 16, 36, 64, [100] <Br>
uma sequencia dos numeros pares ao quadrado, (2^2),(4^2),(6^2)...

e) 1, 1, 2, 3, 5, 8, [13] <br>
sequência de Fibonacci, cada numero na sequencia é a soma de seus dois anteriores

f) 2,10, 12, 16, 17, 18, 19, [200] <br>
sequencia de numeros que começam com a letra D

## Questão 4
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

### Resposta

1. Acender os interruptores 1 e 2 e depois de algum tempo apagar o 2.
2. verificar sala 01.
3. caso a lampada esteja apagada e fria, é o interruptor 3. Caso esteja acesa é o interruptor 1 e caso esteja apagada porém quente, é o interruptor 2.
4. verificar sala 02 e concluir o resto dos interruptores.


## Questão 5
Escreva um programa que inverta os caracteres de um string.

### Resposta

```
def inverter_string(string):
    # Converte a string para uma lista de caracteres
    lista_string = list(string)
    tam_lista = len(lista_string)
    i = 0
    j = tam_lista - 1
    while i < j:
        lista_string[i], lista_string[j] = lista_string[j], lista_string[i]
        i += 1
        j -= 1
    string_invertida = "".join(lista_string)

    return string_invertida

string = inverter_string(input("Digite uma string: "))
print(string)
```

