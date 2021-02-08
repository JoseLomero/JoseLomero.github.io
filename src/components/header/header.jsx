import React, { Component } from 'react';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="img-header">
                <img src={this.props.url} alt="header"/>
            </div>
        );
    }
}

export default Header;