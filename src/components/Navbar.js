import React, { Component } from 'react';
import {
    HashLink as Link
  } from 'react-router-hash-link';
  import M from  'materialize-css/dist/js/materialize.min.js'; 

export default class Navbar extends Component {
    componentDidMount() {
        let slide_out= document.querySelectorAll('.sidenav');
        M.Sidenav.init(slide_out, {});
        window.scrollTo(0, 0)
      }
    
    render() {
        return (
         <>
            <nav className="blue-grey darken-2">
               <div className="container">
                   <div className="nav-wrapper">
                       <Link to="/" className="brand-logo">CV</Link>
                       <Link to="/" data-target="slide_out" className="sidenav-trigger">
                           <i className="fas fa-bars material-icons"></i></Link>
                           <ul className="right hide-on-med-and-down">
                               <li>
                                   <Link smooth to="#home" className='active'>
                                       <i className="fas fa-home"></i>Home
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#skills">
                                       <i className="fas fa-file-code"></i>Skills
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#experience">
                                       <i className="fas fa-id-badge"></i>Experience
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#projects">
                                       <i className="fas fa-tasks"></i >Projects
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#education">
                                       <i className="fas fa-user-graduate"></i>Education
                                   </Link>
                               </li>

                               <li>
                                   <Link smooth to="#achievements">
                                       <i className="fas fa-award"></i>Achievements
                                   </Link>
                               </li>
                               
                           </ul>
                   </div>
               </div>
            </nav>

            <ul className="sidenav" id='slide_out'>
                               <li>
                                   <Link smooth to="#home" className='active'>
                                       <i className="fas fa-home"></i>Home
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#skills">
                                       <i className="fas fa-file-code"></i>Skills
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#experience">
                                       <i className="fas fa-id-badge"></i>Experience
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#projects">
                                       <i className="fas fa-tasks"></i>Projects
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#education">
                                       <i className="fas fa-user-graduate"></i>Education
                                   </Link>
                               </li>
                               <li>
                                   <Link smooth to="#achievements">
                                       <i className="fas fa-award"></i>Achievements
                                   </Link>
                               </li>
                               
                           </ul>
                        
         </>
        )
    }
}
