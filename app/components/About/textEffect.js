import React from 'react'

/*always rememeber to read must-do manual */

class TextEffect extends React.Component { /* class name textEffect was wrong */
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }
  DateApple() {  /*Date()is an object, not a method  blue means method */
    this.setState({hover: !this.state.hover})
    console.log(this.state.hover);
  }

  render() {
    return(<div onMouseOver={this.DateApple.bind(this)} onMouseLeave={this.DateApple.bind(this)}>over here</div>);
  }
}

TextEffect.propTypes = {
  name: React.PropTypes.string,
}
export default TextEffect;
