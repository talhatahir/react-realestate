import React  from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

//Keeping it stateless

const App =() => (
    <div>
      <Header />
      <div className="container" >
        <Main />
      </div>
      <Footer/>
    </div>
  )


/*
class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
      <Footer />
              
      </div>
    );
  }
}
*/

export default App;
