import React from "react";

const SocialLinks = props => {

    const renderNetworks = props.networks.map(network => (
        <li key={network.name}>
            <a href={network.url} target="_blank">
                <i className={network.className}/>
            </a>
        </li>
    ));

    return (
        <ul className="social-links">{renderNetworks}</ul>
    )
}

export default SocialLinks
