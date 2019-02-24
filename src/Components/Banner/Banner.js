import React, { Component } from 'react';
import Images from '../../utils/Images';
import './Banner.css';

class Banner extends Component {
  render() {
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
