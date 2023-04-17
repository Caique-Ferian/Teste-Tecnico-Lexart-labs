# Teste-Tecnico-Lexart-labs

# Contexto

Projeto criado para teste Tecnico da LEXART LABS feito com TypeScript, Prisma, NestJS, React. Neste projeto utilizando os princípios SOLID da Programação Orientada a Objeto, e microsserviços, foi-se feito uma API para um site Front-end feito em React com Typescript, onde o usuário tem acesso a uma página simples de busca de alguns produtos em dois sites(Mercado Livre e Buscapé), para procurar no site do Mercado Livre é feito no FRONT-END uma requisição para API do MELI e armazenado os produtos no Banco de dados SQLITE, já para o site do Buscapé, pelo fato de api estar com erro e o SCRAP ser bloqueado, foi-se feito uma requisição back-end para uma API de Scrap específica (através do request-promise) que retornava conteúdo HTML e tal conteúdo era lido e separado com a utilização do cheerio usando seletores de classe para adquirir as informações necessárias.Assim após o retorno das API's o usuário consegue visualizar a categoria do produto desejada, consegue filtrar por marca por exemplo e se desejar ir ao site do produto, basta clicar no botão de "Ir a Web". O Back-end foi feito utilizando padrão microsserviços com a API separada em Infra(HTTP e BD) e aplicação em si ambos sendo servidos com interfaces (Injeção de dependências), desta forma é facilmente manutenível, caso for desejado alterar o banco de Dados, ou adicionar funções novas, basta acessar o diretório correto e realizar a alteração. O Front-end da mesma forma do back-end, segue um padrão muito popular e de fácil manutenção (Atomic design), permitindo facilmente a reutilização dos Componentes e fácil manutenção ou adição de novos conteúdos para a página.

## Técnologias usadas

Front-end:

> Desenvolvido usando: React, CSS3, HTML5, TypeScript, Bootstrap, Craco, Axios, Atomic Design.

Back-end:

> Desenvolvido usando: NodeJS, NestJS, SQLITE, Prisma, TypeScript, POO, SOLID, Jest, Microsserviços.

## Executando aplicação

- Para rodar a aplicação:

  ```bash
  cd Teste-Tecnico-Lexart-labs/ && docker-compose up -d --build
  ```

Api rodando em http://localhost:3001/ e front rodando em http://localhost:3000/
