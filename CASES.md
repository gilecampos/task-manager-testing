Casos de Uso para Inserção de Tarefa
1. Inserir Nova Tarefa Completa
Caso de Uso: Inserir Nova Tarefa

Ator Principal: Usuário

Descrição: O usuário insere uma nova tarefa com título, descrição, data de criação, data limite e status.

Pré-condições:

O usuário está autenticado na aplicação.
O usuário está na página da lista de tarefas.
Fluxo Principal:

O usuário abre a aplicação de lista de tarefas.
O usuário clica no botão "Adicionar Tarefa".
A aplicação exibe um formulário para inserção de tarefa.
O usuário insere o título da tarefa no campo "Título".
O usuário insere a descrição da tarefa no campo "Descrição".
A aplicação preenche automaticamente o campo "Data de Criação" com a data e hora atuais.
O usuário seleciona a data limite para realizar a tarefa no campo "Data Limite".
O usuário seleciona o status da tarefa (por exemplo, "Pendente", "Em Andamento", "Concluída") no campo "Status".
O usuário clica no botão "Salvar".
A aplicação valida os dados inseridos:
Se todos os campos obrigatórios estiverem preenchidos corretamente, a aplicação salva a nova tarefa na lista.
Se houver algum campo obrigatório vazio ou com dados inválidos, a aplicação exibe uma mensagem de erro indicando o problema.
A aplicação exibe a lista atualizada de tarefas, incluindo a nova tarefa.
Fluxo Alternativo:

Campo Obrigatório Vazio:
10a. Se o usuário não preencher o título da tarefa e clicar em "Salvar", a aplicação exibe uma mensagem de erro indicando que o título é obrigatório.
10b. O usuário preenche o título e clica novamente em "Salvar".
TDD: Test-Driven Development
Para aplicar TDD, criamos testes antes de desenvolver a funcionalidade. Aqui estão os testes para a inserção de tarefa:

Teste 1: Inserir Tarefa com Todos os Campos Preenchidos

Dado que o usuário está na página de inserção de tarefas
Quando o usuário preenche o título, descrição, data limite e status, e clica em "Salvar"
Então a tarefa deve ser salva com sucesso e exibida na lista de tarefas
Teste 2: Inserir Tarefa Sem Título

Dado que o usuário está na página de inserção de tarefas
Quando o usuário deixa o campo título vazio e clica em "Salvar"
Então a aplicação deve exibir uma mensagem de erro indicando que o título é obrigatório
Teste 3: Inserir Tarefa com Data Limite Passada

Dado que o usuário está na página de inserção de tarefas
Quando o usuário seleciona uma data limite anterior à data de criação e clica em "Salvar"
Então a aplicação deve exibir uma mensagem de erro indicando que a data limite deve ser no futuro



BDD: Behavior-Driven Development
Para BDD, usamos uma linguagem natural para descrever o comportamento esperado. Aqui está um cenário usando Gherkin:

Cenário: Inserir Nova Tarefa com Sucesso

Funcionalidade: Inserir nova tarefa
  Como um usuário
  Eu quero inserir uma nova tarefa na minha lista
  Para que eu possa gerenciar minhas atividades

Cenário: Inserir nova tarefa com todos os campos preenchidos
  Dado que estou na página de inserção de tarefas
  Quando eu preencho o campo "Título" com "Estudar para o exame"
  E eu preencho o campo "Descrição" com "Revisar capítulos 1 a 5"
  E a aplicação preenche automaticamente "Data de Criação" com a data e hora atuais
  E eu seleciono "Data Limite" como "2024-06-01"
  E eu seleciono "Status" como "Pendente"
  E eu clico no botão "Salvar"
  Então a tarefa deve ser salva com sucesso
  E a lista de tarefas deve ser atualizada para incluir a nova tarefa

Cenário: Tentativa de inserir tarefa sem título
  Dado que estou na página de inserção de tarefas
  Quando eu deixo o campo "Título" vazio
  E eu clico no botão "Salvar"
  Então a aplicação deve exibir uma mensagem de erro indicando que o título é obrigatório

Cenário: Tentativa de inserir tarefa com data limite passada
  Dado que estou na página de inserção de tarefas
  Quando eu seleciono "Data Limite" como "2023-05-01"
  E eu clico no botão "Salvar"
  Então a aplicação deve exibir uma mensagem de erro indicando que a data limite deve ser no futuro
