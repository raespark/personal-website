import React, { Component } from 'react';
import './Accomplishments.css';

class Accomplishments extends Component {
  render() {
    let accomplishments = [
      {text: 'Assisted in training/mentoring new hires and interns starting at the company. ' + 
      'Helping them to learn new skills, learn new tools and boosting their confidence.'},
      {text: 'Took on a large, long-term project and broke it down into smaller, managaTook on large, long-term projects and broke them down into smaller, manageable pieces. ' + 
      'Handled the planning, prioritization, and management for the project through to completion while also working on the code.'},
      {text: 'Given multiple presentations on both technical and non technical subjects in front of various audiences including C-level executives.'}
    ]
    return (
      <div className="accomplishments">
      <h4 className="accomplishments-header">Notable Accomplishments</h4>
        <ul>
          {accomplishments.map((accomplishment,key) => {
            return (<li className="accomplishment" key={key}>
                {accomplishment.text}
              </li>)
          })} 
        </ul>     
      </div>
    );
  }
}

export default Accomplishments;