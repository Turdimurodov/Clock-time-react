import React, { Component } from 'react';
import './Header.css'
import logo from '../../logo.svg';

export default class Header extends Component {


    render() {
        return (
            <div className="header shadow">
                <div className="container d-flex justify-content-between">
                    <div className="nav__brand">
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div>
                        <button className="btn L0 btn-primary">React project</button>
                    </div>
                </div>

            </div>
        )
    }
}
