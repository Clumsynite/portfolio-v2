import * as _ from "lodash";
import { Popup, Icon } from "./CommonComponents";

const LanguageIcon = ({ language, size, dark, inline }) =>
  _.hasIn(languages, language) && (
    <Popup content={_.get(languages, `${language}.name`)} dark={dark}>
      <Icon
        name={_.get(
          languages,
          `${language}.icon`,
          "ant-design:exclamation-circle-outlined"
        )}
        inline={inline ? null : "false"}
        size={size}
      />
    </Popup>
  );

export default LanguageIcon;

const languages = {
  html: { icon: "logos:html-5", name: "HTML" },
  css: { icon: "logos:css-3", name: "CSS" },
  js: { icon: "logos:javascript", name: "Javascript" },
  ts: { icon: "logos:typescipt-icon", name: "Typescript" },
  react: { icon: "logos:react", name: "React" },
  vue: { icon: "logos:vue", name: "Vue" },
  node: { icon: "logos:nodejs", name: "NodeJS" },
  bootstrap: { icon: "logos:bootstrap", name: "Bootstrap" },
  jquery: { icon: "logos:jquery", name: "jQuery" },
  pug: { icon: "logos:pug", name: "Pug" },
  mongodb: { icon: "logos:mongodb", name: "MongoDB" },
  webpack: { icon: "logos:webpack", name: "Webpack" },
  git: { icon: "logos:git", name: "git" },
  github: { icon: "logos:github-icon", name: "Github" },
  npm: { icon: "logos:npm", name: "npm" },
  firebase: { icon: "logos:firebase", name: "Firebase" },
  vscode: { icon: "vscode-icons:file-type-vscode", name: "Visual Studio Code" },
  photoshop: {
    icon: "vscode-icons:file-type-photoshop",
    name: "Adobe Photoshop",
  },
  ubuntu: { icon: "logos:ubuntu", name: "Linux Ubuntu" },
  next: { icon: "logos:nextjs-icon", name: "NextJS" },
  semanticui: { icon: "logos:semantic-ui", name: "Semantic UI" },
  graphql: { icon: "logos:graphql", name: "GraphQL" },
  socket: { icon: "logos:io", name: "Socket IO" },
  redux: { icon: "logos:redux", name: "Redux" },
  markdown: { icon: "logos:markdown", name: "Markdown" },
  express: { icon: "logos:express", name: "Express Server" },
  reactNative: { icon: "logos:expo", name: "React Native - Expo" },
  discord: { icon: "logos:discord", name: "Dicord" },
  sql: { icon: "cib:mysql", name: "SQL" },
  passport: { icon: "logos:passport", name: "Passport JS for Authentication" },
  pwa: { icon: "ion:logo-pwa", name: "Progressive Web Apps (PWA)" },
  ant: { icon: "logos:ant-design", name: "Ant Design" },
  apollo: { icon: "logos:apollostack", name: "Apollo GraphQl" },
};
