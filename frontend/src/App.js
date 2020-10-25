import React from 'react';
import './bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductFullInfo from './screens/ProductFullInfo/ProductFullInfo';
import Home from './screens/Home/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductFullInfo} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
