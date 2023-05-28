import './App.css'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (

    <div className="App">

      <NavBar />

      <Container>
        <AppRoutes />
      </Container>

    </div>

  )
}

export default App;
