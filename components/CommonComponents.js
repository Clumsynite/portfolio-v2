import { Popup as SemanticPopup } from "semantic-ui-react";

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
