import React, { Component } from 'react';
import Images from '../../../utils/Images';
import ParagraphImage from '../../ParagraphImage/ParagraphImage';

class WhoAmI extends Component {
  render() {
    let workAbout = 'Hi, I\'m Rachael!  I\'ve been a professional web developer since June of 2017, ' +
    'and graduated with a Bachelor of Science in Computer Science from UT Austin. I\'m a full stack engineer with a focus in UI,  ' +
    'and have a passion for good UX.  I also have experience leading multiple projects, organizations, ' + 
    'working with people of all technical backgrounds, and designing applications, taking them from concept to release.  '+
    'I\'m always excited and amazed with every new thing I learn with each project I work on, and can\'t wait to see what my future holds!';

    let hobbiesAbout = 'Outside of work, I have lots of things I like to do! I enjoy drawing, gaming, and even play music sometimes.  ' +
    'I just love to be creative and one of my favorite ways to do that is by making games.  ' +
    'Game development for me has been a way to flex my design muscles, dive into UX and code all in one!  ' +
    'Feel free to checkout some of my games in the Projects section! I\'ve also been trying to learn to speak Japanese, ' +
    'and hope to one day be able to hold casual conversations in the language.  がんばります！！';

    return (
      <div className="who-am-i">
        <ParagraphImage text = {workAbout} image = {Images.icon}/>
        <ParagraphImage text = {hobbiesAbout} image = {Images.hobbies} inverse/>
      </div>
    );
  }
}

export default WhoAmI;