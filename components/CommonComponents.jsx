import React from "react";
import { Popup as SemanticPopup } from "semantic-ui-react";
import { string, number, bool, node, element } from "prop-types";

export const Popup = ({ dark, content, children }) => (
  <SemanticPopup trigger={children} content={content} inverted={dark} />
);

Popup.propTypes = {
  dark: bool.isRequired,
  content: node.isRequired,
  children: element.isRequired,
};

export const Icon = ({ name, inline, size, ...rest }) => (
  <span
    className="iconify"
    data-icon={name}
    data-inline={inline ? null : "false"}
    data-width={size}
    data-height={size}
    {...rest}
  />
);

Icon.propTypes = {
  name: string.isRequired,
  inline: bool,
  size: number.isRequired,
};
Icon.defaultProps = {
  inline: false,
};

export const ExtLink = ({ to, name, icon, title, dark, ...rest }) => (
  <Popup content={title} dark={dark}>
    <a href={to} target="_blank" rel="noreferrer" {...rest} title={title}>
      {icon}
      {name}
    </a>
  </Popup>
);

ExtLink.propTypes = {
  to: string.isRequired,
  name: node.isRequired,
  icon: node,
  title: string.isRequired,
  dark: bool.isRequired,
};
ExtLink.defaultProps = {
  icon: null,
};
