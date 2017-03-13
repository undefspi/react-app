import React from 'react';

class App extends React.Component{
  render(){
    var i = 1;

    var myStyle = {
      fontSize: 30,
      color: '#FF0000'
    }
    return (
      <div>
        <Header/>
        <Content></Content>
        <h1 style={myStyle}>Hello World, react!!</h1>
        <p>Some Maths: 1 + 1 = {1+1}</p>
        <h2>Some more text</h2>
        <h2>even more</h2>
        <p>again</p>
        <p>more scripting: 10 * 2 = {document.write("some text from js")}</p>
        <h1>{i == 1 ? 'True':'False'}</h1>
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>Header Boo</h1>
      </div>
    );
  }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;
