import React from 'react';

class App extends React.Component{
  render(){
      return(
        <div>
            <h2>somestuff</h2>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Boolean: {this.props.propBool}</h3>
        </div>
      );
  }
}

App.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
}

App.defaultProps = {
  propArray: [1,2,3,4,5]
}

export default App;
