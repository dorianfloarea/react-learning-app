import React, {Component} from 'react';
import {Image} from './Thumb.styles';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Thumb extends Component {
    render() {
        const {
                  image,
                  movieId,
                  clickable
              } = this.props;
        return (
            <div>
                {clickable ? (
                    <Link to={`/movie/${movieId}`}>
                        <Image src={image} alt="movie-thumb"/>
                    </Link>
                ) : (
                    <Image src={image} alt="movie-thumb"/>
                )}
            </div>
        );
    }
}

Thumb.propTypes = {
    image    : PropTypes.string,
    movieId  : PropTypes.number,
    clickable: PropTypes.bool
};

export default Thumb;