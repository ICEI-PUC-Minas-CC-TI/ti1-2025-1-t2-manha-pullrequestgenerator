[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19042323&assignment_repo_type=AssignmentRepo)

# Pull Request Generator

**Descrição:**  
O Pull Request Generator é uma solução inovadora que utiliza inteligência artificial para automatizar a criação de pull requests no GitHub. Com o uso do token de acesso, a ferramenta se conecta ao repositório, analisa o código-fonte e identifica melhorias ou correções necessárias. Em seguida, gera propostas de alterações, facilitando o trabalho em equipe e aprimorando a qualidade do software.

Esse projeto é ideal para otimizar o tempo e reduzir o esforço manual em revisões de código. Ele oferece sugestões automatizadas que ajudam a corrigir vulnerabilidades, alinhar o estilo do código e implementar melhorias de desempenho. Com isso, o Pull Request Generator transforma o fluxo de trabalho, tornando o desenvolvimento de software mais eficiente e colaborativo.

---

## Alunos integrantes da equipe

- Filipe Augusto Silva Maia
- Heitor Lima Moreira
- Hector Faria Braz de Carvalho
- João Augusto Moreira Cunha
- Luca Pinheiro Maciel Santos
- Matheus Procopio Duarte

---

## Professores responsáveis

- Luciana Mara Freitas Diniz
- Hayala Nepomuceno Curto
- Wesley Dias Maciel

---

## Instruções de utilização

Para acessar o serviço, o usuário deverá inicialmente fornecer seu Classic Token do GitHub como forma de autenticação. Esse procedimento é essencial para garantir a segurança e a integridade da comunicação entre a aplicação e a plataforma GitHub.

Uma vez autenticado com sucesso, o sistema disponibilizará ao usuário uma interface para visualização das organizações (organizations), repositórios (repositories) e ramificações (branches) vinculadas à sua conta.

Com essas informações devidamente carregadas e organizadas, o usuário poderá então selecionar de forma prática e objetiva os branches de seu interesse, a fim de realizar comparações entre eles conforme sua necessidade de análise ou versionamento.

---

## Estrutura da documentação do projeto

- Contexto
- Product Discovery
- Product Design
- Metodologia
- Solução
- Referências Bibliográficas

---

### **Contexto**

A automação de processos no desenvolvimento de software tem avançado rapidamente, mas ainda existem tarefas repetitivas e críticas que consomem tempo dos desenvolvedores — como a criação de pull requests. Essas tarefas, quando feitas manualmente, estão sujeitas a erros humanos, atrasos e inconsistência nos padrões de contribuição.

O projeto propõe o desenvolvimento de uma Inteligência Artificial capaz de criar pull requests automaticamente, analisando o código-fonte, detectando alterações relevantes, gerando sugestões de melhoria e abrindo PRs conforme boas práticas. A solução visa otimizar o fluxo de trabalho em projetos de software, integrando-se a repositórios Git (como GitHub ou GitLab) e reduzindo o tempo e esforço gastos em tarefas repetitivas, ao mesmo tempo em que aumenta a qualidade e rastreabilidade das mudanças.

---

## Problema

Equipes de desenvolvimento frequentemente enfrentam lentidão e inconsistência na criação e revisão de pull requests. Esse processo manual pode resultar em atrasos, mensagens mal escritas, padrões não seguidos e até falhas em deploys automatizados.

Além disso, a tarefa de abrir PRs é repetitiva, ocupando tempo que poderia ser direcionado para a escrita de código de valor mais alto. Em ambientes com integração contínua, essa ineficiência pode comprometer a produtividade geral da equipe e a confiabilidade do pipeline de entrega.

Há, portanto, uma oportunidade clara para aplicar inteligência artificial no suporte a tarefas de versionamento e integração contínua.

---

### **Objetivo**

**Objetivo Geral:**  
Desenvolver uma IA capaz de automatizar a criação de pull requests, analisando mudanças no código, sugerindo melhorias e interagindo com plataformas de versionamento como GitHub e GitLab.

**Objetivos Específicos:**

- Detectar alterações relevantes em repositórios locais ou remotos.
- Gerar mensagens de commit e descrição de PRs com linguagem clara e padronizada.
- Sugerir melhorias automatizadas no código, como ajustes de estilo ou refatorações simples.
- Criar e enviar PRs com base em regras personalizáveis por projeto.
- Integrar com CI/CD e ferramentas de revisão automática (linters, testes).
- Aprender com feedback de revisores para melhorar sugestões futuras.

---

