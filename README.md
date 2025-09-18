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

### Pré-requisitos

- Node.js (versão 18 ou superior)
- PNPM (recomendado) ou NPM

### Instalação

```bash
# Clonar o repositório
git clone <repository-url>
cd user-list

# Instalar dependências
pnpm install

# Executar em modo de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Visualizar build de produção
pnpm preview

# Gerar site estático
pnpm generate
```

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
│   ├── useUserFilters.ts  # Lógica de filtros e busca
│   └── useBreakpoints.ts  # Utilitário de responsividade
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
- `useBreakpoints`: Fornece informações sobre breakpoints responsivos

### Componentes

Os componentes são organizados em duas categorias:

- **UI Components**: Componentes genéricos e reutilizáveis
- **Feature Components**: Componentes específicos do domínio (usuários)

#### Componente Tabs

O componente `Tabs` foi desenvolvido como um componente genérico e reutilizável com as seguintes características:

- **Múltiplas Variantes**: pills, underline, solid
- **Diferentes Tamanhos**: sm, md, lg
- **Suporte a Ícones**: SVG paths ou componentes Vue
- **Estados**: ativo, inativo, desabilitado
- **Responsivo**: Opção full-width
- **Acessibilidade**: Navegação por teclado e semântica apropriada

```vue
<UiTabs 
  v-model="activeTab" 
  :tabs="tabs"
  variant="pills"
  size="md"
  full-width
/>
```

Veja a página `/examples` para todos os casos de uso do componente.

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

## 🎨 Design System

### Cores Principais

- **Primary Blue**: `#3b82f6` (blue-500)
- **Gray Scale**: Tons de cinza do Tailwind CSS
- **Success/Error**: Estados de feedback visual

### Tipografia

- **Fonte**: Poppins (Regular, Medium, SemiBold, Bold)
- **Tamanhos**: Escala consistente do Tailwind CSS

### Responsividade

Breakpoints utilizados:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 📊 Performance e Otimização

- **SSR (Server-Side Rendering)** para melhor SEO e carregamento inicial
- **Lazy Loading** de componentes
- **Debounce** na pesquisa (implementado pelo navegador)
- **Caching** de preferências do usuário no localStorage
- **Animações CSS** otimizadas com GPU acceleration

## 🔧 Configurações

### Tailwind CSS

Configurado com:
- Tema personalizado com cores do projeto
- Font family Poppins como padrão
- Animações e transições customizadas

### Nuxt Configuration

- **SSR habilitado** para melhor performance
- **Módulos**: Tailwind CSS, Nuxt Image
- **Auto-imports** para composables e components

## 🚦 Estados da Aplicação

A aplicação gerencia diferentes estados:

- **Loading**: Spinner durante carregamento dos dados
- **Error**: Mensagem de erro com opção de retry
- **Empty**: Estado quando nenhum usuário é encontrado
- **Success**: Exibição dos dados em tabela ou cards

## 🔍 Funcionalidades de Busca

A pesquisa funciona em tempo real nos seguintes campos:
- Nome do usuário
- Email do usuário  
- Cidade do usuário

Características:
- **Case insensitive**
- **Busca parcial** (substring matching)
- **Contador de resultados**
- **Botão de limpar pesquisa**

## 📱 Responsividade

### Mobile (< 640px)
- Layout em coluna única
- Cards em stack vertical
- Inputs full-width

### Tablet (640px - 1024px)  
- Grid 2 colunas para cards
- Tabela com scroll horizontal
- Controles em linha

### Desktop (> 1024px)
- Grid até 4 colunas para cards
- Tabela completa visível
- Layout otimizado para telas grandes

## 🎯 Próximas Funcionalidades

- [ ] Paginação para grandes datasets
- [ ] Ordenação por colunas
- [ ] Filtros avançados (por cidade, domínio de email)
- [ ] Modo escuro
- [ ] Exportação de dados
- [ ] Cache offline com Service Workers

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e demonstração de habilidades técnicas.
