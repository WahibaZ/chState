
import './App.css';
import React from 'react';
import { Component } from 'react';
import profile from './Images/profile.jpg';


import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 // `props` représente les propriétés reçues par la composante enfant
  constructor(props) { 
  // Appel du constructeur de la classe parente (`React.Component`) avec `props`
    super(props);      

    // Initialisation de l'état (state) spécifique à cette composante enfant
    this.state = {
      // Attribut propre à la composante enfant
      person:{
      fullName: 'My name', 
      bio: 'A software developer with 10 years of experience',
      imgSrc: profile,
      profession: 'Software Developer'
    },
    shows: false, // Initialement, le profil ne s'affiche pas
    timeElapsed: 0
    };
    
  }
  toggleShow=()=>{
    
    this.setState({ shows: !this.state.shows });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <div className="per">

        <button onClick={this.toggleShow}> {this.state.shows ? 'Hide Profile' : 'Show Profile'}</button>

        {this.state.shows ? (
       
          <div >
          <Card  style={{ width: '25rem' }}>
          <Card.Img  variant="top" src={this.state.person.imgSrc} alt="Profile" />
          <Card.Body >
            <Card.Title >{this.state.person.fullName}</Card.Title>
            <Card.Text>
              {this.state.person.bio} <br/>
              {this.state.person.profession}
            </Card.Text>          
          </Card.Body>
        </Card>
        </div>
        ) : null}
            
            <h5>Time since component mounted: {this.state.timeElapsed} seconds</h5>
   
      
  
        
      </div>
      );
  }
 
}

export default App;

      
 
