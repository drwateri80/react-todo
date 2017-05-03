import React, { PropTypes } from 'react';

const Test2 = (props) => (
<div>
{/*<!-- Header -->*/}
  <header id="header">
    <h1>Big Picture</h1>
    <nav>
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#one">What I Do</a></li>
        <li><a href="#two">Who I Am</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

{/*<!-- Intro -->*/}
  <section id="intro" className="main style1 dark fullscreen">
    <div className="content">
      <header>
        <h2>Hey.</h2>
      </header>
      <p>Welcome to <strong>Big Picture</strong> a responsive site template designed
      by <a href="https://html5up.net">HTML5 UP</a>, built on <a href="http://skel.io">Skel</a>,
      and released for free under the <a href="https://html5up.net/license">Creative Commons Attribution license</a>.</p>
      <footer>
        <a href="#one" className="button style2 down">More</a>
      </footer>
    </div>
  </section>

{/*<!-- One -->*/}
  <section id="one" className="main style2 right dark fullscreen">
    <div className="content box style2">
      <header>
        <h2>What I Do</h2>
      </header>
      <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
      Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
      id varius justo euismod in. Curabitur egestas consectetur magna.</p>
    </div>
    <a href="#two" className="button style2 down anchored">Next</a>
  </section>

{/*<!-- Two -->*/}
  <section id="two" className="main style2 left dark fullscreen">
    <div className="content box style2">
      <header>
        <h2>Who I Am</h2>
      </header>
      <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
      Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
      id varius justo euismod in. Curabitur egestas consectetur magna.</p>
    </div>
    <a href="#work" className="button style2 down anchored">Next</a>
  </section>

{/*<!-- Work -->*/}
  <section id="work" className="main style3 primary">
    <div className="content">
      <header>
        <h2>My Work</h2>
        <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
        arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>
      </header>

      {/*<!-- Gallery  -->*/}
        <div className="gallery">
          <article className="from-left">
            <a href="images/fulls/01.jpg" className="image fit"><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></a>
          </article>
          <article className="from-right">
            <a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
          </article>
          <article className="from-left">
            <a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
          </article>
          <article className="from-right">
            <a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
          </article>
          <article className="from-left">
            <a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
          </article>
          <article className="from-right">
            <a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
          </article>
        </div>

    </div>
  </section>

{/*<!-- Contact -->*/}
  <section id="contact" className="main style3 secondary">
    <div className="content">
      <header>
        <h2>Say Hello.</h2>
        <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
      </header>
      <div className="box">
        <form method="post" action="#">
          <div className="field half first"><input type="text" name="name" placeholder="Name" /></div>
          <div className="field half"><input type="email" name="email" placeholder="Email" /></div>
          <div className="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" /></li>
          </ul>
        </form>
      </div>
    </div>
  </section>

{/*<!-- Footer -->*/}
  <footer id="footer">

    {/*<!-- Icons -->*/}
      <ul className="actions">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
        <li><a href="#" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
      </ul>

    {/*<!-- Menu -->*/}
      <ul className="menu">
        <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
      </ul>

  </footer>
</div>
);

export default Test2;
