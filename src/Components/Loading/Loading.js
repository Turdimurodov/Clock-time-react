import React, { Component } from 'react';
import './Loading.css';

export default class Loading extends Component {
    constructor(props) {
        super(props)
        console.log("constructor");
        this.state = { step: 0, color: "#000", a: true }

    }

    stoploading = () => {
        if (this.state.a) {
            clearInterval(this.timer);
        }
        else {
            this.timer = setInterval(() => {
                this.state.step < 100 && this.setState((state) => {
                    return { step: state.step + 1 }
                })
            }, 100);
        }
        this.setState((state) => {
            return { a: !state.a }
        })
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.timer = setInterval(() => {
            this.state.step < 100 && this.setState((state) => {
                return { step: state.step + 1 }
            })
        }, 100);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        this.setState((state) => {
            if (this.state.step <= 5) {
                this.state.color = "red"
            }
            else if (this.state.step <= 10) {
                this.state.color = "blue"
            }
            else if (this.state.step <= 15) {
                this.state.color = "dark"
            }
            else if (this.state.step <= 20) {
                this.state.color = "#f54f4f"
            }
            else if (this.state.step <= 25) {
                this.state.color = "yellow"
            }
            else if (this.state.step <= 30) {
                this.state.color = "#9079f5"
            }
            else if (this.state.step <= 35) {
                this.state.color = "white"
            }
            else if (this.state.step <= 40) {
                this.state.color = "#4a24f3"
            }
            else if (this.state.step <= 45) {
                this.state.color = "black"
            }
            else if (this.state.step <= 50) {
                this.state.color = "#555555"
            }
            else if (this.state.step <= 55) {
                this.state.color = "#333333"
            }
            else if (this.state.step <= 60) {
                this.state.color = "#222222"
            }
            else if (this.state.step <= 65) {
                this.state.color = "#000000"
            }
            else if (this.state.step <= 70) {
                this.state.color = "#4a24f3"
            }
            else if (this.state.step <= 75) {
                this.state.color = "#83f183"
            }
            else if (this.state.step <= 80) {
                this.state.color = "222222"
            }
            else if (this.state.step <= 85) {
                this.state.color = "#38f540"
            }
            else if (this.state.step <= 90) {
                this.state.color = "red"
            }
            else if (this.state.step <= 95) {
                this.state.color = "white"
            }
            else if (this.state.step < 100) {
                this.state.color = "green"
            }


        })
    }
    render() {
        console.log("render");
        return (
            <div>
                <div className="loadingPanel mt-5 mb-5">
                    <span className="loadingprasents">
                        {this.state.step}%
                    </span>
                    <div className="loading" style={{ backgroundColor: this.state.color, width: `${this.state.step}%` }}></div>
                </div>
                <br />
                <div>
                    <button className="btn btn-primary" onClick={this.stoploading}>{this.state.a ? "Stop" : "Start"}</button>
                </div>
            </div>
        )
    }
}