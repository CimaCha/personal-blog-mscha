import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonalInfo from './components/PersonalInfo';

class App extends React.Component {
  
  render(): React.ReactNode {  
    return (
      <div className="App">
        <div className='wrapper'>
          <Header/>
          <PersonalInfo/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;