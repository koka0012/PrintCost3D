# Print Cost 3D
Este é o Print Cost 3D, o aplicativo para realizar calculos de impressões 3D com o máximo de precisão possivel, nele você poderá calcular os custos com filamentos, energia, acabamento, retorno de investimento, entre outros.

## Imagens do aplicativo

![](https://github.com/salomaoluiz/PrintCost3D/blob/master/src/assets/Tela_Inicial.jpeg#L5)
![](https://github.com/salomaoluiz/PrintCost3D/blob/master/src/assets/Tela_Inicial_2.jpeg#L5)
![](https://github.com/salomaoluiz/PrintCost3D/blob/master/src/assets/Tela_Inicial_2.jpeg#L5)
![](https://github.com/salomaoluiz/PrintCost3D/blob/master/src/assets/Configurações_de_Filamento.jpeg#L7)
![](https://github.com/salomaoluiz/PrintCost3D/blob/master/src/assets/Configurações_da_Impressora.jpeg#L8)



## Funções da versão v1.0
- Calcula custos de Impressora 3D

## Implementações e Correções da Versão v1.1
- Adicionado idioma Inglês
- Corrigido problema ao deletar a linha quando só se tem uma.
- Adicionado a necessidade de preencher alguns campos das configurações.
- Corrigido bug que não apagava o Custo Administrativo da descrição.

# Instalação
Para instalar este repositório e realizar alterações nele utilize:
______________
`yarn install` (Recomendado)
__________
ou
_____________
`npm -save -install`
___

os pacotes que serão instalados e que são utilizados durante todo o projeto é:

- i18next: "^13.1.0"
- i18next-react-native-language-detector: "^1.0.2"
- react: "16.6.0-alpha.8af6728"
- react-i18next: "^9.0.2"
- react-native: "0.57.4"
- react-native-locale-detector: "^1.0.1"
- react-native-vector-icons: "^6.0.2"
- react-navigation: "^2.18.2"
- react-redux: "^5.1.0"
- redux: "^4.0.1"
- redux-thunk: "^2.3.0"

## APK
Caso não deseje somente o arquivo APK do aplicativo faça o seu donwload no link: [3D Print Cost](https://github.com/salomaoluiz/PrintCost3D/blob/master/release/v1.1.apk).

___
# Cálculos dos Custos
Será apresentado cada tipo de custo, suas variáveis e a equação utilizada para obter o resultado final. Eles podem ser encontrados no seguinte link [Fórmulas dos Custos](https://github.com/salomaoluiz/PrintCost3D/blob/master/src/config/store/actions/calculator/calculatorActions.js).
___________
## Custo com Filamento
### Variáveis:

![](https://trello-attachments.s3.amazonaws.com/5c2f4f7c3550955b5271e23c/169x186/dda0c9d3e47fe504590248b34f7a8da6/image.png)

### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/ca7394edfcd0f64e2738ed27ef48637c/image.png)

A densidade é obtida utilizando o tipo de filamento:

- d = 1.04 (ABS)
- d = 1.24 (PLA)
- d = 1.25 (PETG)
_________
## Custo com Energia
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/73a8ce21cca7861fbccd4d7d63f31fb0/image.png)

### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/d509027cdaa8a3cca51133ff7c58c573/image.png)
________________
## Custo com Reparos
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/31674bce9f062ca94ce0178b12dd936c/image.png)
### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/0d5ddb518a591bd9e3fe7320862f92cf/image.png)

## Custo com Falhas
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/ad1932bc8c7c859debd3eb0a9c24fdfb/image.png)
### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/04441d41ea413780c4608c7bb32b12e0/image.png)
_______________
## Custo com Acabamentos
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/f1396a494c4ca23d305af43728cb48c3/image.png)
### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/9bace7c7545672b1bedb00b7ed4ea154/image.png)
_______________
## Custo de Depreciação
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/2e6d77e64766f5eceaa7dd37554d9263/image.png)
### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/aaa327efff7dd345f5cb78138192aa50/image.png)
___________________
## Custo com Administração
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/1a0c69dbecd605f80974dc2c06e64fb9/image.png)
### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/56db374537bf9a66eb708693af5c57d4/image.png)
_______________
## Retorno de Investimento
### Variaveis
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/53a6bd26c74431cc7065ec17454fa5fd/image.png)
### Equações
![](https://trello-attachments.s3.amazonaws.com/5b8819b32ef8b515fed48931/5c2f4f7c3550955b5271e23c/777977b7fc560000c0b3db8789d0cc48/image.png)