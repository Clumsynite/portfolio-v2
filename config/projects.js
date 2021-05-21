/*
  Need to add screenshots for dicord-bot
  - clumsy-bot
  - portfolio
  - bank-system-app
  - clumsy-crypto
  - clumsy-messenger-app
  - react-markdown-notes
  - fcc-merng-app
  - short-links
*/

const descriptionClass = "project-description";
const descriptionElement = "div";

const api = {
  blog: {
    title: "Blog-API",
    desc: `<${descriptionElement} class=${descriptionClass} >RESTful API built with endpoints for authentication and database management.<br/><a class='link' target='_blank'  rel="noreferrer"  href='https://github.com/Clumsynite/blog-read' data-title='Blog-Read' data-content='Link to Blog-Read client'>Blog-Read</a> and <a class='link' target='_blank'  rel="noreferrer"  href='https://github.com/Clumsynite/blog-write'>Blog-Write</a> work as Frontend for this API.</${descriptionElement}>`,
    purpose: ["CRUD Operations on Blog", "Authentication and Session handling"],
    repo: "https://github.com/Clumsynite/blog-api",
    live: "https://clumsy-blog.herokuapp.com/",
    png: "/images/blog-api.png",
    languages: ["js", "node", "pug", "mongodb", "passport", "express"],
  },
  bank: {
    title: "Bank-System-Api",
    desc: `<${descriptionElement} class=${descriptionClass} >
        A simple banking system, with a database <i>Bank</i> with 2 tables user & accounts. Users table will have all users(bankers & customers).Accounts table will have all the entries of cash deposited & withdrawn.
      </${descriptionElement}>`,
    purpose: [
      "Handle SQL database with 2 tables user and accounts",
      "Manage authentication by two types of user: Banker & Customer, where banker has admin privileges",
      "Handle account transactions and jwt tokens",
    ],
    repo: "http://github.com/clumsynite/bank-system-api",
    live: "https://bank-system-api.herokuapp.com/",
    languages: ["js", "sql", "express", "node", "passport"],
  },
  messenger: {
    title: "Clumsy-Messenger-Api",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Api for Clumsy-messenger-app.
      </${descriptionElement}>`,
    purpose: [
      "Handle Socket server",
      "Handle Authentication",
      "Manipulate mongodb for messages and user",
    ],
    repo: "https://github.com/Clumsynite/clumsy-messenger-api",
    live: "https://clumsy-messenger.herokuapp.com",
    languages: ["js", "express", "node", "postman", "mongodb", "socket"],
  },
  merng: {
    title: "Fcc-Merng-Api",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Built after following <a href="https://www.youtube.com/watch?v=n1mdAPFq2Os" target="_blank">this</a> course video.
      </${descriptionElement}>`,
    purpose: ["Handle mongodb and grahql for mutations and queries"],
    repo: "https://github.com/Clumsynite/fcc-merng-api",
    live: "https://fcc-merng-api.herokuapp.com/",
    languages: ["js", "express", "node", "graphql", "apollo", "mongodb"],
  },
};

