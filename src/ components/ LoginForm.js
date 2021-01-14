import React, { Component } from 'react';
import '../css/LoginForm.css';


class LoginForm extends Component {
  render(){
    return (    
        <div className="loginForm">
          <h2> Sign in</h2>
          <form action="/action_page.php">
                <label for="fname">User name: </label>
                <input type="text" id="fname" name="fname"/><br></br>
                <label for="lname">Password: </label>
                <input type="text" id="lname" name="lname"/><br></br>
                <input type="submit" value="Singip to Coders-x"/>  <br></br>
                <input type="checkbox" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Keep me signed in</label>
           
            </form>
            <a class="link" href="#"> Forgot username?</a> 
            <a href="#"> Forgot password</a>
        </div>   

    );
  }
  
}

export default LoginForm 