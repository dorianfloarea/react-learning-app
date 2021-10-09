import React, {Component} from 'react';
import {Content, Wrapper} from './BreadCrumb.styles';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
    render() {
        const {movieTitle} = this.props;

        return (
            <Wrapper>
                <Content>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    <span>|</span>
                    <span>{movieTitle}</span>
                </Content>
            </Wrapper>
        )
    }
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
};

export default BreadCrumb;