### **Justificativa**

A criação de pull requests, embora essencial para o controle de versão e a colaboração em projetos de software, é uma etapa que ainda carece de automação eficaz. A maioria dos desenvolvedores realiza esse processo manualmente, o que pode comprometer a padronização e atrasar entregas.

Uma solução baseada em IA é justificável tanto pela economia de tempo quanto pela melhoria da qualidade do processo. Além disso, ao aplicar machine learning e processamento de linguagem natural, o sistema pode evoluir com o tempo, adaptando-se aos padrões de cada equipe ou projeto.

Com a crescente adoção de DevOps e práticas ágeis, essa automação representa um avanço estratégico para empresas e desenvolvedores individuais que buscam escalar sua capacidade produtiva com menor esforço operacional.

---

### **Público alvo**

**O projeto atende diferentes perfis dentro do ecossistema de desenvolvimento de software:**

- Desenvolvedores individuais e freelancers: Que desejam acelerar tarefas repetitivas e manter a qualidade do repositório.
- Equipes de desenvolvimento ágil: Que precisam de integração contínua eficiente e menos gargalos em PRs.
- Empresas de tecnologia: Que buscam aumentar a produtividade e reduzir custos operacionais com tarefas manuais.
- Projetos open source: Que recebem muitas contribuições e enfrentam dificuldade em manter um padrão de revisão e PRs.
- Ferramentas de CI/CD e DevOps: Que podem se beneficiar da integração com uma IA especializada em versionamento inteligente.

---

### **Matriz CSD e Mapa de Stakeholders**

![alt text](/docs/image.png)  
![alt text](/docs/image-1.png)  
![alt text](/docs/image-2.png)

---

### **Entrevista qualititativa**

![alt text](/docs/image-3.png)  
![alt text](/docs/image-4.png)  
![alt text](/docs/image-5.png)  
![alt text](/docs/image-6.png)  
![alt text](/docs/image-7.png)  
![alt text](/docs/image-8.png)  
![alt text](/docs/image-9.png)

---

### **Personas e Propostas de valor**

![alt text](/docs/image-10.png)  
![alt text](/docs/image-11.png)  
![alt text](/docs/image-12.png)  
![alt text](/docs/image-13.png)  
![alt text](/docs/image-14.png)  
![alt text](/docs/image-15.png)

---

### **Histórias de Usuários**
![alt text](/docs/image-16.png)
---

### **Requisitos da Plataforma**
#### Requisitos Funcionais
![alt text](/docs/image-18.png)
---

#### Requisitos não Funcionais
![alt text](/docs/image-19.png)
---

### Restrições do projeto
![alt text](/docs/image-20.png)
---

### Proposta de valor
![alt text](/docs/image-21.png)
---

### Projeto de interfaces
Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.
---

## Wireframes
Estes são os protótipos de telas do sistema.
![alt text](/docs/image-22.png)
![alt text](/docs/image-23.png)
![alt text](/docs/image-24.png)
![alt text](/docs/image-25.png)

## Metodologia
Detalhes sobre a organização do grupo e o ferramental empregado.

## notion
Utilizado para subdividir as tasks semanais do grupo.
![alt text](/docs/image-26.png)

## Google meet
Utilizado para realizar reuniões semanais com todo grupo.

## Github
Utilizado como repositorio de codigos para melhor organização de todo grupo.

https://github.com/ICEI-PUC-Minas-CC-TI/ti1-2025-1-t2-manha-pullrequestgenerator/tree/master?tab=readme-ov-file

## Metodologia

### Processo de Trabalho

Para o desenvolvimento do **Pull Request Generator**, a equipe adotou uma abordagem híbrida e adaptativa, combinando os princípios do **Design Thinking** com a agilidade do **Scrum**.

#### Design Thinking na Concepção
A fase inicial foi dedicada ao Design Thinking, permitindo uma imersão profunda no problema da criação manual de *pull requests*. Este período foi crucial para:
* Compreender as dores e necessidades dos desenvolvedores.
* Identificar e detalhar as personas do nosso público-alvo.
* Mapear a jornada do usuário e seus pontos de atrito.
* Conceber a proposta de valor central da nossa solução, que serviu como guia para todas as etapas subsequentes do desenvolvimento.

#### Scrum para o Desenvolvimento Ágil
Transitando para o desenvolvimento, o framework Scrum foi implementado para gerenciar as entregas de forma iterativa e incremental. Isso nos permitiu:
* Organizar o trabalho em **sprints** com objetivos bem definidos.
* Realizar ciclos contínuos de **planejamento, execução, revisão e adaptação**.
* Facilitar o feedback constante e a evolução progressiva da solução, garantindo que o produto final estivesse alinhado com as expectativas e necessidades identificadas.

