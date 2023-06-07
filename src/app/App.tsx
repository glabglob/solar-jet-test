import { BrowserRouter } from 'react-router-dom';

import Header from '../layout/header/Header';
import Body from '../layout/body/Body';
import Footer from '../layout/footer/Footer';

import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
