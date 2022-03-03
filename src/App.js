import {Routes, Route, Link} from 'react-router-dom';
import './App.scss';
import Nav from './components/Navigation/nav';
import Header from './components/Header/header';
import Container from '@mui/material/Container';
import LandingPage from './pages/landingpages';
import Library from './pages/libraryPage';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='AppBody'> 
        <Header />

        <Container style={{padding: 0}} className='container'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Routes>
            <Route path="/Library" element={<Library />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
