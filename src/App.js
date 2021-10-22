import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movie/MovieDetail';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
