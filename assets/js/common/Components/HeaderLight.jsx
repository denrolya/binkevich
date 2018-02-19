import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class HeaderLight extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {

        //TODO whats the first button <button className="navbar-toggler navbar-toggler-right"
        //TODO buttons on the right need to be in the middle of the navbar(horizontally)
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a href="#" className="navbar-left"><img
                            src="https://www.purelondon.com/__resource/companyProfiles/E662098F-5056-B762-909BEEE63F4C8BF2-logo.png"
                            width="150" height="70"/></a>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">JEWELLERY<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">BESPOKE<span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">CONTACT<span
                                    className="sr-only">(current)</span></a>
                            </li>

                        </ul>
                    </div>
                    <hr/>
                </nav>
            </div>
        );
    }
}


