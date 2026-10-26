# Olibike

Site fictício de uma loja de bicicletas, criado como projeto de estudo e peça de portfólio. O conteúdo, os preços e os dados de contato são ilustrativos.

## Sobre o projeto

O objetivo é demonstrar domínio de HTML semântico, CSS moderno e JavaScript puro na construção de uma interface responsiva, acessível e com identidade visual consistente. Não há backend, carrinho real, pagamento ou envio de formulários: os formulários são uma demonstração de interface e validação no navegador.

## Funcionalidades

- **Catálogo de bicicletas:** modelos oliSpeed, oliRout e oliUrban com especificações e preços.
- **Páginas de produto:** detalhes, garantia, itens opcionais e chamada para orçamento.
- **Orçamento:** seleção de bike ou plano, preenchimento de dados e validação no navegador.
- **Programa de manutenção:** planos WEEKEND e HIGH POWER com perguntas frequentes em acordeão.
- **Contato:** endereço, canais de atendimento e horário de funcionamento calculado por JavaScript.
- **Galeria de modelos:** clique ou teclado para destacar uma imagem na página de produto.
- **Responsividade:** layout adaptado para celular, tablet e desktop.

## Tecnologias

- HTML5 semântico
- CSS com variáveis, Grid e Flexbox
- JavaScript puro (ES6+)
- Google Fonts (Poppins, Work Sans, Comfortaa e Merriweather)
- Node.js apenas para o build do CSS

## Estrutura

```text
.
├── bikes/                # páginas de produto
├── css/
│   ├── style.css         # manifesto de imports
│   ├── style.min.css     # bundle gerado e usado pelas páginas
│   └── ...               # parciais por seção e utilitários
├── img/                  # imagens e ícones
├── js/script.js          # interações e validações
├── scripts/build-css.mjs # build do CSS
└── *.html                # páginas principais
```

## Como rodar

As páginas são estáticas. Para evitar restrições de caminho relativo, sirva a pasta com um servidor local:

```bash
python -m http.server 5500
```

Depois acesse `http://127.0.0.1:5500/`.

## Build do CSS

As páginas carregam apenas `css/style.min.css`. Após editar as parciais em `css/`, gere o bundle:

```bash
node scripts/build-css.mjs
```

O script resolve os `@import` das parciais e minifica o resultado. As fontes são carregadas por `<link>` nas páginas.

## Acessibilidade

- Estrutura de títulos e landmarks semânticos.
- Navegação por teclado e foco visível.
- Textos alternativos descritivos nas imagens de conteúdo.
- Contraste de texto ajustado para os principais elementos.
- Mensagens de status em formulários com `aria-live`.

## Acesso

[olibike.web.app](https://olibike.web.app/)

## Autor

Douglas Maciel
