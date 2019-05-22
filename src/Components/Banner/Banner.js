import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
    let inverse = this.props.inverse ? this.props.inverse : false;
    return (
      <div>
        <div className={inverse? 'site-banner-spacer site-banner-spacer-inverse' : 'site-banner-spacer'}>
          <div className="site-banner-border">
            <div className="site-banner-color"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
