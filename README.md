[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19042323&assignment_repo_type=AssignmentRepo)
# Dificuldades de se escrever Pull Requests

 O nosso projeto consiste na criação de uma IA, de nome "pull request generator", que visa facilitar e tornar mais prática a experiência de um desenvolvedor em escrever pull requests, que são solicitações para mesclar alterações de um branch para outro em um repositório, geralmente usadas em sistemas como GitHub. Elas permitem revisão de código, discussão e controle de versões antes da integração final.

 Dessa forma nossa inovação surge como um braço direito para desenvolvedores e programadores.


## Alunos integrantes da equipe

* Luca Pinheiro Maciel Santos
* Heitor Lima Moreira
* Filipe Augusto Silva Maia
* Matheus Procópio Duarte
* João Augusto Moreira Cunha
* Hector Faria Braz

## Professores responsáveis
* Hayala Nepomuceno Curto
* Luciana Mara Freitas Diniz
* Wesley Dias Maciel


## Instruções de utilização 

## Instruções de Utilização (Para Usuários Finais)

Bem-vindo(a) ao **Pull Request Generator**! Nossa ferramenta inovadora utiliza Inteligência Artificial para automatizar a criação de descrições de Pull Requests no GitHub, tornando seu fluxo de trabalho mais ágil e eficiente. Siga estas instruções para aproveitar ao máximo todas as funcionalidades.

### Primeiro Acesso e Autenticação

Sua jornada com o Pull Request Generator começa com a conexão à sua conta GitHub para garantir a segurança e o acesso aos seus repositórios:

* **Acesso Inicial:** Ao abrir o site, você será direcionado(a) para uma tela de boas-vindas. Clique em "Começar agora" para prosseguir.
* **Conexão GitHub:** Em seguida, o sistema solicitará seu **GitHub Token Pessoal** (Personal Access Token). Este token é essencial para que a aplicação possa interagir com seus dados e repositórios no GitHub de forma segura. Insira seu token no campo indicado e clique em "Continuar".
* **Cadastro ou Login:** Após a validação do token, se for seu primeiro acesso, você poderá se cadastrar com um nome, email e senha. Se já tiver uma conta, utilize a opção de Login com seu email e senha. O sistema o(a) guiará através deste processo.
* **Gerenciamento de Sessão:** O sistema gerencia sua sessão automaticamente. Se você não estiver logado(a) ou sua sessão expirar, o sistema o(a) redirecionará para a tela de login/token para que possa acessar novamente.

### Navegação Principal (Barra Superior)

O cabeçalho do aplicativo, sempre visível, oferece acesso rápido e informações importantes:

* **Pull Request Generator (Título):** O título da aplicação no canto superior esquerdo serve como um link para retornar à página inicial a qualquer momento.
* **Cartão do Usuário:** No canto superior direito, você verá seu avatar e nome de usuário do GitHub. Clicar neste cartão o(a) levará diretamente para a tela de Configurações do seu perfil. Se não estiver logado, um botão "Login" aparecerá em seu lugar.

### Gerar Descrição de Pull Request

Esta é a funcionalidade central para automatizar suas descrições de PRs:

* **Seleção de Organização:** Escolha a organização ou seu próprio perfil de usuário no GitHub onde o repositório que você deseja analisar está localizado.
* **Repositório:** Comece a digitar o nome do repositório desejado. O campo possui uma funcionalidade de **preenchimento automático** que o(a) ajudará a selecionar o repositório correto.
* **Modelo de IA:** Selecione qual modelo de Inteligência Artificial você deseja que o sistema utilize para analisar seus commits e gerar a descrição.
* **Branches (Base e Comparação):** Informe a "Branch Base" (a branch principal ou estável para onde suas mudanças serão mescladas) e a "Branch Comparação" (a branch que contém as alterações que você deseja descrever). Ambos os campos também oferecem **preenchimento automático** com as branches disponíveis no repositório selecionado.
* **Botão "Gerar Descrição":** Após preencher todos os campos, clique neste botão. A IA analisará os commits entre as branches selecionadas e gerará uma descrição de Pull Request para você. Você será automaticamente direcionado(a) para a tela de chat.

