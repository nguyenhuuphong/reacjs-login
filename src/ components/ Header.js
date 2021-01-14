import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render(){
    return (
      <div className="Header"> 
        <p>Go back
       </p>
       <img src="https://i.pinimg.com/originals/aa/98/11/aa9811e6b484b35bedb46fa85359df61.png" width='100px'/>
       <button type="button">Sign up</button>
      </div>
    );
  }
  
}

export default Header 