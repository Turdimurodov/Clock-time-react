import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
    constructor(props) {
        super(props)
        console.log("constructor");
        this.state = { time: new Date() }

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer)
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.timer = setInterval(() => {
            console.log(this.state.time.getSeconds());
            this.setState((staet) => {
                return { time: new Date() }
            })
        }, 1000);
    }

    getTime = (type) => {
        let n;
        switch (type) {
            case 'h': n = this.state.time.getHours(); break;
            case 'm': n = this.state.time.getMinutes(); break;
            case 's': n = this.state.time.getSeconds(); break;
        }
        n = (n < 10 ? '0' : '') + n;
        return n;
    }
    render() {
        console.log("render");
        return (
            <div className="clock">
                <h1>{this.getTime('h')}:{this.getTime('m')}:{this.getTime('s')}</h1>
            </div>
        )
    }
}
