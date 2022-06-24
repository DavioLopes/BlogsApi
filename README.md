<h1>Projeto Blogs API. 🖥️</h1>

<h1> Contexto. 📜</h1>

Neste projeto, foi desenvolvido um back-end usando `ORM` com o pacote `sequelize` do npm, onde foi possível:
* Criar e associar tabelas usando models do sequelize
* Construir endpoints para consumir os models que criar
* Fazer um `CRUD` com o `ORM`

<h1>Técnologias usadas. 💾</h1>

* Projeto desenvolvido em NodeJs, utilizando a biblioteca Express para criação da API RESTful.
* Sequelize para criação e associação de tabelas MySQL.
* Swagger para demostração do projeto via navegador.
* Docker para hospedagem do bando de dados.

<h1>Habilidades desenvolvidas. 💡</h1>

Neste projeto, consegui desenvolver as seguintes habilidades:

* Entender o funcionamento de um ORM.
* Modelar um banco de dados e criar associações através de um ORM.
* Fazer inserções, consultas, atualizações e remoções através do ORM.
* Criar regras de negócio para controle dos dados do banco de dados.

<h1> Executando aplicação ⌨️</h1>

1. Clone o repositório:
* Usando linha de comando execute o comando: `git clone https://github.com/DavioLopes/BlogsApi.git`

2. Para instalar as dependencias:
* execute o comando: `npm install`

3. Altere o arquivo .env-example para .env
* Altere os dados de usuário conforme os dados do MySql instalado em sua máquina.

4. Inicialize o servidor MySQL.
* Usando o Docker

    * Inicie um container com a imagem do MySQL:
    * `docker container run --name blogsApi -e MYSQL_ROOT_PASSWORD=suasenha -d -p 3306:3306 mysql`
    * `docker exec -it blogsApi bash`
    * `Altere o arquivo .env para os valores da sua maquina`
    * `MYSQL_USER=root`
    * `MYSQL_PASSWORD=suasenha`
    
5. Inicialize a API com o comando: `npm start`

6. Abra o navegador de sua preferencia e coloque a URL: `http://localhost:3001/api-docs`

