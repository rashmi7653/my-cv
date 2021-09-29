import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div id='experience'>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>Experience</strong>
                        </h6>
                        <div className='row'>
                            <div className='col s12 m4 14 x14'>
                                <strong>ROI Fast Track Infotech Solutions</strong>
                                <p className='blue-grey darken-2 year_exp white-text'>
                                    Jan<strong> 2018</strong> -
                                    Feb<strong> 2018</strong>
                                </p>
                            </div>
                            <div className='col s12 m8 18 x18'>
                                    <h6 className='no-pad mt-bottom'>
                                        <strong>Web Designer</strong>
                                    </h6>
                                    <ol className='exp-list'>
                                        <li>Manage digital design projects and work closely with clients to manage expectations,
                                             team roles, and the status of projects</li>
                                        <li>Designed and built responsive websites using HTML5, CSS3 , Bootstrap and Javascript</li>
                                        <li>Excellent knowledge of web standards, usability and web fonts</li>
                                        <li>Have strong typographic, color and layout skills and an understanding 
                                            of how these basic design principles are applied to the web</li>
                                        <li>Perform validation of completed websites which includes testing 
                                            of coding as well as debugging</li>
                                        <li>Work closely with back-end developers to seamlessly hand off front-end code</li>
                                    </ol>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
