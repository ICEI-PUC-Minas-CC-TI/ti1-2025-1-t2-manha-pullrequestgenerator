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

### Divisão de Papéis e Responsabilidades

A equipe foi estruturada com uma clara divisão de papéis, visando maximizar a eficiência, aproveitar as habilidades individuais e assegurar a cobertura integral dos requisitos do projeto:

* **Filipe Augusto Silva Maia:** Liderança e desenvolvimento do **Módulo de Autenticação e Gerenciamento de Usuários**. Responsável por todas as interfaces e lógicas de login, registro e configurações da conta, assegurando a segurança e o controle de acesso à aplicação.
* **Heitor Lima Moreira:** Especialização na **Integração com a API do GitHub**. Implementou a funcionalidade de listagem de organizações e repositórios, um componente fundamental para a interação do sistema com a plataforma de versionamento.
* **Hector Faria Braz de Carvalho:** Foco na **Lógica de Comparação de Branches e Obtenção de Commits**. Seu trabalho foi crucial para extrair os dados precisos das alterações de código, que são a base para a análise da inteligência artificial.
* **João Augusto Moreira Cunha:** Responsável pela **Interface de Chat**. Projetou e implementou a experiência do usuário do chat, garantindo que as descrições de Pull Request geradas pela IA fossem apresentadas de forma intuitiva e interativa.
* **Luca Pinheiro Maciel Santos:** Arquitetura e implementação dos **Módulos de Gerenciamento de Estado e Roteamento**. Garantiu a persistência de dados no `localStorage` e a navegação fluida entre as páginas, essenciais para a coesão da aplicação.
* **Matheus Procopio Duarte:** Desenvolvimento da **Integração com as APIs de Inteligência Artificial**. Sua contribuição foi indispensável para o *core* da solução, permitindo que a aplicação processasse os dados dos commits e gerasse as descrições de Pull Request de forma inteligente.

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

### Sprint 1: Fundação e Autenticação

Esta sprint inicial foi dedicada à construção da base sólida do sistema. O objetivo principal foi permitir que o usuário pudesse interagir com a plataforma através de mecanismos de autenticação seguros e gerenciar suas credenciais, além de estabelecer a conexão inicial com o ambiente do GitHub.

#### Objetivos da Sprint:
* Prover a infraestrutura essencial para autenticação de usuários.
* Permitir o gerenciamento de tokens de acesso ao GitHub.
* Estabelecer a base para a persistência de dados de sessão.

#### Funcionalidades Entregues:
* **Página de Entrada de Token GitHub (`token.html`):** Desenvolvida como o primeiro ponto de contato do usuário com a aplicação. Esta página é responsável por coletar e validar o Classic Token do GitHub, um requisito fundamental para que a aplicação possa realizar operações nas APIs do GitHub em nome do usuário.
* **Módulos de Autenticação Completos (`login.html`, `register.html`):** Implementação das interfaces e lógicas de *frontend* e *backend* para o registro de novos usuários e o processo de login. Isso incluiu a validação de dados de entrada, armazenamento seguro de senhas por meio de hashing (utilizando a biblioteca `bcryptjs` em `register.js` e `login.js`), e o estabelecimento de sessões persistentes com base na expiração do token.
* **Página de Configurações do Usuário (`settings.html`):** Uma interface dedicada onde o usuário pode visualizar e atualizar suas informações de perfil (username e email), e principalmente, gerenciar seu token do GitHub e as chaves de API para diferentes modelos de IA (OpenAI, DeepSeek, Grok).
* **Infraestrutura de Gerenciamento de Estado e Roteamento:** Desenvolvimento de componentes fundamentais como `useState.js` para manipulação e persistência de dados na sessão do navegador (via `localStorage`), e `useRouter.js` para um controle de navegação eficiente entre as diferentes páginas da aplicação sem recarregamentos completos.

#### Artefatos Criados:
* **Wireframes e Esboços Iniciais:** Protótipos visuais para as telas de login, registro e entrada de token, servindo como blueprint para o desenvolvimento da interface.
* **Estruturas de Dados Iniciais:** Definição da estrutura para o armazenamento de usuários e sessões no `db/db.json`.

### Sprint 2: Integração GitHub e Geração Inteligente de PRs

Esta sprint foi o ponto central do desenvolvimento, onde as funcionalidades core do Pull Request Generator foram implementadas. O foco foi a integração aprofundada com a API do GitHub e a aplicação de Inteligência Artificial para automatizar a criação de descrições de Pull Request.

#### Objetivos da Sprint:
* Permitir a seleção dinâmica de repositórios e branches do GitHub.
* Implementar a lógica para comparar branches e obter os commits.
* Integrar a aplicação com a IA para gerar descrições de Pull Request.
* Prover uma interface de chat para interação com a IA e feedback.

#### Funcionalidades Entregues:
* **Interface de Seleção de Repositórios e Branches (`pullrequest.html`):** Desenvolvida uma interface intuitiva onde o usuário pode selecionar a organização e o repositório desejados. Os campos para `Repositório`, `Branch Base` e `Branch Comparação` utilizam um sistema de *autocomplete* dinâmico, que é preenchido com dados diretamente da API do GitHub, facilitando a busca e seleção.
* **Mecanismo de Processamento de Jobs e Obtenção de Commits (`jobsProcessor.js`):** Implementado um sistema robusto de fila para gerenciar e processar as requisições assíncronas ao GitHub. Este módulo orquestra a busca dos commits que diferenciam a branch "base" da branch "comparação", extraindo metadados essenciais (SHA, mensagem, arquivos alterados) para a análise posterior pela IA.
* **Geração de Descrição de Pull Request via IA (`chat.html`, `openai.js`, `basePrompt.js`):**
    * A funcionalidade central é acessível através de uma interface de chat dedicada (`chat.html`), que exibe a descrição gerada pela IA e permite a interação contínua com o assistente.
    * O módulo `openai.js` atua como o conector direto para a API da OpenAI, enviando os dados brutos dos commits e recebendo a descrição elaborada pela IA em um fluxo de dados (streaming).
    * O arquivo `basePrompt.js` contém a diretriz e o template rigorosos que guiam a IA na formatação da descrição do Pull Request. Este prompt garante que o resultado seja profissional, padronizado e altamente relevante para o contexto das alterações de código.
    * Foram adicionadas funcionalidades de feedback direto na interface do chat, com botões para "Enviar" (confirmar a descrição e iniciar a criação do Pull Request real no GitHub) e "Cancelar" (descartar a descrição e o formulário de feedback).
* **Histórico Persistente de Chats:** Implementada a capacidade de salvar e carregar conversas anteriores com o assistente de IA. Isso permite que os usuários revisitem descrições geradas previamente, otimizando o fluxo de trabalho e evitando o reprocessamento de dados.

#### Artefatos Criados:
* **Wireframes Detalhados:** Protótipos de tela para a interface de seleção de repositórios e branches, e para a interface de chat, garantindo uma User Experience (UX) bem definida.
* **Estrutura de Dados para Chats:** Evolução do `db.json` para incluir o armazenamento do histórico de mensagens e chats, permitindo a persistência das interações com a IA.
* **Prompt Base e Template de Geração de PRs:** Definição formal e refinada do `prompt` e `template` que orientam a IA na criação das descrições, assegurando consistência e alta qualidade do output.
