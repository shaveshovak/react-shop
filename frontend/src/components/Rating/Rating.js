import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import './Rating.css';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
    <span>
        <FontAwesomeIcon 
            icon={
                value >= 1
                ? faStar 
                : value >= 0.5 
                ? faStarHalfAlt 
                : faStar
            } 
            style={{color}}
        />
        <FontAwesomeIcon 
            icon={
                value >= 2
                ? faStar 
                : value >= 1.5 
                ? faStarHalfAlt 
                : faStar
            } 
            style={{color}}
        />
        <FontAwesomeIcon 
            icon={
                value >= 3
                ? faStar 
                : value >= 2.5 
                ? faStarHalfAlt 
                : faStar
            } 
            style={{color}}
        />
        <FontAwesomeIcon 
            icon={
                value >= 4
                ? faStar 
                : value >= 3.5 
                ? faStarHalfAlt 
                : faStar
            } 
            style={{color}}
        />
        <FontAwesomeIcon 
            icon={
                value >= 5
                ? faStar 
                : value >= 4.5 
                ? faStarHalfAlt 
                : faStar
            } 
            style={{color}}
        /></span>
        <span>
            {text && text}
        </span>
    </div>
  )
}

// default properties
Rating.defaultProps = {
    color: '#f8e825'
}

// type check
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}

export default Rating;
