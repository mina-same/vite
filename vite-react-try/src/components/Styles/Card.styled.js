import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({layout}) => layout || "row" }; 

  h2{
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  img{
    margin-left: 5px;
    width: 80%
  }

  & > div{
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}){
    flex-direction: column;
    text-align: center;

    h2{
      font-size: 28px;
      font-weight: 900;
    }
    
    img{  
      width: 100%;
      margin: 20px 0;
    }
  }
`