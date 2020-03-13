import React from 'react';

import './App.css';

const saraDetails = {
  name: 'sara',
  photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgv3AdvHfQgWbLyRg5R_EM7SwGYTy-zm_qeOvYqciy6-S-TqeNA&s',
  description: 'my name is sara'
}


class App extends React.Component {
  state = {
    counter: 0,
    person: saraDetails
  }
  handleDanielClick = () => {
    this.setState({
      person: {
        name: 'Daniel',
        photo: '/logo192.png',
        description: 'my name is daniel, I am 30 years old'
      }
    })
  }
  handleHaroldClick = () => {
    this.setState({
      person: {
        name: 'Harold',
        photo: '/logo512.png',
        description: 'my name is Harold'
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.counter}</h1>
       <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
       <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button> */}
        <button onClick={() => this.setState({person: saraDetails})} >Sara</button>
        <button onClick={this.handleDanielClick}>Daniel</button>
        <button onClick={this.handleHaroldClick}>Harold</button> 
        <div>
          <h2>{this.state.person.name}</h2>
          <img src={this.state.person.photo} alt="" />
          <h3>{this.state.person.description}</h3>
        </div>
      </div>
    );

  }
}


export default App;
