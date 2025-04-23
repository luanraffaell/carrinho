# 🛒 Carrinho de Compras

Projeto simples de carrinho de compras desenvolvido com **ReactJS** e **Vite**. Consiste em uma página inicial com listagem de produtos, onde é possível adicionar itens ao carrinho e visualizar os produtos adicionados em uma página separada.

## ✨ Funcionalidades

- Listagem de produtos (consumidos via `json-server`)
- Adicionar e remover produtos do carrinho
- Visualização do carrinho com todos os itens selecionados
- Gerenciamento de estado global com **Context API**

## 🧪 Tecnologias

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Context API](https://reactjs.org/docs/context.html)
- [json-server](https://github.com/typicode/json-server)

## 🚀 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/luanraffaell/carrinho.git
cd carrinho
```
2. **Instale as dependências:**
```bash
npm install
```
3. **Inicie o json-server:**
```bash
npx json-server --watch db.json --port 3001
```
4. **Inicie a aplicação:**
```bash
npm run dev
```
Acesse no navegador: `http://localhost:5173`

**🧩 Exemplo de `db.json`**
```json
{
  "products": [
    { 
      "id": 1, 
      "title": "title...", 
      "description": "description..." ,
      "price":120,
      "cover": "imgurl"
    },
    { 
      "id": 2, 
      "title": "title 2....", 
      "description": "description2 ....",
      "price": 379.9,
      "cover": "img2url"
    }
]
}
```
