import React from 'react'

/*1) state declare origianl state(e.g., sitting in a chair,
--> 2) (where applicable) introduce methods(e.g., change state: stand up) /* QUESTIO: don't know when to use render. in react 101 sample they didn't write anythting inside render*/
// 3) -->render(e.g., new action: get water) /*QUESTIO: also in react 101 no render example */
//  */
var wutever;

export default class AboutButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false  /*QUESTIO: format? */
    }
  }
  /*setState=change the state
    ! means the resversed ; true only applies to boolean values (true/falue)*/
  changeColorapple() { /* this triggers the event */
    this.setState({hover: !this.state.hover})
  }
   render() { /*we write conditions here. in this case, we add css
     but we can also write css elsewhere*/
    if(this.state.hover){ /*referring to constructor(Props)original state */
      wutever = {
        borderColor: '#7FFF00',
        backgroundColor: '#00008B'
      }
    } else {
      wutever = {
         background: '#FFE4C4',
         color: '#000000',
      }
    }
/*style={wutever}is inline style css */ /* onMouseOver is a a method.if we declare a method in the component, then we write like this*/
/* these states alternate*/
/* this.props.name -> defines from other places */
/* return only picks one elemtn so if there are multiple elemnts, need to be wrraped in
one <div> element  Adjacent JSX elements must be wrapped in an enclosing tag*/

/* format matters!*/
    return(<div> {/*onmouseover can als be changed to onClick */}
            <button type="button" className="btn" style={wutever} onMouseOver={this.changeColorapple.bind(this)} onMouseLeave={this.changeColorapple.bind(this)} >{this.props.name}  </button>
            <div>{this.props.name}</div>
           </div>
          );
  }
}

AboutButton.propTypes = {
  name: React.PropTypes.string,
}
/* QUESTIO: CAN WE ALSO REFER TO REACT 101 FOR OTHER SAMPLES */
