import React, { Component } from 'react';
import './Accomplishments.css';

class Accomplishments extends Component {
  render() {
    let accomplishments = [
      {text: 'Assisted in traing/mentoring new hires and interns starting at the company. ' + 
      'Helping them to learn new skills, learn new tools and boosting their comfidence.'},
      {text: 'Took on a large, long-term project and broke it down into smaller, managable pieces. ' + 
      'Handled the planning, prioritzation, and management for the project through to completion while also working on the code.'},
      {text: 'Given multiple presentations on both technical and non technical subjects in front of various audiences including C-level executives.'}
    ]
    return (
      <div className="accomplishments">
      <h4 className="accomplishments-header">Notable Accomplishments</h4>
        <ul>
          {accomplishments.map((accomplishment) => {
            return (<li className="accomplishment">
                {accomplishment.text}
              </li>)
          })} 
        </ul>     
      </div>
    );
  }
}

export default Accomplishments;