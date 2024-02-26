import { Component } from 'react';
import "../style/main.css";
import Home from './HeroSection';
import logo from '../assets/thB_logo_1.png';

class Navbar extends Component {
    state = { clicked : false };
    handleClick = () => {
        const { clicked } = this.state;
        if (clicked) {
            this.closeNav();
        } else {
            this.openNav();
        }
        this.setState({clicked : !clicked});
    }

    openNav = () => {
        document.getElementById("navbar").classList.add("active");
        document.body.style.overflow = "hidden";
        document.getElementById("overlay").classList.add("active");
        document.body.classList.add("blur");
        
    }

    closeNav = () => {
        document.getElementById("navbar").classList.remove("active");
        document.body.style.overflow = "";
        document.getElementById("overlay").classList.remove("active");
        document.body.classList.remove("blur");
        
    }
    render(){
    
    return (
        <header>
            <nav>
                {/* logo */}
                <a href="#">
                    <img src={logo} />
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"}>
                        <li><a className='active' href="index.html">Work</a></li>
                        <li><a target="_blank" href="https://drive.google.com/file/d/11xJjyW0m3M9fsuiEjsRPVn1UL1FVg4cZ/view?usp=sharing">Resume</a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            <div id="overlay" className={this.state.clicked ? "overlay active" : "overlay"}
            onClick={this.handleClick}></div>
        </header>

    );
}
}

export default Navbar;