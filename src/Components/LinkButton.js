import React from 'react';

const LinkButton = ({icon, text, url, className}) => {
    return (
        <a href={url} className={`button project-button ${className}`} target="_blank" rel="noopener noreferrer">
            <i className={`fa fa-${icon} icon`}/> {text}
        </a>
    );
};

export default LinkButton;
