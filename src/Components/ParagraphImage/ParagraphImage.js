import React, { Component } from 'react';
import './ParagraphImage.css';

class ParagraphImage extends Component {
  render() {
    let image = this.props.image;
    let paragraph = this.props.text;
    let inverse = this.props.inverse ? this.props.inverse : false;
    console.log(inverse);
    return (
      <div className={inverse ? 'paragraph-image paragraph-image-reverse' : 'paragraph-image'}>
        <div className="paragraph-image-image-div">
          <img className="paragraph-image-image" src={image}/>
        </div>
        <div className="paragraph-image-paragraph">
          <p className="paragraph">{paragraph}</p>
        </div>
      </div>
    );
  }
}

export default ParagraphImage;