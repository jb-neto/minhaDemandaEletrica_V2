# Minha Demanda Elétrica
Aplicação Mobile, ainda em desenvolvimento, utilizando o framework React Native (Primeira aplicação)

O Aplicativo tem como objetivo calcular e dimensionar a demanda de energia elétrica para edificações individuais segundo a norma ND 5.1 da CEMIG - Minas Gerais.
Para isso, o usuário deve informar na aplicação os aparelhos eletrodomésticos que pretende ter em sua edificação e, a partir disso,
a aplicação retornará o cálculo da demanda elétrica, da carga instalada e também informações sobre o padrão de entrada de energia (bitolas, fios, disjuntores, etc)

A construção do código da aplicação envolveu a consulta em diversas tabelas de dimensioanamento presentes na norma ND 5.1 da CEMIG, o que aumentou consideravelmente a quantidade de condicionais.

Pretende-se ainda:
- implementar a geração de um relatório a ser enviado diretamente para o email.
- Permitir ao usuário o cadastro de novos eletrodomésticos.
- Implementação para o cálculo da demanda para edificações coletivas(prédios), utilizando a norma ND 5.2.
- Expensão para o cálculo da demanda em normas de outros estados.

## Telas

| Home | Seleção Aparelhos | Resultados |
|------|:-------:|----|
|<img src="/src/assets/screensshot/Screenshot_1.png" width="300">|<img src="/src/assets/screensshot/Screenshot_2.png" width="300">|<img src="/src/assets/screensshot/Screenshot_3.png" width="300">|

| Resumo da Demanda | Lista de Materiais |
|------|:-------:|
|<img src="/src/assets/screensshot/Screenshot_4.png" width="300">|<img src="/src/assets/screensshot/Screenshot_5.png" width="300">|

### Dependências

Foi utilizado na criação deste aplicativo
- React Native
- React Navigation
- React Native Gesture Handler
