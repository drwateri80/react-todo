import React, { Component } from 'react';
import styles from './style';
import AboutButton from './aboutButton';
import TextEffect from './textEffect';

var style;

class AboutUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }
  changeColor() {
    this.setState({hover: !this.state.hover})
  }

    render(){
      if(this.state.hover){
        style = {
          borderColor: '#7FFF00',
          backgroundColor: '#00008B'
        }
      } else {
          style = {
          background: '#FFE4C4',
          color: '#000000',
          }
        }
        return (/*return=return something  */
          <div>
            <p>maggie</p>
            <div className="container">
            <div>prom</div>
            <div>p</div>
            <div className="row">
            <div className="apple col-sm-4 col-xs-4">test</div>
            <div className="apple-2 col-sm-4 col-xs-4">test</div>
            <div className="apple-3 col-sm-4 col-xs-4">test</div>
            </div>
            {  /* caroul starts here */}
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
              </ol>

                <div className="carousel-inner" role="listbox">
                <div className="item active">
                <img src={require('../../images/lake1.jpg')} alt="" />
                </div>

                <div className="item">
                <img src={require('../../images/lake2.jpg')} alt="" />
                </div>

                <div className="item">
              <img src={require('../../images/lake3.jpg')} alt="" />
                </div>

                <div className="item">
              <img src={require('../../images/lake4.jpg')} alt="" />
                </div>
              </div>

                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
              {  /* caroul ends here */}

            <div>
            <i className="fa fa-commenting" aria-hidden="true"></i> {/*i can change the color/effect*/}
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" id="email" placeholder="enter your email here"/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" value="enter your password here"/>
              </div>
              <div className="checkbox">
                <label><input type="checkbox"/> Remember me</label>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            </div>

            <table className="table table-bordered table-hover">
                <thead>
                  <tr className="table-danger">
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="danger">
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>Yappy</td>
                    <td>Yappy.Co</td>
                    <td>yappy@gmail.com</td>
                    <td>123</td>
                  </tr>
                </tbody>
              </table>
              {/*inline styling of button: below */}
              <input className="btn wutever" type="submit" value="changehere"/>
              <button type="button" className="btn" style={style} /*<---inline style css */onMouseOver={this.changeColor.bind(this)} /*<---onMouseOver is a method.if we declare a method in the component, then we write like this */ onMouseLeave={this.changeColor.bind(this)} /*true/false */>hola2</button>
              <AboutButton name="hi" />
              <AboutButton name="hello "/> {/*i can put wutever here*/}
              <TextEffect/>
            </div>
          </div>
        );
    }
}
export default AboutUs;
