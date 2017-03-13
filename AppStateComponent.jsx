import React from 'react';
//To be used with main.js
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      header:"Header from state ya mmma",
      content:"Content from state"
    }
  }

  render(){
    var html =
    <div>
      <h1>{this.state.header}</h1>
      <h2>{this.state.content}</h2>
    </div>


    return(html);
  }
}


class Boxy extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key1:"this is the string for key1",
      key2:"this is the string for key2"
    }
  }
  render(){
    var html =
    <div>
      <h1>Lets get some values in</h1>
      <h2>{this.state.key1}</h2>
      <h2>{this.state.key2}</h2>
    </div>
    return(html);
  }
}
export default App;
