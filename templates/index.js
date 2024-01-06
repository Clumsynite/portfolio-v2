import getUserHTML from "./helper/userHTML";
import getSelfHTML from "./helper/selfHtml";

const template = (name, email, message, website, dark) => {
  const content = `name: ${name}\n email: ${email}\n message: ${message} ${dark}`;

  const userHTML = getUserHTML(name, email, message, website, dark);
  const selfHTML = getSelfHTML(name, email, message, website, dark);

  return { content, selfHTML, userHTML };
};

export default template