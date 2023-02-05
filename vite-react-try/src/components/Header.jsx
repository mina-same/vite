import React from "react";
import { Container } from "./Styles/Container.styled";
import { StyledHeader, Nav, Logo ,Image } from "./Styles/Header.styled";
import { Button } from "./Styles/Button.styled";
import { Flex } from "./Styles/flex.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="../../public/images/logo.svg" alt="logo-website" />
          <Button>try is free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">Get Started For Free</Button>
          </div>
            <Image src="../../public/images/illustration-mockups.svg" alt="mockups" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
