import React, { Component } from 'react';
import Images from '../../utils/Images';
import './Banner.css';

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = this.props.text;
    return (
      <div>
        <div className="site-banner">
          <img className="site-banner-image" src={Images.banner}/>
        </div>
      </div>
    );
  }
}

export default Banner;
