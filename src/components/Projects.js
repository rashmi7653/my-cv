import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <div className='card'>
                    <div className='card-content'>
                    <h6><strong>Projects</strong></h6>
                        <ol className='proj-list'>
                        <li><strong>Eminent Minds (www.eminentminds.in)</strong></li>
                            <div className='card-action'>
                                <p>Conceptualized and implemented creative ideas for client websites, 
                                as well as created visual elements that are in line with our clients 
                                branding using html, css, javascript and worked closely with back-end 
                                developers to seamlessly hand off front-end code.
                               </p>
                        
                               <ul className='exp-list'>
                                   <p><strong>Responsibilites</strong></p>
                                   <li>Preparing design plans and presenting the website structure</li>
                                   <li>Incorporating functionalities and features into websites</li>
                                   <li>Designing responsive landing pages</li>
                                   <li>Conducting website testing</li>
                               </ul>
                           </div>

                           <li>
                             <strong>Sandgrouse Technologies (www.sandgrousetech.com)</strong>
                             </li>
                            <div className='card-action'>  
                                <p>Designed and built this responsive website using HTML, CSS, Bootstrap
                                     and Javascript with the team of 2members.
                               </p>
                        
                               <ul className='exp-list'>
                                   <p><strong>My Role</strong></p>
                                   <li>Conceptualizing creative ideas with clients</li>
                                   <li>Testing and Improving the design of the website</li>
                                   <li>worked closely with client to manage expectations and the status of project</li>
                               </ul>
                           </div>
                        </ol>

                    </div>
                </div>
            </div>
        )
    }
}
