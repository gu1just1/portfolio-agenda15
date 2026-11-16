# Portfólio pessoal — Guilherme Gomes Justi

**Aluno:** Guilherme Gomes Justi  
**Site publicado:** https://gu1just1.github.io/portfolio-agenda15/  
**Repositório:** https://github.com/gu1just1/portfolio-agenda15

## Sobre

Portfólio pessoal desenvolvido para a Agenda 15 de Desenvolvimento de Sistemas I da ETEC. Apresenta perfil, habilidades em estudo, projetos, formação e contato. A estrutura usa como ponto de partida os componentes do projeto da aula e uma composição editorial inspirada no Swissfolio.

## Tecnologias

HTML5, CSS3, JavaScript e Bootstrap 5.3.3. O CSS e o bundle JavaScript do Bootstrap são carregados por CDN.

## Funcionamento

O menu direciona às seções da página, recolhe em telas menores e indica a seção ativa por meio do Scrollspy do Bootstrap. O grid adapta o conteúdo às diferentes larguras de tela. Links de contato abrem o e-mail, GitHub ou LinkedIn.

## Recursos novos e implementação

O **filtro de projetos** usa atributos `data-filter` nos botões e `data-category` nos projetos. Um evento de clique em JavaScript compara as categorias, atualiza a propriedade `hidden`, informa a quantidade exibida e define `aria-pressed` para identificar o filtro ativo. Atualmente há um único projeto, que pertence às duas categorias; por isso, ele aparece nos três filtros. Novos projetos podem ter uma ou mais categorias.

Também foram acrescentadas uma seção independente de habilidades e outra de formação, transições nos projetos e entrada discreta das seções com `IntersectionObserver`. A preferência por movimento reduzido é respeitada. O projeto da aula já incluía informações de habilidades e formação dentro do perfil; o filtro é a principal funcionalidade inédita em relação ao exemplo.

## Execução local

Abra `index.html` em um navegador. É necessária conexão à internet para carregar o Bootstrap pela CDN. Os estilos e scripts próprios ficam em `css/style.css` e `js/script.js`.

## Créditos e referências

- [Projeto Agenda 15](https://github.com/pauloeduardoandrade/Agenda15): exemplo fornecido na aula.
- [Swissfolio](https://swissfolio.netlify.app/): referência de composição visual. A implementação foi desenvolvida em HTML, CSS, JavaScript e Bootstrap.
