import styled from "styled-components";  

export const StyledSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  li{
    list-style: none; 
  }
  
  a{
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff; 
    display: inline-block;
    algin-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px; 
    width: 40px;
    text-decoration: none;
  }
  a > svg{
    margin: 10px;
  }
`;