### Interação com o Chat

A tela de chat permite que você refine a descrição gerada pela IA e finalize seu Pull Request:

* **Descrição Gerada:** A primeira mensagem da IA no chat será a descrição inicial do Pull Request, baseada nos commits que você especificou.
* **Campo de Mensagem:** Utilize o campo de texto na parte inferior da tela para interagir com a IA. Você pode pedir alterações na descrição, solicitar mais detalhes, ou fazer perguntas relacionadas aos commits.
* **Botão "Enviar":** Clique para enviar sua mensagem para a IA e aguardar a resposta.
* **Lista de Chats:** No painel lateral esquerdo, você encontrará uma lista de suas conversas anteriores. Clique em qualquer chat para retomar uma interação e continuar editando descrições passadas.
* **Botão "Novo chat":** Inicia uma nova conversa e o(a) leva de volta à tela de geração de Pull Request para começar uma nova descrição.
* **Botão "Editar Prompt":** Redireciona você para a tela de edição de prompt (veja a seção "Configuração de Templates e Prompts" abaixo).
* **Botões de Finalização (Feedback):** Após a IA gerar uma descrição, um formulário de feedback aparecerá.
    * **"Enviar"**: Confirma que você gostou da descrição e, ao clicar, o sistema **criará o Pull Request no GitHub** com o conteúdo gerado pela IA. Um link para o PR criado será fornecido no chat.
    * **"Cancelar"**: Remove o formulário de feedback caso você não queira criar o PR naquele momento.

### Configurações do Usuário

Acesse esta tela clicando no seu Cartão de Usuário no cabeçalho. Aqui você pode gerenciar suas informações de perfil e chaves de acesso:

* **Minhas Informações:** Visualize seu avatar, nome de usuário (que pode ser editado) e seu email (que é somente leitura).
* **Token do GitHub:** Você pode atualizar seu GitHub Token Pessoal aqui, caso precise.
* **Chaves de API (IA):** Insira suas chaves de API para diferentes provedores de IA (OpenAI, DeepSeek, Grok) que você deseja que a ferramenta utilize. O sistema só usará os modelos das APIs para as quais você fornecer uma chave válida.
* **Botões de Ação:**
    * **Salvar:** Confirma e salva todas as alterações feitas nas configurações.
    * **Cancelar:** Descarta as alterações e retorna à página inicial.
    * **Logout:** Encerra sua sessão.

### Configuração de Templates e Prompts (Editor)

Acesse esta tela clicando no botão "Editar Prompt" na tela de chat. Esta funcionalidade avançada permite que você personalize a forma como a IA gera as descrições dos Pull Requests:

* **Template (Markdown):** Edite o template base em formato Markdown que será usado para estruturar suas descrições de Pull Request.
* **Prompts Personalizados:**
    * **Base Prompt:** Uma instrução inicial para orientar a IA sobre sua função principal.
    * **Analysis Prompt:** Instruções detalhadas sobre como a IA deve analisar as mensagens de commit e as diferenças de código.
    * **Description Prompt:** Instruções sobre como a IA deve gerar a descrição final do Pull Request, com base na análise.
* **Pré-visualizar/Editar:** Use os botões para alternar entre a pré-visualização do seu template Markdown (como ele aparecerá no PR) e o modo de edição.
* **Botões de Ação:**
    * **Salvar Configuração:** Salva suas personalizações e o(a) redireciona para a tela de geração de Pull Request.
    * **Cancelar:** Descarta as alterações e o(a) redireciona para a tela de chat.
    * **Limpar:** Restaura todos os campos para as configurações padrão do sistema.
