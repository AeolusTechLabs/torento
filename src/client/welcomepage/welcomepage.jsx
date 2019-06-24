import React, { Component } from 'react';
import './welcomepage.css';

class welcome extends Component {
    render() {
        return (
            <div>
            <header id="showcase">
            <h1>Aeolus Tech labs</h1>
        </header>
        <div id="content" className="container">
            <h3>FullStack Development....</h3>
        </div>
        <a className="btn" href="https://raghuproject.herokuapp.com/">
        <span>welcome</span>
      </a>
        </div>
        
        );
    
    }
}

export default welcome;
