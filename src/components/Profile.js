import React, { Component } from 'react';
import ImgProfile from '../images/rashmi-img.jpg';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div>
            <div className="card">
                <div className="card-image">
                    <img className="activator" src={ImgProfile} alt="Rashmi Harsoor" />

                        {/* <Link className='btn-floating pulse halfway-fab'><i className='fab fa-facebook-f material-icons activator'></i></Link>
                        <Link className='btn-floating pulse halfway-fab'><i className='fab fa-linkedin material-icons activator'></i></Link> */}
                </div>   

            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    Rashmi Harsoor
                </span>
                <p><strong>Web Developer</strong></p>
                <p><strong>Email: </strong><a href="mailto:contact@test.com">rashmiharsoor11@gmail.com</a></p>
                <p><strong>phone: </strong>8792227653</p>
            </div>


            </div>
            </div>
        )
    }
}
