import React, { Component } from 'react';

function Footer(props){
  return(
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">

                <li className="list-inline-item">
                  <a href="https://github.com/jasonsutter87">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; Jason Sutter 2017</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
