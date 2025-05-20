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

![alt text](image.png)  
![alt text](image-1.png)  
![alt text](image-2.png)

---

### **Entrevista qualititativa**

![alt text](image-3.png)  
![alt text](image-4.png)  
![alt text](image-5.png)  
![alt text](image-6.png)  
![alt text](image-7.png)  
![alt text](image-8.png)  
![alt text](image-9.png)

---

### **Personas e Propostas de valor**

![alt text](image-10.png)  
![alt text](image-11.png)  
![alt text](image-12.png)  
![alt text](image-13.png)  
![alt text](image-14.png)  
![alt text](image-15.png)

---

### **Histórias de Usuários**
![alt text](image-16.png)
---

### **Requisitos da Plataforma**
#### Requisitos Funcionais
![alt text](image-18.png)
---

#### Requisitos não Funcionais
![alt text](image-19.png)
---

### Restrições do projeto
![alt text](image-20.png)
---

### Proposta de valor
![alt text](image-21.png)
---

### Projeto de interfaces
Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.
---

## Wireframes
Estes são os protótipos de telas do sistema.
![alt text](image-22.png)
![alt text](image-23.png)
![alt text](image-24.png)
![alt text](image-25.png)

## Metodologia
Detalhes sobre a organização do grupo e o ferramental empregado.

## notion
Utilizado para subdividir as tasks semanais do grupo.
![alt text](image-26.png)

## Google meet
Utilizado para realizar reuniões semanais com todo grupo.

## Github
Utilizado como repositorio de codigos para melhor organização de todo grupo.

https://github.com/ICEI-PUC-Minas-CC-TI/ti1-2025-1-t2-manha-pullrequestgenerator/tree/master?tab=readme-ov-file
