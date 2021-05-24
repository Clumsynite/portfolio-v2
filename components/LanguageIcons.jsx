import React from "react";
import * as _ from "lodash";
import { string, bool, number } from "prop-types";
import { Popup, Icon } from "./CommonComponents";

import languages from "../config/languages";

const LanguageIcon = ({ language, size, dark, inline }) =>
  _.hasIn(languages, language) && (
    <Popup content={_.get(languages, `${language}.name`, language)} dark={dark}>
      <span>
        <Icon
          name={_.get(
            languages,
            `${language}.icon`,
            "ant-design:exclamation-circle-outlined"
          )}
          inline={inline}
          size={size}
        />
      </span>
    </Popup>
  );

LanguageIcon.propTypes = {
  language: string.isRequired,
  inline: bool,
  size: number.isRequired,
  dark: bool.isRequired,
};
LanguageIcon.defaultProps = {
  inline: false,
};

export default LanguageIcon;
