import React, { Component } from 'react';
import Education from "./Education.js";
import Experience from "./Experience.js";
import Skills from "./Skills.js";
import Profile from "./Profile.js";
import Navbar from "./Navbar.js";
import About from './About.js';
import Projects from './Projects.js';
import Achievements from './Achievements.js';
import ScrollUpButton from "react-scroll-up";

export default class home extends Component {
    
    render() {
        return (
            <section>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                    <div className='col s12 m4 13'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 19'>
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Education />
                        <Achievements />
                    </div>
                    </div>
                    <ScrollUpButton showUnder={160}>
                        <div className='btn-floating pulse blue-grey darken-2'>
                        <i className='fas fa-angle-double-up material-icons activator'></i>
                        </div>
                    </ScrollUpButton>
                </div>
            </section>
        )
    }
}
