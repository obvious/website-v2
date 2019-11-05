import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

import Card from "./Card";

const CardGroupContainer = styled.ul`
  
`;

const CardGroup = (props) => (
    <CardGroupContainer className="card-group" {...props}>
        {props.cards.map((card, index) => <li key={`card-${index}`}><Card {...card}/></li>)}
    </CardGroupContainer>
);

CardGroup.propTypes = {
    cards: PropTypes.array.isRequired
};

CardGroup.defaultProps = {
    cards: []
};

export default CardGroup;