const projects = [
  {
    title: "Short-Links",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Another Url Shortener
      </${descriptionElement}>`,
    purpose: ["Message any registered user"],
    png: "/images/short-links.png",
    repo: "https://github.com/Clumsynite/short-links",
    live: "https://vercel.com/clumsynite/short-links/",
    languages: ["react", "next", "ts", "ant", "mongodb"],
  },
  {
    title: "Fcc-Merng-App",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Built after following <a href="https://www.youtube.com/watch?v=n1mdAPFq2Os" target="_blank">this</a> course video.
      </${descriptionElement}>`,
    purpose: ["Create posts", "Like and comment on other people's posts"],
    png: "/images/fcc-merng-app.png",
    repo: "https://github.com/Clumsynite/fcc-merng-app",
    live: "https://fcc-merng.netlify.app/",
    languages: ["react", "semanticui", "graphql", "apollo"],
    api: api.merng,
  },
  {
    title: "Markdown-Notes",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Create Notes in Markdown and save them to localStorage. Built in React.
      </${descriptionElement}>`,
    purpose: [
      "Add notes in markdown",
      "saves data to localStorage",
      "Change background color for notes",
    ],
    repo: "https://github.com/Clumsynite/react-markdown-notes",
    live: "http://clumsynite.github.io/react-markdown-notes",
    languages: ["react", "ant", "markdown"],
  },
  {
    title: "Clumsy-Messenger-App",
    desc: `<${descriptionElement} class=${descriptionClass}>
        A real-time messaging app. Built with sockets.
      </${descriptionElement}>`,
    purpose: [
      "Message any registered user",
      "Sends realtime messages",
      "changes online status on disconnect",
    ],
    repo: "https://github.com/Clumsynite/clumsy-messenger-app",
    live: "https://clumsy-messenger.netlify.app",
    languages: ["react", "redux", "socket", "bootstrap"],
    api: api.messenger,
  },
  {
    title: "Clumsy-Crypto",
    desc: `<${descriptionElement} class=${descriptionClass} >
        A Progressive Web App which displays Realtime Price information about BTC, ETH and LTC
      </${descriptionElement}>`,
    purpose: [
      "Checking out how a progressive web app works",
      "Get realtime rates of BTC, ETH, and LTC",
    ],
    repo: "https://github.com/Clumsynite/clumsy-crypto",
    live: "https://clumsynite.github.io/clumsy-crypto/",
    languages: ["react", "bootstrap", "pwa"],
  },
  {
    title: "Bank-System-App",
    desc: `<${descriptionElement} class=${descriptionClass} >
        A simple banking system, with a database <i>Bank</i> with 2 tables user & accounts. Users table will have all users(bankers & customers).Accounts table will have all the entries of cash deposited & withdrawn.
      </${descriptionElement}>`,
    purpose: [
      "Frontend to authenticate banker & customer",
      "Handle login state from frontend",
      "render transactions as table",
      "Allow banker & customer to manage transactions",
    ],
    repo: "http://github.com/clumsynite/bank-system-app",
    live: "https://bank-system-app.netlify.app/",
    languages: ["vue", "bootstrap"],
    api: api.bank,
  },
  {
    title: "Portfolio",
    desc: `<${descriptionElement} class=${descriptionClass} >
        My portfolio to highlight my skills and projects.
      </${descriptionElement}>`,
    purpose: ["Built on react to show the projects I made"],
    repo: "https://github.com/Clumsynite/portfolio",
    live: "https://rishabhpathak.netlify.app/",
    languages: ["react", "bootstrap", "css"],
  },
  {
    title: "Clumsy-bot",
    desc: `<${descriptionElement} class=${descriptionClass} >
      A discord bot built to try the library, discord.js.
    </${descriptionElement}>`,
    purpose: [
      "User can send gifs though chat by using the keys: <code>!gif <name></code>",
      "The word <code>Bye</code> <i>(case insensitive)</i>, in any sentence or as a single word will return this https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722 gif",
      "!server will return the server's name and Total memebers in it",
    ],
    repo: "https://github.com/Clumsynite/clumsy-bot",
    live: "https://discord.com/oauth2/authorize?client_id=769546560089620550&scope=bot",
    languages: ["js", "discord"],
  },
  {
    title: "Blog-Read",
    desc: `<${descriptionElement} class=${descriptionClass} >
      Frontend built to <i>read blog posts</i>.
      <br/>
      Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'  rel="noreferrer" data-title='Blog-Read' data-content='Link to Blog-Read client' >Blog API</a> for authentication and database management.
    </${descriptionElement}>`,
    purpose: [
      "User can Read Blog posts by other people",
      "User can comment on Blog Posts",
      "User can view Post Author's Profile",
    ],
    repo: "https://github.com/Clumsynite/blog-read",
    live: "https://clumsynite.github.io/blog-read/",
    png: "/images/blog-read.png",
    languages: ["html", "js", "bootstrap", "react"],
    api: api.blog,
  },
  {
    title: "Blog-Write",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Frontend built to <i>make new posts</i>.<br/>Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'  rel="noreferrer" >Blog API</a> for authentication and database management.
      </${descriptionElement}>`,
    purpose: [
      "User can create new blog posts",
      "User can manage their posts and comments",
    ],
    repo: "https://github.com/Clumsynite/blog-write",
    live: "https://clumsynite.github.io/blog-write/",
    png: "/images/blog-write.png",
    languages: ["html", "js", "bootstrap", "react"],
    api: api.blog,
  },
  {
    title: "Inventory App",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Crud App for inventory Management.<br/>Built in order to practice databse management by trying out basic CRUD operations on MongoDB.
      </${descriptionElement}>`,
    purpose: [
      "Trying out CRUD operations using MongoDB",
      "Practe routing using Node & Express",
    ],
    repo: "https://github.com/Clumsynite/inventory-app",
    live: "https://clumsy-inventory.herokuapp.com/",
    png: "/images/inventory-app.png",
    languages: ["js", "bootstrap", "node", "pug", "mongodb", "express"],
  },
  {
    title: "React Shopping Cart",
    desc: `<${descriptionElement} class=${descriptionClass} >
        A dummy store built to practice routing in react.
      </${descriptionElement}>`,
    purpose: ["Practice using react-router-dom library"],
    repo: "https://github.com/Clumsynite/react-shopping-cart",
    live: "https://clumsynite.github.io/react-shopping-cart/",
    png: "/images/shopping-cart.png",
    languages: ["html", "js", "bootstrap", "react"],
  },
  {
    title: "Anon Discussion",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Anon Discussions is an anonymous message board, where messages can be viewed by anyone who visits the site but, they'll not be able to see who posted the message.
      </${descriptionElement}>`,
    purpose: [
      "Building an anonymous (member-only) forum",
      "Practicing authentication using PassportJS",
      "Trying out MongoDB to store messages and other CRUD operations",
    ],
    repo: "https://github.com/Clumsynite/member-only",
    live: "https://anon-discussions.herokuapp.com/",
    png: "/images/anon-discussions.png",
    languages: ["js", "bootstrap", "node", "pug", "mongodb", "express"],
  },
  {
    title: "React Memory Card",
    desc: `<${descriptionElement} class=${descriptionClass} >
        This is an avengers themed mini game, where the user will have to click a card from the provided card list. When clicked, your score will increase by one and the cards will be shuffled.
      </${descriptionElement}>`,
    purpose: [
      "Practice React hooks for the first time",
      "Practice maintaining state across components",
    ],
    repo: "https://github.com/Clumsynite/react-memory-card",
    live: "https://clumsynite.github.io/react-memory-card",
    png: "/images/memory-card.png",
    languages: ["html", "js", "bootstrap", "react"],
  },
  {
    title: "React CV Project",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Simple CV Application which'll render your CV detail as cards.
      </${descriptionElement}>`,
    purpose: [
      "Practice maintaining state across components",
      "Form validation and manipulation",
    ],
    repo: "https://github.com/Clumsynite/react-cv-project",
    live: "https://clumsynite.github.io/react-cv-project/",
    png: "/images/cv-project.png",
    languages: ["html", "js", "bootstrap", "react"],
  },
  {
    title: "Mini Message Board",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Simple Express App built to practice routes and sending data across routes.
      </${descriptionElement}>`,
    purpose: [
      "Pactice Routes in express",
      "Try to successfully render form data",
    ],
    repo: "https://github.com/Clumsynite/mini-message-board",
    live: "https://mini-msg-board.herokuapp.com/",
    png: "/images/mini-messageboard.png",
    languages: ["js", "bootstrap", "node", "pug", "express"],
  },
  {
    title: "Weather App",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Weather APp with Gif backgrounds, which change according to the weather.
      </${descriptionElement}>`,
    purpose: [
      "Use OpenWeatherMapAPI ro fetch weather details",
      "Use Giphy API to fetch gif according to the weather",
    ],
    repo: "https://github.com/Clumsynite/weather-app",
    live: "https://clumsynite.github.io/weather-app/",
    png: "/images/weather-app.png",
    languages: ["html", "css", "js", "vue"],
  },
  {
    title: "Vue Library",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Library APP built to keep a record of the user's books
      </${descriptionElement}>`,
    purpose: ["Practice Vue Framework", "Use localStorage to store records."],
    repo: "https://github.com/Clumsynite/vue-library",
    live: "https://clumsynite.github.io/vue-library/",
    png: "/images/vue-library.png",
    languages: ["html", "css", "js", "vue"],
  },
  {
    title: "React Task List",
    desc: `<${descriptionElement} class=${descriptionClass} >
        React app built to practice react basics
      </${descriptionElement}>`,
    purpose: [
      "Practice state manipulation",
      "Practice event handling in React",
    ],
    repo: "https://github.com/Clumsynite/react-task-list",
    live: "https://clumsynite.github.io/react-task-list/",
    png: "/images/task-list.png",
    languages: ["html", "js", "bootstrap", "react"],
  },
  {
    title: "Pomodoro Clock",
    desc: `<${descriptionElement} class=${descriptionClass} >
        Pomodoro Clock, which works on the concept of <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" class="link">Pomodoro Technique</a>.
      </${descriptionElement}>`,
    purpose: ["FreeCodeCamp's Certification Project"],
    repo: "https://github.com/Clumsynite/js-pomodoro",
    live: "https://clumsynite.github.io/js-pomodoro/",
    png: "/images/pomodoro-clock.png",
    languages: ["html", "css", "js", "react"],
  },
  {
    title: "Restaurant Page",
    desc: `<${descriptionElement} class=${descriptionClass} >
        A demo Restaurant page. An SPA which uses modules to manipulate DOM using JS. <br/><code>No Framework used</code>
      </${descriptionElement}>`,
    purpose: [
      "Practice Factory functions",
      "Practice building apps using Webpack",
      "Depolying apps which are built using webpack",
    ],
    repo: "https://github.com/Clumsynite/js-restaurant-page",
    live: "https://clumsynite.github.io/js-restaurant-page",
    png: "/images/restaurant-page.png",
    languages: ["html", "css", "js", "webpack"],
  },
  {
    title: "JS TicTacToe",
    desc: `<${descriptionElement} class=${descriptionClass} >
        <b>Tic-Tac-Toe</b> <span class='badge badge-pill badge-light'>AKA</span> <i>X and O</i>, built using Javascript.
      </${descriptionElement}>`,
    purpose: ["Practice Factory functions", "Practice Module Pattern"],
    repo: "https://github.com/Clumsynite/js-tictactoe",
    live: "https://clumsynite.github.io/js-tictactoe",
    png: "/images/js-tictactoe.png",
    languages: ["html", "css", "js"],
  },
];

export default projects;
