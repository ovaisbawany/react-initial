import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      {name:'ovais', age:'30'},
      {name:'Danish', age:'35'}
    ]
  };

  swithNameHandler = () => {
    this.setState(
      {
        Persons: [
          {name:'Ovaiss', age:'31'},
          {name:'Danish', age:'35'}
        ]
      }
    );
  }
  swithNameHandler2 = (newName) => {
    this.setState(
      {
        Persons: [
          {name:newName, age:'31'},
          {name:'Danish', age:'35'}
        ]
      }
    );
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;    
    this.setState({showPersons : !show});
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        Persons: [
          {name:event.target.value, age:'31'},
          {name:'Danish', age:'35'}
        ],
        showPersons : false
      }
    );
  }
  render() {
    const buttonStyle = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px'
  };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={buttonStyle} onClick ={this.swithNameHandler}>Swith Name</button>
        <button onClick ={this.swithNameHandler2.bind(this,'asd')}>Swith Name2</button>
        <Person 
        name="ovais" 
        age="28">Hobbies are 1</Person>
        <Person name="Danish" age="35">Hobbies are 1</Person>
        <Person 
        name={this.state.Persons[0].name} 
        age={this.state.Persons[0].age}
        click={this.swithNameHandler}
        change={this.nameChangeHandler}>Hobbies are 1</Person>
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hello'));
  }
}

export default App;
