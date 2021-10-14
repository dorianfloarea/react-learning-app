import React, {Component} from 'react';
import {Content, Wrapper} from './BreadCrumb.styles';
import Link from 'next/link';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
    render() {
        const {movieTitle} = this.props;

        return (
            <Wrapper>
                <Content>
                    <Link href="/">
                        <a>
                            <span>Home</span>
                        </a>
                    </Link>
                    <span>|</span>
                    <span>{movieTitle}</span>
                </Content>
            </Wrapper>
        );
    }
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
};

export default BreadCrumb;