# Docker Setup

## Como rodar a aplicação com Docker

1. **Build da imagem**:
```bash
docker build -t user-list-app .
```

2. **Executar o container**:
```bash
docker run -p 3000:3000 user-list-app
```

### Configuração de Variáveis de Ambiente

Para configurar variáveis de ambiente (como API URLs), você pode:

1. **No docker-compose.yml**: Descomente e configure as variáveis na seção `environment`
2. **Usando arquivo .env**: Crie um arquivo `.env` na raiz do projeto e adicione no docker-compose.yml:
```yaml
env_file:
  - .env
```

### Desenvolvimento com Hot Reload

Para desenvolvimento com hot reload, descomente as linhas de volume no `docker-compose.yml`:
```yaml
volumes:
  - .:/app
  - /app/node_modules
```

### Verificar se a aplicação está funcionando

A aplicação estará disponível em: http://localhost:3000

### Logs

Para ver os logs da aplicação:
```bash
docker-compose logs -f nuxt-app
```

### Health Check

O container inclui um health check que verifica se a aplicação está respondendo corretamente.
