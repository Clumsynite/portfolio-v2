import React, { useState } from "react";
import Typed from "react-typed";

const Logo = ({ dark, mobile }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="michroma"
      style={{
        textAlign: "center",
        height: mobile ? 28 : 40,
        minWidth: mobile ? 120 : 240,
        fontSize: mobile ? 24 : 32,
        transition: "0.3s ease-in-out",
        color: dark ? "#fafafa" : "#000",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <Typed
          strings={["RISHABH", "PATHAK"]}
          typeSpeed={60}
          smartBackspace={true}
          backSpeed={60}
          showCursor={false}
          loop
        />
      ) : (
        "RISHABH"
      )}
    </div>
  );
};

export default Logo;
