import React, {Component} from 'react';
import {Image, Wrapper} from './Actor.styles';
import PropTypes from 'prop-types';

class Actor extends Component {
    render() {
        const {
                  name,
                  character,
                  imageUrl
              } = this.props;

        return (
            <Wrapper>
                <Image src={imageUrl} alt="actor-thumg"/>
                <h3>{name}</h3>
                <p>{character}</p>
            </Wrapper>
        )
    }
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
};

export default Actor;