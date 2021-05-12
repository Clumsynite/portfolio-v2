const BlogReadPNG = "/images/blog-read.png";
const BlogReadGIF = "/images/blog-read.gif";
const BlogWritePNG = "/images/blog-write.png";
const BlogWriteGIF = "/images/blog-write.gif";
const BlogAPIPNG = "/images/blog-api.png";
const BlogAPIGIF = "/images/blog-api.gif";
const InventoryAppPNG = "/images/inventory-app.png";
const InventoryAppGIF = "/images/inventory-app.gif";
const ShoppingCartPNG = "/images/shopping-cart.png";
const ShoppingCartGIF = "/images/shopping-cart.gif";
const AnonDiscussionsPNG = "/images/anon-discussions.png";
const AnonDiscussionsGIF = "/images/anon-discussions.gif";
const MemoryCardPNG = "/images/memory-card.png";
const MemoryCardGIF = "/images/memory-card.gif";
const CVProjectPNG = "/images/cv-project.png";
const CVProjectGIF = "/images/cv-project.gif";
const MiniMsgPNG = "/images/mini-messageboard.png";
const MiniMsgGIF = "/images/mini-messageboard.gif";
const WeatherAppPNG = "/images/weather-app.png";
const WeatherAppGIF = "/images/weather-app.gif";
const VueLibraryPNG = "/images/vue-library.png";
const VueLibraryGIF = "/images/vue-library.gif";
const JsTictactoePNG = "/images/js-tictactoe.png";
const JsTictactoeGIF = "/images/js-tictactoe.gif";
const TaskListPNG = "/images/task-list.png";
const TaskListGIF = "/images/task-list.gif";
const PomodoroClockPNG = "/images/pomodoro-clock.png";
const PomodoroClockGIF = "/images/pomodoro-clock.gif";
const RestaurantPagePNG = "/images/restaurant-page.png";
const RestaurantPageGIF = "/images/restaurant-page.gif";

