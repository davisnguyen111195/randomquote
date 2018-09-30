import React, { Component } from 'react';
import { connect } from 'react-redux';
import store1 from '../Stores';
import styled from 'styled-components';


class Front extends Component {
    constructor() {
        super();
        this.state = {
            color2: "",
            quote: "Life isn’t about getting and having, it’s about giving and being.",
            author: "Kevin Kruse"
    }
        
    }

    componentDidMount() {
        document.body.style.backgroundColor = "black"
    }
    changeColorBody = () => {
        let color = this.props.rdColor[Math.floor(Math.random()*this.props.rdColor.length)]
        document.body.style.backgroundColor = color
        

        store1.dispatch({
            type: "RANDOM_QUOTE"
        })
        this.setState({
            color2: color,
            quote: this.props.rdQuote.randomQuote.quote,
            author: this.props.rdQuote.randomQuote.author
        })

    }
    render() {
        const WraperQuote = styled.div`
            color : ${this.state.color2};
        `;
        return (


            <div className="container">
                <div id="quote-box" className="quote-box">
                <WraperQuote>
                    <div className="quote-text">
                        <i className="fa fa-quote-left"></i>
                        <span className="text">{this.state.quote}</span>
                    </div>
                </WraperQuote>
                <WraperQuote>
                    <div className="quote-author">
                        <span className="author">- {this.state.author}</span>
                    </div>
                </WraperQuote>

                    <div className="buttons">
                    
                        <a style={{ backgroundColor : this.state.color2 }} target="_blank" id="tweet-quote" className="btn" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.state.quote}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        
                        <button style={{ backgroundColor : this.state.color2 }} onClick={() => this.changeColorBody()} id="new-quote" className="btn">New Quote</button>
                        
                    </div>
                </div>
                <div className="footer">
                    <span className="coder-name">by <a href="https://github.com/davisnguyen111195">David</a></span>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        rdColor: state.randomColors,
        rdQuote: state.randomQuotes
    }
}



export default connect(mapStateToProps)(Front);