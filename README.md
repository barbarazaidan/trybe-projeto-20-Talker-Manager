# Projeto Talker Manager
## Este repositório contém o desenvolvimento do meu 20º projeto na Trybe

Avançando nos conhecimento de Backend, comecei a ter contato com a criação de APIs, algo que achei extremamente interessante e desafiador. Neste projeto Talker Manager, o objetivo foi criar a API de um CRUD de palestrantes e desenvolver endpoints. Neste momento, tinha pouco conhecimento no que se refere a fazer a conexão da API com o BD, então usei o módulo fs para ler e escrever em um arquivo dentro do próprio projeto. Apenas o último requisito trabalhou a interação com o MySQL. 

## Detalhes do projeto

Confira os requisitos exigidos pela Trybe (texto extraído dos readme oficial da Trybe):

**1. Crie o endpoint GET /talker**

<details><summary>Detalhes</summary>
<p>

> A requisição deve retornar o status 200 e um array com todas as pessoas palestrantes cadastradas.

> Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o status 200 e um array vazio.

</p>
</details>

---

**2. Crie o endpoint GET /talker/:id**

<details><summary>Detalhes</summary>
<p>

> A requisição deve retornar o status 200 e uma pessoa palestrante com base no id da rota. Por exemplo, ao fazer uma requisição /talker/1, a resposta deve ser:

 ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```

> Caso não seja encontrada uma pessoa palestrante com base no id da rota, a requisição deve retornar o status 404 com o seguinte corpo:

  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```

</p>
</details>

---

**3. Crie o endpoint POST `/login**

<details><summary>Detalhes</summary>
<p>

> O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

> O corpo da requisição deverá ter seguinte formato:

```json
  {
    "email": "email@email.com",
    "password": "123456"
  }
  ```

</p>
</details>

---

**4. Adicione as validações para o endpoint /login**
<details><summary>Detalhes</summary>
<p>

> Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de status 400 com a respectiva mensagem de erro ao invés do token.

> As regras de validação são:
* o campo email é obrigatório;
* o campo email deve ter um email válido;
* o campo password é obrigatório;
* o campo password deve ter pelo menos 6 caracteres.

</p>
</details>

---

**5. Crie o endpoint POST /talker**

---

**6. Crie o endpoint PUT /talker/:id**

---

**7. Crie o endpoint DELETE /talker/:id**

---

**8. Crie o endpoint GET /talker/search e o parâmetro de consulta q=searchTerm**

---

REQUISITO BÔNUS

**9. Crie no endpoint GET /talker/search o parâmetro de consulta rate=rateNumber**

---

**10. Crie no endpoint GET /talker/search o parâmetro de consulta date=watchedDate**

---

**11. Crie o endpoint PATCH /talker/rate/:id**

---

**12. Crie o endpoint GET /talker/db**

Neste requisito vamos criar um endpoint similar ao do requisito 1, mas usando as informações de um banco de dados MySQL para retornar a lista de pessoas palestrantes!

<details><summary>Detalhes</summary>
<p>

> Na aplicação, crie uma conexão com o banco e a utilize para recuperar a lista de palestrantes da DB.

> Crie o endpoint GET /talker/db retornando a lista recuperada da DB.

> A requisição deve retornar o status 200 e um array com todas as pessoas palestrantes cadastradas. Exemplo:

 ```json
 [
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
  ```

> Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o status 200 e um array vazio.

> Será testado que caso o banco de dados sofra alterações, a requisição deve retornar o status 200 e um array com os dados atualizados do banco de dados

</p>
</details>

---

## Sobre o curso da Trybe
O programa total de estudo conta com mais de 1.500 horas de aulas presenciais e online,divididas ao longo de 12 meses. O conteúdo aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.
