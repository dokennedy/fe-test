import React from 'react';
import "./card-style.css";


const Card = props => {
    return (
        <div className='card' >
            <div className='card-body text-dark' style={{backgroundColor: props.backgroundColor }}>
                <h6>{props.date}</h6>
                <h4 className='card-title'>{props.title}</h4>
                <p className="card-text" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <a className='card-btn btn btn-outline-light'>READ MORE</a>
            </div>
        </div>
    );
    
}

export default Card;