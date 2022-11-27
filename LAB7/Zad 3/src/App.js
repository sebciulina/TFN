import React from 'react';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import browsers from './data/browsers';

function App() {
    return (
      <React.Fragment>
        <Navigation />
        <Header />
        <Article browsers={browsers} />
        <Footer />
      </React.Fragment>
    );
}

export default App;