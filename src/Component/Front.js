import React, { Component } from 'react';

class Front extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div id="quote-box" className="quote-box">
                    <div className="quote-text">
                        <i className="fa fa-quote-left"></i>
                        
                        <span className="text">{this.props.content}</span>
                    </div>
                    <div className="quote-author">
                        <span className="author">- {this.props.author}</span>
                    </div>
                    <div className="buttons">
                        <a target="_blank" id="tweet-quote" className="btn" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.props.content}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <button id="new-quote" className="btn">New Quote</button>
                    </div>
                </div>
                <div className="footer">
                    <span className="coder-name">by <a href="https://github.com/davisnguyen111195">David</a></span>
                </div>
            </div>
        );
    }
}

export default Front;