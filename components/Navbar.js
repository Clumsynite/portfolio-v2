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
import Logo from "./Logo";
import * as ThemeConfig from "../theme";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const MenuItems = ({ page, mobile }) => (
  <>
    <Menu.Item
      as="a"
      active={"Home" === page}
      style={{ marginLeft: mobile ? 0 : 50 }}
      to="/"
    >
      Home
    </Menu.Item>
    <Menu.Item as="a" active={"Projects" === page} to="/projects">
      Projects
    </Menu.Item>
    <Menu.Item as="a" active={"Contact" === page} to="/contact">
      Contact
    </Menu.Item>
    <Menu.Item as="a" active={"About" === page} to="/about">
      About
    </Menu.Item>
  </>
);

const DesktopContainer = ({ children, page, dark }) => {
  const [fixed, setFixed] = useState(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment vertical>
          <Menu
            fixed={fixed ? "top" : null}
            secondary
            size="large"
            inverted={dark}
          >
            <Container
              fluid
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <Menu.Item>
                <Logo dark={dark} />
              </Menu.Item>
              <MenuItems page={page} />
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
const MobileContainer = ({ children, dark, page }) => {
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
          style={{
            backgroundColor: dark ? ThemeConfig.dark.bg : ThemeConfig.light.bg,
          }}
        >
          <MenuItems page={page} mobile />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            style={{
              backgroundColor: dark
                ? ThemeConfig.dark.bg
                : ThemeConfig.light.bg,
            }}
          >
            <Container
              fluid
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <Menu inverted={dark} pointing secondary size="large">
                <Menu.Item onClick={() => setSidebarOpened(true)} fitted>
                  <Icon
                    name="sidebar"
                    color={dark ? "grey" : "black"}
                    size="large"
                    inverted={dark}
                  />
                </Menu.Item>
                <Menu.Item fitted>
                  <Logo dark={dark} mobile={true} />
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
