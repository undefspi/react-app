import React from 'react';
import { testingMaps } from './AppMap'

class App extends React.Component{
  constructor(){
    super();
      this.state = {
        data:
        [
          {
            component: 'First....',
            name: 'Dave',
            id:1
          },
          {
            component: 'Second....',
            name: 'bob',
            id: 2
          },
          {
            component: 'Third......',
            name: 'jen',
            id: 3
          }
        ]
    }

    testingMaps();
  }

  render(){
    return(
      <div>
          <div>
              {this.state.data.map(
                (dynamicComponent, i) => <Content key = {i} componentData = {dynamicComponent}/>)
              }
          </div>
      </div>
    );
  }
}

class Content extends React.Component{


  componentWillMount(){
    this.logoutsomestuff()
  }
  logoutsomestuff(){
    console.log("log out some stuff");
  }
  render(){
    const {component, id, name} = this.props.componentData
    // console.log("props = " + this.props.componentData)
    // var props = this.props.componentData
    // console.log(props)

    return(
      <div>
        <div>{component}</div>
        <div>{this.props.componentData.id}</div>
        <div>{this.props.componentData.name}</div>
      </div>
    );
  }
}

export default App;
