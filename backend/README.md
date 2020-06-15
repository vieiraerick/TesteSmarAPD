# Teste SmarAPD
### Backend do sistema de reserva de salas de reunião
Por Erick Vieira

Este repositório é dedicado ao backend do sistema de reserva de salas de reunião proposto como teste da empresa SmarAPD.
O backend é um API REST, responsável por armazenar usuários e salas de reunião, bem como agendar reuniões e controlar para que duas reuniões não sejam marcadas para o mesmo horário na mesma sala. Uma rota é dedicada exclusivamente para a autenticação do usuário.
Para armazenar os dados de uma forma mais performática, o banco de dados usado foi o SQlite.

## Índice

<!--ts-->

* [Como utilizar?](#como-utilizar?)
* [Sobre as rotas](#sobre-as-rotas)
* [Construído com](#construído-com)
* [Versionamento](#versioning)
* [Autor](#autor)
* [Licença](#licença)

<!--te-->


### Como utilizar?

Após a clonagem do repositório para a máquina onde será executada a API, deverá ser executado na pasta raiz (/backend) o comando a partir do terminal: **dotnet run**.
Deve-se prestar atenção nas dependencias da construção desse projeto, e se necessário instalá-las para o funcionamento correto da API.
**.Net Core SDK** foi usado na versão 3.1
para todas as dependencias e suas versões, você pode consultar esse [arquivo](./obj/project.assets.json).

É importante destacar que se a API for testada em um *REST client*, como *Insommia* ou *Postman*, a opção de validação de Certificados SSL deverá ser desmarcada.

## Sobre as rotas

A API possui quatro rotas:
* ### Auth
  Possui 1 Verbo HTTP, somente o **POST**. Realiza a autenticação do usuário, que deverá ser enviado no formato *JSON* contendo *"email"* e *"password"*.
* ### Users
  Possui 2 Verbos HTTP, **GET** e **POST**. o *Get* lista os usuários, e o *POST* cadastra novos usuários, que deverão ser enviados no formato JSON contendo *"email"* e *"password"*.
* ### Rooms
  Possui 2 Verbos HTTP, **GET** e **POST**. o *Get* lista as salas de reunião, e o *POST* cadastra novas salas, que deverão ser enviadas no formato JSON contendo apenas *"name"*.
* ### Users
  Possui 2 Verbos HTTP, **GET** e **POST**. o *Get* lista as reuniões, e o *POST* cadastra novas reuniões, que deverão ser enviadas no formato JSON contendo *"title"*, *"room"*, *"startTime"* e *"endTime"*.

### Construído com

* [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/)
* [.Net Core](https://docs.microsoft.com/pt-br/dotnet/core/)
* [Entity Framework](https://docs.microsoft.com/pt-br/dotnet/framework/data/adonet/ef/overview)
* [SQLite](https://www.sqlite.org/index.html)
* [JWT Authentication](https://jwt.io/introduction/)

### Versionamento
Eu usei o [Git](https://git-scm.com/) para genrenciar o versionamento.

### Autor

* **Erick Vieira** [vieiraerick](https://github.com/vieiraerick)

### Licença

Este projeto está sob a licença GNU V3, veja [License.md](LICENSE) para mais detalhes.
