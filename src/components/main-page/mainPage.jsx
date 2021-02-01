import React, { Component } from 'react';
import Card from '../card/card';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card text={"Hello there!"} img="www.this-is-an-url-com" />
        );
    }
}

export default MainPage;