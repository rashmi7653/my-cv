import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <div id='education'>
            <div className='card'>
                <div className='card-content'>
                    <h6><strong>Education</strong></h6>
                    <table className='responsive-table striped'>
                        <thead>
                            <tr>
                                <th>School/University</th>
                                <th>Course</th>
                                <th>Score</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Godutai Engineering College for Women</td>
                                <td>BE (Computer Science Engineering)</td>
                                <td>63.57</td>
                                <td>2016</td>
                            </tr>
                            <tr>
                                <td>Shree Guru Vidya Peetha</td>
                                <td>PUC/12th Std</td>
                                <td>58.33</td>
                                <td>2012</td>
                            </tr>
                            <tr>
                                <td>Shree Guru Vidya Peetha</td>
                                <td>SSLC/10th Std</td>
                                <td>56.96</td>
                                <td>2010</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
        )
    }
};