const projects = [
  {
    title: "Blog-Read",
    desc: `
    <p>
      Frontend built to <i>read blog posts</i>.
      <br/>
      Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'>Blog API</a> for authentication and database management.
    </p>`,
    purpose: [
      "User can Read Blog posts by other people",
      "User can comment on Blog Posts",
      "User can view Post Author's Profile",
    ],
    repo: "https://github.com/Clumsynite/blog-read",
    live: "https://clumsynite.github.io/blog-read/",
    png: BlogReadPNG,
    gif: BlogReadGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-Write",
    desc: `<p>
        Frontend built to <i>make new posts</i>.<br/>Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'>Blog API</a> for authentication and database management.
      </p>`,
    purpose: [
      "User can create new blog posts",
      "User can manage their posts and comments",
    ],
    repo: "https://github.com/Clumsynite/blog-write",
    live: "https://clumsynite.github.io/blog-write/",
    png: BlogWritePNG,
    gif: BlogWriteGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-API",
    desc: `<p>RESTful API built with endpoints for authentication and database management.<br/><a class='link' target='_blank' href='https://github.com/Clumsynite/blog-read'>Blog-Read</a> and <a class='link' target='_blank' href='https://github.com/Clumsynite/blog-write'>Blog-Write</a> work as Frontend for this API.</p>`,
    purpose: ["CRUD Operations on Blog", "Authentication and Session handling"],
    repo: "https://github.com/Clumsynite/blog-api",
    live: "https://clumsy-blog.herokuapp.com/",
    png: BlogAPIPNG,
    gif: BlogAPIGIF,
    languages: {
      html: true,
      js: true,
      node: true,
      pug: true,
      mongo: true,
    },
  },
  {
    title: "Inventory App",
    desc: `<p>
        Crud App for inventory Management.<br/>Built in order to practice databse management by trying out basic CRUD operations on MongoDB.
      </p>`,
    purpose: [
      "Trying out CRUD operations using MongoDB",
      "Practe routing using Node & Express",
    ],
    repo: "https://github.com/Clumsynite/inventory-app",
    live: "https://clumsy-inventory.herokuapp.com/",
    png: InventoryAppPNG,
    gif: InventoryAppGIF,
    languages: {
      js: true,
      bootstrap: true,
      node: true,
      pug: true,
      mongo: true,
    },
  },
  {
    title: "React Shopping Cart",
    desc: `
      <p>
        A dummy store built to practice routing in react.
      </p>`,
    purpose: ["Practice using react-router-dom library"],
    repo: "https://github.com/Clumsynite/react-shopping-cart",
    live: "https://clumsynite.github.io/react-shopping-cart/",
    png: ShoppingCartPNG,
    gif: ShoppingCartGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Anon Discussion",
    desc: `
      <p>
        Anon Discussions is an anonymous message board, where messages can be viewed by anyone who visits the site but, they'll not be able to see who posted the message.
      </p>`,
    purpose: [
      "Building an anonymous (member-only) forum",
      "Practicing authentication using PassportJS",
      "Trying out MongoDB to store messages and other CRUD operations",
    ],
    repo: "https://github.com/Clumsynite/member-only",
    live: "https://anon-discussions.herokuapp.com/",
    png: AnonDiscussionsPNG,
    gif: AnonDiscussionsGIF,
    languages: {
      js: true,
      bootstrap: true,
      node: true,
      pug: true,
      mongo: true,
    },
  },
  {
    title: "React Memory Card",
    desc: `
      <p>
        This is an avengers themed mini game, where the user will have to click a card from the provided card list. When clicked, your score will increase by one and the cards will be shuffled.
      </p>`,
    purpose: [
      "Practice React hooks for the first time",
      "Practice maintaining state across components",
    ],
    repo: "https://github.com/Clumsynite/react-memory-card",
    live: "https://clumsynite.github.io/react-memory-card",
    png: MemoryCardPNG,
    gif: MemoryCardGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "React CV Project",
    desc: `
      <p>
        Simple CV Application which'll render your CV detail as cards.
      </p>`,
    purpose: [
      "Practice maintaining state across components",
      "Form validation and manipulation",
    ],
    repo: "https://github.com/Clumsynite/react-cv-project",
    live: "https://clumsynite.github.io/react-cv-project/",
    png: CVProjectPNG,
    gif: CVProjectGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Mini Message Board",
    desc: `
      <p>
        Simple Express App built to practice routes and sending data across routes.
      </p>`,
    purpose: [
      "Pactice Routes in express",
      "Try to successfully render form data",
    ],
    repo: "https://github.com/Clumsynite/mini-message-board",
    live: "https://mini-msg-board.herokuapp.com/",
    png: MiniMsgPNG,
    gif: MiniMsgGIF,
    languages: {
      js: true,
      bootstrap: true,
      node: true,
      pug: true,
    },
  },
  {
    title: "Weather App",
    desc: `
      <p>
        Weather APp with Gif backgrounds, which change according to the weather.
      </p>`,
    purpose: [
      "Use OpenWeatherMapAPI ro fetch weather details",
      "Use Giphy API to fetch gif according to the weather",
    ],
    repo: "https://github.com/Clumsynite/weather-app",
    live: "https://clumsynite.github.io/weather-app/",
    png: WeatherAppPNG,
    gif: WeatherAppGIF,
    languages: {
      html: true,
      css: true,
      js: true,
      vue: true,
    },
  },
  {
    title: "Vue Library",
    desc: `
      <p>
        Library APP built to keep a record of the user's books
      </p>`,
    purpose: ["Practice Vue Framework", "Use localStorage to store records."],
    repo: "https://github.com/Clumsynite/vue-library",
    live: "https://clumsynite.github.io/vue-library/",
    png: VueLibraryPNG,
    gif: VueLibraryGIF,
    languages: {
      html: true,
      css: true,
      js: true,
      vue: true,
    },
  },
  {
    title: "React Task List",
    desc: `
      <p>
        React app built to practice react basics
      </p>`,
    purpose: [
      "Practice state manipulation",
      "Practice event handling in React",
    ],
    repo: "https://github.com/Clumsynite/react-task-list",
    live: "https://clumsynite.github.io/react-task-list/",
    png: TaskListPNG,
    gif: TaskListGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Pomodoro Clock",
    desc: `
      <p>
        Pomodoro Clock, which works on the concept of <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" class="link">Pomodoro Technique</a>.
      </p>`,
    purpose: ["FreeCodeCamp's Certification Project"],
    repo: "https://github.com/Clumsynite/js-pomodoro",
    live: "https://clumsynite.github.io/js-pomodoro/",
    png: PomodoroClockPNG,
    gif: PomodoroClockGIF,
    languages: { html: true, css: true, js: true, react: true },
  },
  {
    title: "Restaurant Page",
    desc: `
      <p>
        A demo Restaurant page. An SPA which uses modules to manipulate DOM using JS. <br/><code>No Framework used</code>
      </p>`,
    purpose: [
      "Practice Factory functions",
      "Practice building apps using Webpack",
      "Depolying apps which are built using webpack",
    ],
    repo: "https://github.com/Clumsynite/js-restaurant-page",
    live: "https://clumsynite.github.io/js-restaurant-page",
    png: RestaurantPagePNG,
    gif: RestaurantPageGIF,
    languages: {
      html: true,
      css: true,
      js: true,
      webpack: true,
    },
  },
  {
    title: "JS TicTacToe",
    desc: `
      <p>
        <b>Tic-Tac-Toe</b> <span class='badge badge-pill badge-light'>AKA</span> <i>X and O</i>, built using Javascript.
      </p>`,
    purpose: ["Practice Factory functions", "Practice Module Pattern"],
    repo: "https://github.com/Clumsynite/js-tictactoe",
    live: "https://clumsynite.github.io/js-tictactoe",
    png: JsTictactoePNG,
    gif: JsTictactoeGIF,
    languages: {
      html: true,
      css: true,
      js: true,
    },
  },
];

export default projects;
