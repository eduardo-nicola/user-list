# User List - Sistema de Listagem de Usuários

Uma aplicação Vue.js 3 com Nuxt.js que consome a API pública JSONPlaceholder para exibir uma lista de usuários com funcionalidades de pesquisa e alternância de visualização.

## ✨ Funcionalidades

- 📊 **Visualização de Dados**: Lista usuários com nome, email e cidade
- 🔍 **Pesquisa em Tempo Real**: Filtragem instantânea por nome, email ou cidade
- 🔄 **Alternância de Visualização**: Switch entre tabela e cards
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido com SSR
- 🎨 **UI Moderna**: Design clean com animações suaves
- 🚀 **TypeScript**: Tipagem completa para melhor DX

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** com Composition API
- **Nuxt.js** para SSR e funcionalidades avançadas
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **JSONPlaceholder API** como fonte de dados
- **Poppins Font** para tipografia

## 🚀 Como Executar

### Opção 1: Docker (Recomendado)

#### Pré-requisitos
- Docker instalado

#### Executar com Docker

```bash
# Clonar o repositório
git clone <repository-url>
cd user-list

# Build da imagem
docker build -t user-list-app .

# Executar o container
docker run -p 3000:3000 user-list-app
```

#### Usando docker-compose (alternativo)

```bash
# Build e executar com docker-compose
docker-compose up --build

# Ou em background
docker-compose up -d --build
```

### Opção 2: Desenvolvimento Local

#### Pré-requisitos
- Node.js (versão 22 ou superior)
- PNPM

#### Instalação

```bash
# Instalar dependências
pnpm install

# Executar em modo de desenvolvimento
pnpm dev
```

**A aplicação estará disponível em `http://localhost:3000`**


## 📁 Estrutura do Projeto

```
├── assets/
│   ├── css/           # Estilos globais e fontes
│   └── fonts/         # Arquivos de fonte Poppins
├── components/
│   ├── ui/            # Componentes UI genéricos
│   │   ├── LoadingSpinner.vue
│   │   ├── ErrorMessage.vue
│   │   ├── SearchInput.vue
│   │   └── Tabs.md
│   └── users/         # Componentes específicos de usuários
│       ├── UserTable.vue
│       └── UserCards.vue
├── composables/
│   ├── useUsers.ts        # Lógica de consumo da API
│   └── useUserFilters.ts  # Lógica de filtros e busca
├── layouts/
│   └── default.vue    # Layout padrão da aplicação
├── pages/
│   ├── index.vue      # Página principal - Lista de usuários
│   └── examples.vue   # Página de exemplos dos componentes UI
├── types/
│   └── user.ts        # Definições de tipos TypeScript
└── public/            # Arquivos estáticos
```

## 🏗️ Arquitetura e Padrões

### Composables

O projeto utiliza o padrão de **Composables** para reutilização de lógica:

- `useUsers`: Gerencia o estado e fetching dos usuários
- `useUserFilters`: Implementa a funcionalidade de pesquisa e filtros


### Componentes

Os componentes são organizados em duas categorias:

- **UI Components**: Componentes genéricos e reutilizáveis
- **Feature Components**: Componentes específicos do domínio (usuários)

### Tipagem TypeScript

Interfaces bem definidas garantem type safety:

```typescript
interface User {
  id: number
  name: string
  email: string
  address: {
    city: string
    // ... outros campos
  }
  // ... outros campos
}

interface UserListItem {
  id: number
  name: string
  email: string
  city: string
}
```

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e demonstração de habilidades técnicas.
