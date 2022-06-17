![react-version](https://img.shields.io/badge/React-v18.0.0-yellow)

# :woman_technologist: Meu Portfólio

# Sumário

- [Case](#case)
- [Seções](#secoes)
- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Organização e estruturação do projeto](#organizacao)
- [Desenvolvimento](#desenvolvimento)
- [Resultado](#resultado)

# Case <a name="case"></a>

Esta é a 3ª e mais recente versão do meu portfólio pessoal. Criado com o objetivo de apresentar um pouco sobre mim e meus conhecimentos. Além de mostrar meus projetos no decorrer de minha evolução.

# 📚 Seções <a name="secoes"></a>

- **Intro:** Nele temos uma breve apresentação e o link para o meu currículo;
- **Quem sou:** Nessa seção tenho uma descrição dizendo um pouco sobre quem sou;
- **Projetos:** Exibe alguns projetos desenvolvidos, no qual, ao clicar no respectivo projeto, abre uma página com mais informações sobre o mesmo e seu link com o código no GitHub;
- **Formação:** Nele apresentamos meus conhecimentos em algumas linguagens como o foco no front-end, cursos que fiz e também minhas informações acadêmicas.

# Tecnologias Utilizadas <a name="tecnologias"></a>

- [**React**](https://pt-br.reactjs.org/)
- [**React Hooks**](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [**React Router Dom**](https://www.npmjs.com/package/react-router-dom)
- [**Styled Components**](https://styled-components.com/)
- [**React Icons**](https://react-icons.github.io/react-icons/)
- [**React Splide**](https://splidejs.com/integration/react-splide/)
- [**AOS - Animate on scroll library**](https://michalsnik.github.io/aos/)
- [**Firebase - Cloud Firestore**](https://firebase.google.com/?hl=pt&authuser=0)
- [**Eslint - Find and fix problems**](https://eslint.org/)

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
React
Node v6.0.0^
```

- Clone o repositório com o comando **git clone**:

```
git clone https://github.com/Ariane-Brum/portfolio-pessoal-v3.0.git
```

- Entre no diretório que acabou de ser criado:

```
cd portfolio
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm run dev**:

```
npm run dev
```

# Organização e estruturação do projeto <a name="organizacao"></a>

O projeto está organizado e estruturado da seguinte forma:

```
      ├── README.md
      ├── index.html
      ├── src
      |     ├── components
      |     |       ├── About
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       |     ├── AboutIcon
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       ├── Container
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Footer
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Header
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── helpers
      |     |       |     ├── Loading
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── Head
      |     |       |       ├── index.jsx
      |     |       |     ├── data.js
      |     |       ├── Intro
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Nav
      |     |       |     ├── MenuMobile
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── NotFound
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Projects
      |     |       |     ├── ProjectItem
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Skills
      |     |       |     ├── CoursesComponent
      |     |       |       ├── CoursesItem
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── EducationComponent
      |     |       |       ├── EducationItem
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── ExperienceComponent
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── TechnologiesComponent
      |     |       |       ├── TecnologieItem
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── index.jsx
      |     |       |       ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Subtitle
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     |       ├── Typewriter
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     ├── contexts
      |     |       ├── ProjectContext.jsx
      |     ├── hooks
      |     |     ├── useMedia.js
      |     |     ├── useProject.js
      |     ├── pages
      |     |       ├── Home
      |     |       |     ├── index.jsx
      |     |       ├── Project
      |     |       |       ├── Features
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── HeaderProject
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── OtherProjects
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── ProjectInfo
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |       ├── ProjectSlide
      |     |       |         ├── index.jsx
      |     |       |       ├── Techs
      |     |       |         ├── index.jsx
      |     |       |         ├── styles.js
      |     |       |     ├── index.jsx
      |     |       |     ├── styles.js
      |     ├── services
      |     |       ├── firebase.js
      |     ├── styles
      |     |       ├── global.js
      |     ├── App.jsx
      |     ├── main.jsx
```

# Desenvolvimento <a name="desenvolvimento" ></a>

## Estilização

Para realizar a estilização, foi utilizado o framework [**Styled Components**](https://styled-components.com/).

## Icones

Os ícones utilizados foram os da biblioteca [**React Icons**](https://react-icons.github.io/react-icons/)

## Animações

Para as animações, foi utilizado a biblioteca [**AOS - Animate on scroll library**](https://michalsnik.github.io/aos/)

## Back-end

Para o back-end, foi utilizado o banco de dados NoSQL [**Firebase - Cloud Firestore**](https://firebase.google.com/?hl=pt&authuser=0)

# Resultado <a name="resultado"></a>

## Intro

![intro-port](https://user-images.githubusercontent.com/64805032/174333982-e59085cb-295d-4c21-a13b-cb6694747626.png)

## Quem sou

![about](https://user-images.githubusercontent.com/64805032/174104251-c07ce884-b26b-4d6e-bd17-4f2df0161ce4.png)

## Projetos

![projetos](https://user-images.githubusercontent.com/64805032/174104293-5e310e5e-75a6-47e8-9c8e-5959877fc41f.png)

## Formação

![formacao](https://user-images.githubusercontent.com/64805032/174104260-9d6cd05b-9016-4102-92ac-64190640cd96.png)

## Footer

![contato](https://user-images.githubusercontent.com/64805032/174104258-603af31a-6e59-4eb2-a568-3a930d6ce5cb.png)

## Page Projeto

![projeto](https://user-images.githubusercontent.com/64805032/174104273-257ad7e2-1fbe-4867-bd07-f4b0bce0d9fd.png)

## 🦄 Autor<br>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ariane-Brum">
         <img src="https://avatars.githubusercontent.com/u/64805032?v=4" width="100px;" alt="Foto de Ariane Brum no GitHub"/><br>
        <sub>
          <b>Ariane Brum</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
