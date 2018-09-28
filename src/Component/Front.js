import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
class Front extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.style.backgroundColor = "black"
    }
    changeColorBody = () => {
        let color = this.props.rdColor[Math.floor(Math.random()*this.props.rdColor.length)]
        document.body.style.backgroundColor = color
        return color
    }
    render() {
        
        return (
            
            <div className="container">
                <div id="quote-box" className="quote-box">
                    <div className="quote-text">
                        <i className="fa fa-quote-left"></i>
                        
                        <span style={{ background : this.color }} className="text">{this.props.content}</span>
                    </div>
                    <div className="quote-author">
                        <span className="author">- {this.props.author}</span>
                    </div>
                    <div className="buttons">
                        <a target="_blank" id="tweet-quote" className="btn" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.props.content}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        
                        <button onClick={() => this.changeColorBody()} id="new-quote" className="btn">New Quote</button>
                        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                        </CSSTransitionGroup>
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
        rdColor: state.randomColors
    }
}



export default connect(mapStateToProps)(Front);