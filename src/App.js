import './App.css';
import { Component } from 'react';

import Header from './components/Header';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header/> 
        <LoginForm />
     
     
    </div>
  );
}
}

export default App;