### Ferramentas Essenciais

A seleção estratégica de ferramentas foi um pilar para a colaboração eficiente e o sucesso do desenvolvimento:

* **Notion:** Utilizado para **Gestão de Projetos e Organização de Tasks**. Permitiu a subdivisão de tarefas semanais, o acompanhamento detalhado do progresso e o alinhamento constante do planejamento.
* **Google Meet:** Plataforma para **Reuniões Semanais e Comunicação Síncrona**. Essencial para discussões de design, resolução de desafios, alinhamento de expectativas e revisão de progresso em tempo real.
* **GitHub:** O **Repositoriamento Principal e Controle de Versão**. Fundamental para hospedar o código, gerenciar *branches*, *commits* e *pull requests*, assegurando um histórico de desenvolvimento transparente e facilitando o trabalho colaborativo.
    * **Link do Repositório:** [https://github.com/ICEI-PUC-Minas-CC-TI/ti1-2025-1-t2-manha-pullrequestgenerator/tree/master?tab=readme-ov-file](https://github.com/ICEI-PUC-Minas-CC-TI/ti1-2025-1-t2-manha-pullrequestgenerator/tree/master?tab=readme-ov-file)
* **Visual Studio Code (VS Code):** O **Ambiente de Desenvolvimento Integrado (IDE)** padrão da equipe. Suas funcionalidades avançadas e extensibilidade otimizaram a produtividade dos desenvolvedores.
* **JSON Server:** Empregado para **Simulação de Backend e Gerenciamento de Dados Locais**. Permitiu o desenvolvimento e teste independente do frontend, consumindo dados simulados de usuários e chats a partir do `db.json`.

### Tecnologias e Arquitetura Frontend

A interface do usuário do Pull Request Generator foi meticulosamente construída utilizando um conjunto de tecnologias web modernas, priorizando a modularidade, reatividade e uma experiência de usuário otimizada:

* **HTML5:** Utilizado para a estruturação semântica e acessível de todas as páginas da aplicação.
* **Tailwind CSS:** Framework CSS utilitário que possibilitou uma estilização rápida e responsiva, agilizando o desenvolvimento da interface com um design consistente.
* **jQuery:** Empregado para facilitar a manipulação eficiente do DOM e para implementar interações dinâmicas nas páginas, como a lógica de formulários e os componentes de autocomplete.
* **JavaScript Puro (ES6+):** A base da lógica interativa do frontend, organizada em módulos para promover a reusabilidade e a manutenibilidade do código:
    * `useAuth.js`: Gerencia todo o ciclo de autenticação e autorização do usuário, desde a validação do token do GitHub até o sistema de login e registro local. Incorpora hashing de senha (SHA-256) para garantir a segurança dos dados do usuário.
    * `useState.js`: Implementa um mecanismo leve para gerenciamento de estado global e persistência de dados dentro da aplicação, permitindo manter informações como sessão do usuário e preferências, mesmo durante a navegação entre páginas.
    * `useRouter.js`: Responsável pelo roteamento *client-side*, permitindo uma navegação suave e sem recarregamentos completos da página, melhorando a experiência do usuário.
    * `github.js`: Coleção de helpers para interagir de forma padronizada com a API REST do GitHub, incluindo funcionalidades para listar organizações, repositórios, branches e obter detalhes de commits.
    * `openai.js`: O módulo de integração direta com a API da OpenAI, encarregado de enviar os dados dos commits para a IA e receber em *stream* a descrição elaborada para o Pull Request.
    * `useChat.js`: Contém a lógica central do módulo de chat, gerenciando o fluxo de mensagens, a comunicação com a IA e a persistência do histórico de conversas.
    * `useChatUI.js`: Gerencia a renderização da interface do usuário do chat, exibindo as mensagens do usuário e do assistente de forma organizada, além de controlar o formulário de feedback.
    * `jobsProcessor.js`: Orquestra a sequência de operações para preparar os dados que serão enviados à IA, incluindo a busca dos commits e o gerenciamento de uma fila de processamento para otimizar as requisições.
    * `basePrompt.js`: Define o prompt inicial e o template que guiam a IA na geração das descrições de Pull Request, garantindo a padronização, relevância e profissionalismo do conteúdo gerado.

### Controle de Versão

O **GitHub** foi a plataforma fundamental escolhida para o controle de versão do projeto. Sua robustez e recursos colaborativos permitiram à equipe:
* Trabalhar de forma **colaborativa** em um ambiente centralizado.
* **Rastrear e gerenciar todas as mudanças** no código-fonte ao longo do tempo.
* Utilizar a estratégia de **branches** para isolar novas funcionalidades e correções.
* Realizar **revisões de código através de pull requests**, promovendo a análise, validação e melhoria contínua antes da integração das alterações ao código principal.

---

## Evolução do Projeto: Sprints de Desenvolvimento

O desenvolvimento do Pull Request Generator foi estruturado em **sprints ágeis**, com foco em entregas incrementais e funcionais. Cada sprint representou um ciclo de trabalho com objetivos claros, culminando na adição de funcionalidades significativas. Abaixo, detalhamos as principais funcionalidades e artefatos entregues em cada fase, refletindo a progressão do projeto até o momento.

### Sprint 1: Estrutura Inicial e Funcionamento com o Github

Esta sprint foi dedicada à construção da base do sistema, com foco em autenticação de usuários, integração inicial com o GitHub e demonstração das principais funcionalidades da plataforma.

#### Objetivos da Sprint:
* Implementar o sistema de autenticação de usuários.
* Permitir o gerenciamento seguro dos tokens de acesso ao GitHub.
* Estabelecer uma prompt base para formatar os commits gerados.
* Realizar uma primeira demonstração funcional das telas de geração de Pull Request e do Chat assistido por IA.

#### Funcionalidades Entregues:
* **Página de Entrada de Token GitHub (`token.html`):** Desenvolvida como o primeiro ponto de contato do usuário com a aplicação. Esta página é responsável por coletar e validar o Classic Token do GitHub, um requisito fundamental para que a aplicação possa realizar operações nas APIs do GitHub em nome do usuário.
* **Módulos de Autenticação Completos (`login.html`, `register.html`):** Implementação das interfaces e lógicas de *frontend* e *backend* para o registro de novos usuários e o processo de login. Isso incluiu a validação de dados de entrada, armazenamento seguro de senhas por meio de hashing (utilizando a biblioteca `bcryptjs` em `register.js` e `login.js`), e o estabelecimento de sessões persistentes com base na expiração do token.
* **Interface de Seleção de Repositórios e Branches (`pullrequest.html`):** Desenvolvida uma interface intuitiva onde o usuário pode selecionar a organização e o repositório desejados. Os campos para `Repositório`, `Branch Base` e `Branch Comparação` utilizam um sistema de *autocomplete* dinâmico, que é preenchido com dados diretamente da API do GitHub, facilitando a busca e seleção.
* **Mecanismo de Processamento de Jobs e Obtenção de Commits (`jobsProcessor.js`):** Implementado um sistema robusto de fila para gerenciar e processar as requisições assíncronas ao GitHub. Este módulo orquestra a busca dos commits que diferenciam a branch "base" da branch "comparação", extraindo metadados essenciais (SHA, mensagem, arquivos alterados) para a análise posterior pela IA.
* **Geração de Descrição de Pull Request via IA (`chat.html`, `openai.js`, `basePrompt.js`):**
    * A funcionalidade central é acessível através de uma interface de chat dedicada (`chat.html`), que exibe a descrição gerada pela IA e permite a interação contínua com o assistente.
    * O módulo `openai.js` atua como o conector direto para a API da OpenAI, enviando os dados brutos dos commits e recebendo a descrição elaborada pela IA em um fluxo de dados (streaming).
    * O arquivo `basePrompt.js` contém a diretriz e o template rigorosos que guiam a IA na formatação da descrição do Pull Request. Este prompt garante que o resultado seja profissional, padronizado e altamente relevante para o contexto das alterações de código.

#### Artefatos Criados:
* **Wireframes e Esboços Iniciais:** Protótipos visuais para as telas de login, registro e entrada de token, servindo como blueprint para o desenvolvimento da interface.
* **Estruturas de Dados Iniciais:** Definição da estrutura para o armazenamento de usuários e sessões no `db/db.json`.

### Sprint 2: Aperfeiçoamento da função de Chat e controle de navegação

Esta sprint teve como foco aprimorar a navegação da aplicação, oferecer um histórico acessível dos Pull Requests gerados e tornar o chat mais flexível e eficiente para os usuários.

#### Objetivos da Sprint:
* Implementar uma sidebar para visualização do histórico de Pull Requests e chats anteriores.
* Tornar a navegação fluida e sem recarregamento de páginas.
* Estabelecer um gerenciamento eficiente de estado para manter dados da sessão.
* Aumentar a flexibilidade na edição e no controle das interações no chat.

#### Funcionalidades Entregues:
* **Infraestrutura de Gerenciamento de Estado e Roteamento:** Desenvolvimento de componentes fundamentais como `useState.js` para manipulação e persistência de dados na sessão do navegador, e `useRouter.js` para um controle de navegação eficiente entre as diferentes páginas da aplicação sem recarregamentos completos.
* **Histórico Persistente de Chats:** Implementada a capacidade de salvar e carregar conversas anteriores com o assistente de IA. Isso permite que os usuários revisitem descrições geradas previamente, otimizando o fluxo de trabalho e evitando o reprocessamento de dados.
* **Aprimoramento do Chat (`chat.html`):** Inclusão de controles como “Enviar” (para criar o Pull Request no GitHub) e “Cancelar” (para descartar a descrição atual), além de melhorias na usabilidade e no fluxo de geração.

#### Artefatos Criados:
* **Wireframes Detalhados:** Protótipos das telas de seleção de repositórios, chat e da nova sidebar de histórico.
* **Estrutura de Dados para Chats:** Adição de modelos para armazenar o histórico de chats e Pull Requests no backend.
* **Prompt Base e Template de Geração de PRs:** Refinamento do template base para garantir que as descrições geradas sejam mais personalizadas, claras e aderentes às práticas profissionais de desenvolvimento.

### Sprint 3: Suporte a Múltiplos Modelos de IA e Editor de Template

Nesta sprint, o foco foi oferecer aos usuários maior autonomia, permitindo o uso de diferentes modelos de IA (como DeepSeek e Grok) através da gestão de suas próprias chaves de API, além da criação de uma interface para personalização do template de geração dos Pull Requests.

#### Objetivos da Sprint:
* Adicionar suporte ao uso de diferentes modelos de IA, além da OpenAI.
* Permitir que os usuários cadastrem e gerenciem seus próprios tokens de API (GitHub, OpenAI, DeepSeek, Grok).
* Disponibilizar uma interface que permite a edição do prompt utilizado na geração de descrições dos Pull Requests.
* Oferecer maior flexibilidade e personalização no uso da plataforma.

#### Funcionalidades Entregues:
* **Página de Configurações do Usuário (`settings.html`):** Uma interface dedicada onde o usuário pode visualizar e atualizar suas informações de perfil (username e email), e principalmente, gerenciar seu token do GitHub e as chaves de API para diferentes modelos de IA (OpenAI, DeepSeek, Grok).
* **Editor de Prompt Personalizado (`editor.html`):** Ferramenta que permite aos usuários editar o conteúdo do `basePrompt.js` diretamente pela interface. Assim, é possível customizar o comportamento da IA, alterando o tom, a estrutura ou o nível de detalhamento das descrições geradas para os Pull Requests.

#### Artefatos Criados:
* **Wireframes do Editor e Configurações**: Protótipos para as novas telas de settings.html e editor.html.
* **Estrutura de Dados Expandida**: Adição de campos para armazenar tokens dos diferentes modelos de IA e dados do prompt customizado de cada usuário.
* **Template Dinâmico de Prompt**: Arquitetura que permite carregar, editar e salvar o prompt de cada usuário, proporcionando maior controle sobre a geração de textos pela IA.


#### Registros de testes
### testes para integração multimodelos
![alt text](/docs/image-31.png)
resultado do teste 1 -> a forma de passar o getmodel para o http de Ai estava errada

resultado do teste 2 -> problemas de integração

resultado do teste 3 -> erros desconhecidos de origem do github identificados como um erro de credencial do github

resultado do teste 4 -> caso use o github e volte depos ira dar problema devido ao uso de uma variavel temporaria

conclusões -> problemas resolvidos

percebemos que nao possuimos um feedback de eero adequado
### testes página inicial
![alt text](/docs/image-27.png)
Resultado teste 1 -> sucesso, salvar login e cadastro funcionando 

conclusões -> defeito de design encontrado, não há como retornar para essa pagina

### testes do chat
![alt text](/docs/image-30.png)
resultado do teste 1 -> Suscetível a instabilidades do GitHub por ser dependente dele.

conclusões -> risco baixo demais para ser considerável

### testes de login e registro
![alt text](/docs/image-32.png)
resultado teste login -> sucesso

resultado teste registro -> sucesso

conclusões -> sem alterações necessárias
