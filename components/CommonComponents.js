import { Card, Image, Popup as SemanticPopup } from "semantic-ui-react";
import Interweave from 'interweave'

export const Popup = ({ dark, content, children }) => (
  <SemanticPopup trigger={children} content={content} inverted={dark} />
);

export const Icon = ({ name, inline, size, ...rest }) => (
  <span
    className="iconify"
    data-icon={name}
    data-inline={inline ? null : "false"}
    data-width={size}
    data-height={size}
    {...rest}
  ></span>
);

export const ExtLink = ({ to, name, icon, title, dark, ...rest }) => (
  <Popup content={title} dark={dark}>
    <a href={to} target="_blank" rel="noreferrer" {...rest}>
      {icon}
      {name}
    </a>
  </Popup>
);

export const ProjectCard = ({ project, dark }) => {
  return (
    <Card
      color={dark ? "black" : null}
      onClick={() => console.log(project)}
      raised={false}
      link={false}
    >
      {project?.png && <Image src={project.png} wrapped ui={false} />}
      <Card.Content>
        <Card.Header>{project.title}</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          <Interweave content={project.desc} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
};
