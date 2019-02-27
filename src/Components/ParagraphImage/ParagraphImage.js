import React, { Component } from 'react';
import './ParagraphImage.css';

class ParagraphImage extends Component {
  render() {
    let image = this.props.image;
    let paragraph = this.props.text;
    let inverse = this.props.inverse ? this.props.inverse : false;
    let links = this.props.links ? this.props.links : [];
    return (
      <div className={inverse ? 'paragraph-image-inverse' : 'paragraph-image'}>
        <div className="paragraph-image-image-div">
          <img className="paragraph-image-image" src={image.image} alt={image.text}/>
        </div>
        <div className="paragraph-image-paragraph">
          <p className="paragraph">{paragraph}</p>
          {links.length > 0 && 
            <div className="links-wrapper">
              <div className="links">
                {links.map((link) => {
                  return (
                  <div>
                    <a target="_blank" rel="nofollow noopener noreferrer" href={link.url}>
                      {`-${link.text}-`}
                    </a>
                  </div>
                )})}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ParagraphImage;