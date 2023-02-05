import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px 0px;
`
// ! background-color: ${({bg}) => bg};

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0; 

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  url: ${({ src }) => src };
  @media (max-width: ${({theme}) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  url: ${({ img }) => img };
  max-width: 375px;
  margin-left: 20px;
  @media (max-width: ${({theme}) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`