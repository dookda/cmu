import Header from './Header/Header';
import Footer from './Footer/Footer';
import './assets/css/soft-ui-dashboard.min.css'
import './Style.css'

import Card from './Card/Card';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className="container-fluid py-4">
        <div class="row">
          <Card name="salda" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
