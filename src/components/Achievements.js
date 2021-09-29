import React, { Component } from 'react'

export default class Achievements extends Component {
    render() {
        return (
            <div id='achievements'>
                <div className='card'>
                    <div className='card-content'>
                        <h6><strong>Certificate</strong></h6>
                        <p>React JS course Completion certificate at Udemy.</p>
                    </div>
                </div>   

                <div className='card'>    
                    <div className='card-content'>
                        <h6><strong>Achievements</strong></h6>
                            <ol className='exp-list'>
                                   <li>Spreadheaded a large-scale client project as a result of skill set 
                                       and completed the project two weeks ahead of schedule.</li>
                                   <li>Assistted the senior developer regularly with various tasks,
                                        which resulted in learning additional scripting languages.</li>
                                   <li>Won bronze medal in 100 mtrs race at district level.</li>
                                   <li>Actively participated and rewarded many medals in sports and 
                                       other cultural activities at my school annual sports day.</li>
                            </ol>
                    </div>
                </div>
            </div>
        )
    }
}
