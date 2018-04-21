import React from 'react';
import './Kaksquare.css';
import background from './Kaksquare.svg';

const Kaksquare = ({rightNum, downNum, ...props}) => (
  <div className="Kaksquare Square" {...props}>
    { rightNum || downNum ?
      <img className="slashed background" src={background} alt="" /> :
      <div className="background" /> }
    <div className="rightNum">{rightNum||''}</div>
    <div className="downNum">{downNum||''}</div>
  </div>
);

export default Kaksquare;
