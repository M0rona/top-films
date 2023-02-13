# 🎬 Top Films em ReactJS



https://user-images.githubusercontent.com/91230559/218550042-3d73fd52-9df4-4df4-8b5e-c778a59baf60.mp4


## 📝 Descrição
Este é meu primeiro projeto React que consome uma API. Desenvolvi este projeto para aprimorar minhas habilidades em desenvolvimento front-end, incluindo o uso de Styled Componentes e Rotas. Espero que a aplicação possa ser útil para quem deseja encontrar informações relevantes sobre os filmes mais populares atualmente.<br/>
API USADA: https://www.themoviedb.org/

## 🔗 Acesse o Projeto
Clique [aqui](https://top-films-eta.vercel.app/) para acessar o projeto.

## 💻 Uso
A aplicação exibe informações sobre os filmes mais assistidos no momento, além de permitir a busca por filmes específicos. Ela também apresenta detalhes dos filmes, como sinopse e Data de Lançamento.

## 📋 Índice
- [Instalação](#-instalação)
- [Execução](#-execução)
- [Ferramentas](#%EF%B8%8F-ferramentas)
- [Conceitos Aplicados](#-conceitos-aplicados)
- [Explicação Detalhada do Código](#-explicação-detalhada-do-código)

## 🔧 Instalação
1. Clone este repositório com `git clone` ou baixe o código-fonte.
2. Entre na pasta do projeto com `cd lista-de-presenca`.
3. Instale as dependências com `npm install` ou `yarn`.

## 🚀 Execução
1. Inicie o servidor de desenvolvimento com `npm start` ou `yarn start`.
2. Abra seu navegador e acesse `http://localhost:3000`.

## 🛠️ Ferramentas
- React
- React Router
- Styled Components
- JavaScript
- API do TheMovieDB

## 🧩 Conceitos Aplicados
- Crianção de Projeto
- Execução de Projeto
- Estrutura React
- JSX
- Estrutura Pastas e Arquivos
- Estilização Página CSS
- Componentes
- Propriedades
- Estados
- Hooks
- useEffect
- useState
- Consumo de API
- Styled Component
- React Router


## 🔎 Explicação Detalhada do Código

O componente Home é uma função que retorna elementos JSX. Dentro desta função, o primeiro hook utilizado é useState, que define o estado movies como uma lista vazia de filmes.

Em seguida, a função useParams é usada para obter o parâmetro page da URL. Se este parâmetro não estiver presente, é definido o valor padrão de 1.

Depois, a função useEffect é usada para buscar a lista de filmes populares usando a API do TheMoviedb. A URL para esta busca é definida usando a chave da API e o parâmetro page. Quando a resposta é recebida, a lista de filmes é atualizada no estado movies usando a função setMovies.

Outra função useEffect é usada para buscar filmes de acordo com a busca do usuário. Se o estado busca tiver algum valor, a API do TheMoviedb é consultada novamente com uma nova URL que contém o termo de pesquisa e a chave da API. A lista de filmes encontrados é atualizada no estado movies usando setMovies.

Dentro do retorno da função, é criado um elemento Page que contém um cabeçalho com o título e uma caixa de pesquisa. A lista de filmes é renderizada em um elemento MoovieList, usando o método map para criar um componente CardFilm para cada filme na lista. O CardFilm recebe o id, o título e a URL da imagem do cartaz do filme como propriedades.

O Componente CardFilm leva até a página details, passando através da rota o ID do filme, a página consulta o ID do filme da rota, faz a requisição na API e envia os dados para o Componente CardDetails que mostra as informações na tela.

Por fim, um componente Pagination é renderizado na página, passando o valor do parâmetro page como propriedade. O componente Pagination é responsável por exibir os links para outras páginas de filmes populares.

No geral, a página Home é um exemplo de como usar componentes React, estados e efeitos para criar uma interface de usuário dinâmica que consome uma API externa e apresenta informações úteis ao usuário.
