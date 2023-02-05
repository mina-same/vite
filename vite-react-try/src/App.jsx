import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/Styles/Container.styled'
import GlobalStyle from './components/Styles/Global'
import content from './content'
import Card from './components/Card'
import Footer from './components/Footer'

const theme = {
  colors: {
    header: '#abfbff',
    body: '#fff', 
    footer: '#000',
  },
  mobile: "768px"
}

function App() {
  return (
    <ThemeProvider theme= {theme}>
      <GlobalStyle />

      <Header /> 

      <Container className="App">
        { 
          content.map( (item  , index) =>(
            <Card kay={index} item={item} />
          ))
        }
      </Container>

      <Footer/>
      
    </ThemeProvider>
  )
}

export default App
