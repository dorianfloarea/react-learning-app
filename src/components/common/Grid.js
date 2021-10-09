import React, {Component} from 'react';
import {Wrapper, Content} from './Grid.styles';
import PropTypes from 'prop-types';

class Grid extends Component {
    render() {
        const {header, children} = this.props;

        return (
            <Wrapper>
                <h1>{header}</h1>
                <Content>
                    {children}
                </Content>
            </Wrapper>
        )
    }
}

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid;