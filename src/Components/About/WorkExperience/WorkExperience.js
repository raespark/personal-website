import React, { Component } from 'react';
import './WorkExperience.css';

class WorkExperience extends Component {
  render() {
    let jobTitle = this.props.jobTitle;
    let company = this.props.company;
    // date is an object with a description string
    // and a string representing the time window
    let dates = this.props.dates;
    return (
      <div className="work-experience">
        <h4>{jobTitle}</h4>  
        <h5>{company}</h5>
        <div className="dates">
        {dates.map((date, key) => {
          return (<div className="date" key={key}>
              <div className='date-description'>
                {date.description}
              </div> 
              <span className='date-separator'>•</span> 
              <div className='date-time'>
                {date.time}
              </div>
            </div>)
        })} 
        </div>     
      </div>
    );
  }
}

export default WorkExperience;