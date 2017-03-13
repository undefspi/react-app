import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      data: 0
    }

    this.setNewNumber  = this.setNewNumber.bind(this);
  };

  setNewNumber(){
    this.setState({data: this.state.data + 1})
  }


  render(){
    return(
      <div>
        <button onClick = {this.setNewNumber}>INCREMENT</button>
        <Content myNumber = {this.state.data}></Content>
      </div>
    );
  }
}


class Content extends React.Component{

  const {value, stuff} = this.props

  console.log("log out some shit");
  componentWillMount(){
    console.log('Component WILL Mount!!');
  }

  componentDidMount(){
    console.log('Component DID Mount!!');
  }
  componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
     }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   randomFunction(){
     console.log('This should not be called.')
   }
  render(){
    return(
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}


export default App;
