import React from "react";
import './progressBar.scss';
import PropTypes from 'prop-types';


function ProgressBar(props) {
    const style={
        'content': "",
        'width': '100%',
        'height': '90%',
        'backgroundColor':' #83867F',
        'position': 'absolute',
        'transtion':'width .2s ease 10s'

    }
  return (
   <div id='progress-container'>
       {props.completion} % completed
       <div id='progress-bar'><div id='trans' style={{...style, width:`${props.completion}%`}}></div></div>
   </div>
  );
}

ProgressBar.propTypes = {
    completion: PropTypes.string
  };

export default ProgressBar;
