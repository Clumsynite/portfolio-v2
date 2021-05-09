import { createMedia } from "@artsy/fresnel";
import React, { useState, useContext } from "react";
import {
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "../context/Theme";
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const DesktopContainer = ({ children, page, dark }) => {
  const [fixed, setFixed] = useState(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment textAlign="center" vertical>
          <Menu
            fixed={fixed ? "top" : null}
            pointing
            secondary
            size="large"
            inverted={dark}
          >
            <Container>
              <Menu.Item as="a" active={"Home" === page}>
                Home
              </Menu.Item>
              <Menu.Item as="a" active={"Work" === page}>
                Work
              </Menu.Item>
              <Menu.Item as="a" active={"Company" === page}>
                Company
              </Menu.Item>
              <Menu.Item as="a" active={"Careers" === page}>
                Careers
              </Menu.Item>
              <Menu.Item position="right">
                <ThemeSwitcher />
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Media>
  );
};
const MobileContainer = ({ children, dark }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted={dark}
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign="center"
            vertical
            style={{ transition: "0.3s linear" }}
          >
            <Container>
              <Menu inverted={dark} pointing secondary size="large">
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon
                    name="sidebar"
                    color={dark ? "grey" : "black"}
                    inverted={dark}
                  />
                </Menu.Item>
                <Menu.Item position="right">
                  <ThemeSwitcher />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

const ResponsiveContainer = ({ children, page }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MediaContextProvider>
      <DesktopContainer
        children={children}
        page={page}
        dark={theme === "dark"}
      />
      <MobileContainer
        children={children}
        page={page}
        dark={theme === "dark"}
      />
    </MediaContextProvider>
  );
};

export default ResponsiveContainer;
