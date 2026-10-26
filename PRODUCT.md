# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores, potenciais clientes de freela e outras pessoas que avaliam o portfólio de front-end do autor. Chegam para julgar qualidade de execução, design e código, não para comprar de uma loja real.

## Product Purpose

Olibike é uma loja de bicicletas fictícia criada como estudo da Origamid e mantida como peça de portfólio. Existe para demonstrar domínio de HTML, CSS e JavaScript por meio de uma experiência de e-commerce convincente. Sucesso significa transmitir competência técnica e cuidado de design a quem avalia o portfólio.

## Positioning

Uma vitrine de front-end: a loja é plausível como produto, mas o que ela vende é a habilidade de quem a construiu. O diferencial é apresentar catálogo, personalização de bikes e programa de manutenção com identidade e acabamento de projeto real, sem depender de back-end.

## Operating Context

Site estático multipágina, aberto diretamente no navegador ou por link publicado (`https://olibike.web.app/`). Páginas existentes: home, catálogo, três detalhes de bicicleta, manutenção, contato, orçamento e termos. Conteúdo em pt-BR, com navegação e formulários operando apenas no cliente.

## Capabilities and Constraints

- Stack atual: HTML semântico, CSS compilado em `css/style.min.css` e JavaScript vanilla.
- Funcionalidades: catálogo com três modelos, páginas de produto com galeria e ficha técnica, planos de manutenção, FAQ em acordeão, formulário de orçamento que pré-seleciona produto via query string e status de aberto/fechado da loja.
- Não há back-end, carrinho funcional, pagamento nem envio real de formulário; o orçamento é uma simulação de interface.
- Preços canônicos unificados em todas as páginas: oliSpeed R$ 4.999, oliRout R$ 3.599 e oliUrban R$ 2.999. Garantias: oliSpeed 24 meses; oliRout e oliUrban 12 meses. Quadro da oliUrban em alumínio.
- O CSS-fonte é dividido em arquivos parciais, mas o site carrega apenas o bundle `style.min.css`; alterações visuais precisam considerar esse fluxo de build.

## Brand Commitments

- Nome Olibike / #olibike, com logotipo em `img/olibike.svg` e favicon próprio.
- Voz informal, próxima e bem-humorada em pt-BR (ex.: respostas do FAQ e chamadas como "escolha a sua").
- Nomes de produto já estabelecidos: oliSpeed, oliRout e oliUrban; planos WEEKEND e HIGH POWER.
- Letras destacadas em cores nos nomes dos modelos fazem parte da identidade visual e não devem ser removidas sem decisão explícita.

## Evidence on Hand

- Imagens de produto, ambientação, ferramentas, parceiros, ícones e depoimento em `img/`, todas de exemplo.
- Logotipo em SVG e favicon próprios.
- Conteúdo textual completo em todas as páginas: descrições de produto, ficha técnica, planos, FAQ e termos.
- Não existem clientes reais, depoimentos reais, métricas de negócio, estudos de caso ou prova social verificável; trabalhos futuros não devem fabricar esses elementos como se fossem reais.

## Product Principles

1. A loja deve parecer real o bastante para dar credibilidade ao portfólio, sem se apresentar como negócio real.
2. O fluxo de descoberta e consideração de bicicletas deve ser claro e navegável sem back-end.
3. A execução front-end é o produto: semântica, responsividade, acessibilidade e desempenho contam como conteúdo.
4. Consistência entre páginas — especialmente preços, nomes e dados de contato — é parte da credibilidade.
5. A personalidade informal da marca deve sobreviver a qualquer evolução visual.
