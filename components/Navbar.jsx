import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import { Container, Icon, Menu, Sidebar } from "semantic-ui-react";
import Link from "next/link";
import { string, bool, element } from "prop-types";

import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import * as ThemeConfig from "../config/theme";
import Footer from "./Footer";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const MenuItems = ({ page, mobile }) => (
  <>
    <Link href="/">
      <Menu.Item
        link
        active={page === "Home"}
        style={{ marginLeft: mobile ? 0 : 50 }}
      >
        {mobile && <Icon name="home" />}
        Home
      </Menu.Item>
    </Link>
    <Link href="/projects">
      <Menu.Item link active={page === "Projects"}>
        {mobile && <Icon name="folder" />}
        Projects
      </Menu.Item>
    </Link>
    <Link href="/contact">
      <Menu.Item link active={page === "Contact"}>
        {mobile && <Icon name="at" />}
        Contact
      </Menu.Item>
    </Link>
    <Link href="/about">
      <Menu.Item link active={page === "About"}>
        {mobile && <Icon name="user" />}
        About
      </Menu.Item>
    </Link>
  </>
);
MenuItems.propTypes = {
  page: string.isRequired,
  mobile: bool,
};
MenuItems.defaultProps = {
  mobile: false,
};

const containerType = {
  children: element.isRequired,
  page: string.isRequired,
  dark: bool.isRequired,
};

const DesktopContainer = ({ children, page, dark }) => (
  <Media greaterThan="mobile">
    <Menu
      fixed="top"
      secondary
      size="large"
      inverted={dark}
      style={{
        backgroundColor: dark ? ThemeConfig.dark.bg : ThemeConfig.light.bg,
      }}
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
    <Container>{children}</Container>
    <Footer dark={dark} />
  </Media>
);
DesktopContainer.propTypes = containerType;

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
        >
          <MenuItems page={page} mobile />
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Container fluid>
            <Menu
              inverted={dark}
              pointing
              secondary
              size="large"
              fixed="top"
              style={{
                backgroundColor: dark
                  ? ThemeConfig.dark.bg
                  : ThemeConfig.light.bg,
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              <Menu.Item onClick={() => setSidebarOpened(true)} fitted>
                <Icon
                  name="sidebar"
                  color={dark ? "grey" : "black"}
                  size="large"
                  inverted={dark}
                  fitted
                />
              </Menu.Item>
              <Menu.Item>
                <Logo dark={dark} mobile />
              </Menu.Item>
              <Menu.Item position="right">
                <ThemeSwitcher mobile />
              </Menu.Item>
            </Menu>
          </Container>
          <Container>{children}</Container>
        </Sidebar.Pusher>
        <Footer dark={dark} mobile />
      </Sidebar.Pushable>
    </Media>
  );
};
MobileContainer.propTypes = containerType;

const ResponsiveContainer = ({ children, page, dark }) => (
  <MediaContextProvider>
    <DesktopContainer page={page} dark={dark}>
      {children}
    </DesktopContainer>
    <MobileContainer page={page} dark={dark}>
      {children}
    </MobileContainer>
  </MediaContextProvider>
);
ResponsiveContainer.propTypes = containerType;

export default ResponsiveContainer;
