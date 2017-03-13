import React from 'react';
//To be used with main.js
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      header:"value to set the header props of the Header object",
      content:"value to set the content props of the Content object"
    }
  }

  render(){
    var html =
    <div>
      <Header headerProp={this.state.header}/>
      <Content contentProp={this.state.content}/>
    </div>
    return(html);
  }
}

class Header extends React.Component{
  render(){
    var html =
      <div>
          <h1>{this.props.headerProp}</h1>
      </div>
    return(html);
  }
}

class Content extends React.Component{
  render(){
    var html =
      <div>
          <h1>{this.props.contentProp}</h1>
      </div>
    return(html);
  }
}


export default App
