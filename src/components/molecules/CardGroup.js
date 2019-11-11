import React from "react"
import PropTypes from "prop-types"

import Card from "./Card";

const CardGroup = (props) => (
    <div className="card-group" {...props}>
        {props.cards.map((card, index) => <li key={`card-${index}`}><Card {...card}/></li>)}
    </div>
);

CardGroup.propTypes = {
    cards: PropTypes.array.isRequired
};

CardGroup.defaultProps = {
    cards: []
};

export default CardGroup;