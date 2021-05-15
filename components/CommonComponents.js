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
