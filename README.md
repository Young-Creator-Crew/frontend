# YCC Frontend

Frontend do projeto YCC, construído com React e Vite. Atualmente, a aplicação disponibiliza as telas de login e cadastro e se comunica com uma API local de autenticação.

## Tecnologias

- React 19 para a construção da interface
- Vite 8 para desenvolvimento e geração do build
- React Router DOM 7 para o roteamento no navegador
- Oxlint para validação de código
- JavaScript com JSX e módulos ES

## Pré-requisitos

- Node.js e npm instalados
- API do YCC executando em `http://localhost:8080`

## Instalação e execução

Na pasta `frontend`, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal a URL local da aplicação, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o Vite com atualização automática durante o desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente o build de produção. |
| `npm run lint` | Executa o Oxlint no projeto. |

## Arquitetura

O projeto usa uma separação simples por responsabilidade:

```text
src/
├── main.jsx                  # Ponto de entrada e montagem do React
├── App.jsx                   # Roteador e composição principal da aplicação
├── App.css                   # Estilos específicos da aplicação
├── index.css                 # Estilos globais e variáveis visuais
├── assets/                   # Imagens e recursos estáticos importados pelo código
├── components/
│   └── auth/
│       ├── LoginForm.jsx     # Formulário controlado de login
│       └── RegisterForm.jsx  # Formulário controlado de cadastro
├── pages/
│   └── auth/
│       ├── Login.jsx         # Página que compõe o LoginForm
│       └── Register.jsx      # Página que compõe o RegisterForm
└── services/
	└── authService.js        # Comunicação HTTP com a API de autenticação
```

### Inicialização

`main.jsx` importa os estilos globais e renderiza `App` dentro de `StrictMode`. O elemento HTML com `id="root"`, definido em `index.html`, é o ponto onde a aplicação React é montada.

### Rotas

As rotas são definidas em `App.jsx` dentro de `BrowserRouter`:

| Rota | Página |
| --- | --- |
| `/login` | Tela de login |
| `/register` | Tela de cadastro |

No estado atual, apenas essas duas rotas renderizam páginas. Acessar `/` ou outra URL não cadastrada não redireciona automaticamente.

### Componentes de autenticação

As páginas de autenticação funcionam como contêineres das telas. A lógica dos campos e do envio fica nos componentes de formulário:

- `LoginForm` mantém email e senha com `useState` e envia os dados ao serviço `login`.
- `RegisterForm` mantém email, senha e nome com `useState` e envia os dados ao serviço `register`.
- As mensagens exibidas são baseadas no status HTTP retornado pela API.

### Serviço de autenticação

`services/authService.js` centraliza as requisições `fetch`:

| Função | Método e endpoint | Corpo enviado |
| --- | --- | --- |
| `login(email, password)` | `POST /auth/login` | `{ email, password }` |
| `register(email, password, name)` | `POST /auth/register` | `{ email, password, name }` |

As requisições usam `Content-Type: application/json`. O serviço retorna o status HTTP quando a API responde e registra uma mensagem no console quando não consegue estabelecer conexão.

## Integração com o backend

O endereço da API está atualmente fixo em `http://localhost:8080`. Para executar o fluxo completo, o backend deve estar disponível nesse endereço e aceitar os endpoints descritos acima.

Os formulários tratam atualmente estes retornos:

- Login: `200`, `401`, `422` e `500`
- Cadastro: `201`, `409` e `500`

## Estado atual e próximos pontos

- Não há persistência de sessão ou armazenamento de token no frontend.
- Após sucesso, os formulários apenas registram a operação e exibem um alerta.
- Não há rota protegida, página inicial autenticada ou navegação entre login e cadastro implementada.
- A URL da API ainda não usa variável de ambiente.
