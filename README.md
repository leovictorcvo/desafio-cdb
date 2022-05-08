<h1 align="center">
  [B]³ + Atos - Projeto de avaliação para desenvolvedor
</h1>

## Sobre o desafio
<p>
Esse desafio visa avaliar a capacidade de análise do desenvolvedor e a habilidade para implementação de soluções fundamentadas pelos princípios do SOLID, Testes unitários e performance.
</p>
<p>
O frontend foi criado utilizando o Angular. Ele consiste em uma tela web onde possamos informar um valor monetário positivo, e um prazo em meses maior que 1(um) para resgate da aplicação. Após solicitar o cálculo do investimento, a tela deve apresentar o resultado bruto e o resultado líquido do investimento. 
</p>
<p>
O backend, criado com .Net Core 3.1/C#, é uma API que recebe os dados informados na tela desenvolvida e deve retornar o resultado bruto e líquido do investimento.<br>
</p>
<p>
Para o cálculo do CDB, deve-se utilizar a fórmula VF = VI x [1 + (CDI x TB)] onde:<br>
i. VF é o valor final;<br>
ii. VI é o valor inicial;<br>
iii. CDI é o valor dessa taxa no último mês - considerado a taxa de 0,9%;<br>
iv. TB é quanto o banco paga sobre o CDI - considerado a taxa de 108%;<br>
</p>
<p>
Para cálculo do imposto utilizar a seguinte tabela:<br>
i. Até 06 meses: 22,5%<br>
ii. Até 12 meses: 20%<br>
iii. Até 24 meses 17,5%<br>
iv. Acima de 24 meses 15%<br>
</p>

## Clonar repositório
```git clone https://github.com/leovictorcvo/desafio-cdb.git```

## Execução
Após clonar o repositório, os projetos poderão ser inicializados da seguinte forma utilizando o terminal de comando:
### Backend
1. Com base na pasta raiz do projeto, alterar para o diretório do Desafio.API<br>
 ```cd .\backend\Desafio.API\```
2. iniciar a api utilizando o comando dotnet<br>
```dotnet run```<br><br>
Após esse comando a API estará recebendo requisições através do endpoint **https://localhost:5001/cdb** ou **http://localhost:5000/cdb**

### Frontend
1. Com base na pasta raiz do projeto, alterar para o diretório do projeto do frontend<br>
 ```cd .\frontend\desafio```
2. iniciar utilizando o comando abaixo<br>
```ng serve -o```<br><br>
Após esse comando a janela do navegador deve abrir e apresentar a tela do projeto. Caso não abra, basta abrir um browser e navegar para a página **http://localhost:4200/**
