import React, {Component} from 'react';
import {Wrapper} from './Actor.styles';
import PropTypes from 'prop-types';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import NoImage from '../../../public/images/no_image.jpg';
import Image from 'next/image';

class Actor extends Component {
    render() {
        const {
                  name,
                  character,
                  profilePath
              } = this.props;

        return (
            <Wrapper>
                {profilePath
                    ? (<img className={'actor'} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${profilePath}`} alt="actor-thumb"/>)
                    : (<Image className={'actor'} src={NoImage} alt="actor-thumb"/>)
                }
                <h3>{name}</h3>
                <p>{character}</p>
            </Wrapper>
        );
    }
}

Actor.propTypes = {
    name     : PropTypes.string,
    character: PropTypes.string,
    imageUrl : PropTypes.string
};

export default Actor;