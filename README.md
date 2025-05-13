# 📖 Pokédex

Bem-vindo à **Pokédex**, um aplicativo web desenvolvido em **React** que consome a **PokéAPI** para exibir informações detalhadas sobre Pokémon.  
O propósito desta aplicação é representar uma Pokédex interativa, onde o usuário pode pesquisar e explorar informações de Pokémon, simulando uma experiência semelhante àquela apresentada nos jogos da franquia. É um exercício do curso de programação **DevEmDobro**, no qual foram exploradas boas práticas de desenvolvimento e decisões de arquitetura para promover um código modular, manutenível e escalável.

## [Vizualize o projeto clicando aqui](https://yudiyamada.github.io/pokedex/)

## 🔥 Funcionalidades

- **Buscar Pokémon por nome ou ID:** Utilize a barra de pesquisa para encontrar um Pokémon específico.
- **Listagem de Pokémon:** Exibe os 10 primeiros Pokémon recuperados da PokéAPI, com imagem, nome e tipos.
- **Carregar mais Pokémon:** Ao clicar no botão "Carregar mais", mais 10 Pokémon são adicionados à lista.
- **Página de Detalhes:** Cada Pokémon é clicável, levando o usuário a uma página com:
  - Imagem
  - Nome
  - Lista de movimentos
  - Lista de habilidades (com descrição)
  - Tipos
- **Alternância de Tema:** Permite trocar entre os modos claro e escuro, melhorando a experiência visual.

---

## 🛠 Ferramentas Utilizadas e Justificativas

- **React 19:** Escolhido pela sua robustez, facilidade de criar interfaces dinâmicas e componenteização, permitindo um desenvolvimento modular e escalável.
- **Axios:** Utilizado para realizar requisições HTTP de forma simples e eficiente à PokéAPI.
- **Styled Components:** Permite a criação de estilos encapsulados dentro dos componentes, evitando conflitos globais e facilitando a manutenção do código CSS.
- **React Router DOM:** Facilita a navegação entre páginas, possibilitando uma experiência de Single Page Application (SPA) com rotas declarativas.
- **Context API:** Usado para gerenciamento de estado global (ex.: tema claro/escuro), simplificando a comunicação entre componentes sem a necessidade de prop drilling.

---

## 💡 Decisões Adotadas Durante o Desafio

- **Componente e Estrutura Modular:**  
  A aplicação foi dividida em componentes menores (como `PokemonCard`, `PokemonSearch`, `Header`, `Footer`) para facilitar a manutenção, testes e reutilização. Essa abordagem garante que cada parte da interface tenha responsabilidade única.
  
- **Uso do Styled Components:**  
  Optou-se pelo Styled Components para facilitar a aplicação de temas dinâmicos (modo claro/escuro) e garantir que os estilos fiquem isolados ao componente, promovendo um código mais limpo e escalável.
  
- **Gerenciamento de Tema com Context API:**  
  Para simplificar a troca entre os temas, a Context API foi adotada, permitindo que o estado do tema fosse compartilhado globalmente sem complexidade.
  
- **React Router como Solução de Roteamento:**  
  A utilização do React Router DOM possibilitou uma estrutura clara e intuitiva para a navegação entre a listagem de Pokémon e a página de detalhes, facilitando a experiência do usuário.
  
- **Integração com a PokéAPI:**  
  A escolha da PokéAPI permitiu desenvolver uma aplicação real e interativa, oferecendo dados ricos sobre Pokémon para explorar e manipular, o que foi fundamental para o desafio.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clonar o Repositório**
   ```sh
   git clone https://github.com/YudiYamada/pokedex.git
   cd pokedex
   ```

2. **Instalar Dependências**
   ```sh
   npm install
   # ou
   yarn install
   ```

3. **Rodar o Projeto em Desenvolvimento**
   ```sh
   npm run dev
   # ou
   yarn dev
   ```
   O projeto estará disponível em `http://localhost:5173`.

4. **Construir para Produção**
   ```sh
   npm run build
   # ou
   yarn build
   ```

5. **Preview do Projeto em Produção**
   ```sh
   npm run preview
   # ou
   yarn preview
   ```

---

## 🔌 Tecnologias Utilizadas

- **React 19**
- **Axios**
- **Styled Components**
- **React Router DOM**
- **Context API**

Essas ferramentas foram escolhidas por sua eficiência, robustez e potencial de oferecer uma experiência de desenvolvimento moderna e escalável.

---

## 👨‍💻 Autor

Desenvolvido por [Yudi Yamada](https://github.com/YudiYamada)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)  
[![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/YudiYamada)

---

## 📜 Licença

Este projeto é open-source e pode ser utilizado e modificado livremente.  
Caso queira contribuir, sinta-se à vontade para enviar pull requests!
