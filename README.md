# Portfólio pessoal — Guilherme Gomes Justi

Portfólio desenvolvido para a Agenda 15 de Desenvolvimento de Sistemas I da ETEC, a partir da estrutura apresentada na aula. A página reúne perfil, projetos, habilidades e contato, com identidade visual inspirada no meu perfil do GitHub e seus GIFs retrô.

**Aluno:** Guilherme Gomes Justi  
**Site:** https://gu1just1.github.io/portfolio-agenda15/  
**Repositório:** https://github.com/gu1just1/portfolio-agenda15

## Tecnologias

HTML5, CSS3, JavaScript e Bootstrap 5.3.3. Os arquivos do Bootstrap são carregados por CDN; os GIFs são carregados dos repositórios indicados nos seus endereços.

## Como funciona

O arquivo `index.html` contém o conteúdo da página. O menu direciona às seções Perfil, Projetos, Habilidades e Contato. A grade e o menu responsivo usam componentes do Bootstrap; os botões de contato abrem os respectivos canais. Para executar localmente, abra `index.html` no navegador com conexão à internet para carregar Bootstrap e GIFs.

## Recurso novo: alternância de tema

O botão **Modo escuro** alterna entre os temas claro e escuro. O JavaScript altera o atributo `data-theme` no elemento raiz e as variáveis CSS ajustam cores de fundo, texto e bordas. A escolha é guardada em `localStorage` quando disponível, para ser lembrada em visitas posteriores. O botão também informa seu estado por `aria-pressed`. Além disso, os cartões têm uma transição ao passar o mouse, respeitando a preferência do usuário por movimento reduzido.

## Referência

Estrutura geral inspirada no projeto [Agenda 15](https://github.com/pauloeduardoandrade/Agenda15), disponibilizado no material da disciplina.
