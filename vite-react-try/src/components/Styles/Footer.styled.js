import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer}; 
  color: ${({ theme }) => theme.colors.body};
  padding: 100px 0 60px;

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-algin: center; 

    img{
      margin-left: 45px;
      margin-bottom: 20px;
    }

    ul{
      padding: 0;
    }

    p{
      text-align: center;
    }
  }
`;