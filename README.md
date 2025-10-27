# API de Monetização Genius Social – BASE44

Este projeto é uma API serverless de monetização que utiliza Node.js, Supabase e Stripe. O objetivo é fornecer funcionalidades para gerenciar pagamentos e assinaturas de usuários de forma eficiente e segura.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
api-monetizacao-genius-social
├── functions
│   ├── create-payment-intent
│   │   └── index.ts          # Função para criar uma intenção de pagamento com Stripe
│   ├── stripe-webhook
│   │   └── index.ts          # Webhook do Stripe para processar eventos de pagamento
│   └── confirm-subscription
│       └── index.ts          # Lógica para confirmar assinaturas de usuários
├── src
│   ├── lib
│   │   ├── supabaseClient.ts  # Cliente Supabase para interagir com o banco de dados
│   │   └── stripeClient.ts     # Cliente Stripe para interagir com a API do Stripe
│   ├── services
│   │   ├── payments.ts         # Funções relacionadas a pagamentos
│   │   └── subscriptions.ts     # Funções relacionadas a assinaturas
│   ├── controllers
│   │   └── index.ts            # Controladores para as rotas da API
│   ├── middlewares
│   │   └── auth.ts             # Middleware para autenticação de usuários
│   └── types
│       └── index.d.ts          # Tipos TypeScript utilizados no projeto
├── supabase
│   ├── migrations
│   │   └── README.md           # Instruções sobre como executar migrações no Supabase
│   └── functions
│       └── README.md           # Informações sobre as funções do Supabase
├── scripts
│   └── deploy.sh               # Script para automatizar o processo de deploy
├── .env.example                 # Exemplo de variáveis de ambiente
├── .gitignore                   # Arquivos e pastas a serem ignorados pelo Git
├── package.json                 # Configuração do npm
├── tsconfig.json               # Configuração do TypeScript
├── vercel.json                 # Configurações para o deploy na Vercel
└── README.md                   # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd api-monetizacao-genius-social
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Renomeie `.env.example` para `.env` e preencha com suas credenciais do Supabase e Stripe.

## Uso

- Para criar uma intenção de pagamento, utilize a função em `functions/create-payment-intent/index.ts`.
- O webhook do Stripe em `functions/stripe-webhook/index.ts` deve ser configurado no painel do Stripe para receber eventos de pagamento.
- Para confirmar assinaturas, utilize a função em `functions/confirm-subscription/index.ts`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.